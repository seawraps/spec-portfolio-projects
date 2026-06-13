#!/usr/bin/env node
/**
 * Wu Wraps MCP server.
 *
 * Exposes the shop's services, hours, service areas, FAQ, and a quote-intake
 * tool so an AI assistant (on a phone line, website widget, or chat) can answer
 * customer questions accurately and capture lead details in a consistent shape.
 *
 * Transport: stdio (local). Run with `npm run build && npm start`.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { business, faq, serviceAreas, services } from "./data.js";

const server = new McpServer({ name: "wuwraps", version: "0.1.0" });

/** Wrap a plain string as an MCP text result. */
function text(body: string) {
  return { content: [{ type: "text" as const, text: body }] };
}

/** Wrap an actionable error as an MCP error result. */
function failure(body: string) {
  return { content: [{ type: "text" as const, text: body }], isError: true };
}

const serviceIds = services.map((s) => s.id).join(", ");

server.registerTool(
  "wuwraps_list_services",
  {
    title: "List Wu Wraps services",
    description:
      "List every vinyl wrap service Wu Wraps offers, each with its id, a one-line summary, and typical turnaround. Call this first to see what is available, then call wuwraps_get_service for the full breakdown of one service.",
    inputSchema: {},
  },
  async () => {
    const lines = services.map(
      (s) => `- ${s.name} (id: ${s.id})\n  ${s.shortDescription}\n  ${s.turnaround}`,
    );
    return text(`Wu Wraps services:\n\n${lines.join("\n\n")}`);
  },
);

server.registerTool(
  "wuwraps_get_service",
  {
    title: "Get one service's details",
    description:
      "Get the full description, what's included, who it's ideal for, and turnaround for a single Wu Wraps service. Pass the service id from wuwraps_list_services.",
    inputSchema: {
      id: z.string().describe("Service id, e.g. 'color-change-wraps' (see wuwraps_list_services)."),
    },
  },
  async ({ id }) => {
    const service = services.find((s) => s.id === id);
    if (!service) {
      return failure(
        `No service with id "${id}". Valid ids are: ${serviceIds}. Call wuwraps_list_services to see all options.`,
      );
    }
    const includes = service.includes.map((i) => `  - ${i}`).join("\n");
    return text(
      [
        service.name,
        "",
        service.fullDescription,
        "",
        `Ideal for: ${service.idealFor}`,
        "",
        "Includes:",
        includes,
        "",
        service.turnaround,
      ].join("\n"),
    );
  },
);

server.registerTool(
  "wuwraps_get_business_info",
  {
    title: "Get business info",
    description:
      "Get Wu Wraps contact details, owner, address, shop hours, Instagram, and tagline. Use when a customer asks where the shop is, when it's open, or how to get in touch.",
    inputSchema: {},
  },
  async () => {
    return text(
      [
        `${business.name} — owner ${business.owner}, wrapping since ${business.foundedYear}.`,
        business.tagline,
        "",
        `Phone: ${business.phoneDisplay}`,
        `Email: ${business.email}`,
        `Address: ${business.address}`,
        `Instagram: ${business.instagram} (${business.instagramUrl})`,
        "",
        "Hours:",
        ...business.hours.map((h) => `  ${h}`),
      ].join("\n"),
    );
  },
);

server.registerTool(
  "wuwraps_list_service_areas",
  {
    title: "List service areas",
    description:
      "List the cities and areas Wu Wraps serves around Renton, Seattle, and the greater Puget Sound. Use to confirm whether a customer's location is covered.",
    inputSchema: {
      near: z
        .string()
        .optional()
        .describe("Optional city or area to check for coverage, e.g. 'Bellevue'."),
    },
  },
  async ({ near }) => {
    if (near) {
      const hit = serviceAreas.find((c) => c.toLowerCase() === near.trim().toLowerCase());
      if (hit) {
        return text(`Yes, Wu Wraps serves ${hit}. Full area: ${serviceAreas.join(", ")}, and the greater Puget Sound.`);
      }
      return text(
        `${near} isn't on the named list (${serviceAreas.join(", ")}), but Wu Wraps covers the greater Puget Sound. Best to confirm directly at ${business.phoneDisplay}.`,
      );
    }
    return text(`Wu Wraps serves: ${serviceAreas.join(", ")}, and the greater Puget Sound.`);
  },
);

server.registerTool(
  "wuwraps_search_faq",
  {
    title: "Search the FAQ",
    description:
      "Search Wu Wraps frequently asked questions (wrap lifespan, paint safety, fleets, pricing, location) by keyword. Returns matching question and answer pairs.",
    inputSchema: {
      query: z.string().describe("Keywords to search for, e.g. 'paint' or 'how long'."),
    },
  },
  async ({ query }) => {
    const q = query.trim().toLowerCase();
    const matches = q
      ? faq.filter(
          (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q),
        )
      : [];
    if (matches.length === 0) {
      return text(
        `No FAQ entry matched "${query}". All questions:\n` +
          faq.map((f) => `- ${f.question}`).join("\n") +
          `\n\nFor anything else, call ${business.phoneDisplay}.`,
      );
    }
    return text(matches.map((f) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n"));
  },
);

server.registerTool(
  "wuwraps_create_quote_request",
  {
    title: "Create a quote request",
    description:
      "Capture a customer's quote request in a consistent format Mark can act on. Collect at least a name and one contact method. Returns a formatted intake summary plus the next step. This does not send anything; hand the summary to the shop or the contact form.",
    inputSchema: {
      name: z.string().min(1).describe("Customer's name."),
      email: z.string().email().optional().describe("Customer email (provide email or phone)."),
      phone: z.string().optional().describe("Customer phone (provide email or phone)."),
      vehicle: z.string().optional().describe("Year / make / model, e.g. '2021 Tesla Model 3'."),
      serviceId: z
        .string()
        .optional()
        .describe(`Service id of interest, one of: ${serviceIds}.`),
      details: z.string().optional().describe("What the customer wants (finish, coverage, timeline)."),
    },
  },
  async ({ name, email, phone, vehicle, serviceId, details }) => {
    if (!email && !phone) {
      return failure(
        "A quote request needs at least one contact method. Ask the customer for an email or phone number, then call this tool again.",
      );
    }
    let serviceName = "Not specified";
    if (serviceId) {
      const service = services.find((s) => s.id === serviceId);
      if (!service) {
        return failure(
          `Unknown serviceId "${serviceId}". Valid ids: ${serviceIds}. Omit it or pick a valid one.`,
        );
      }
      serviceName = service.name;
    }
    const summary = [
      "New Wu Wraps quote request",
      "==========================",
      `Name:     ${name}`,
      `Email:    ${email ?? "—"}`,
      `Phone:    ${phone ?? "—"}`,
      `Vehicle:  ${vehicle ?? "Not specified"}`,
      `Service:  ${serviceName}`,
      `Details:  ${details ?? "Not specified"}`,
      "",
      `Next step: send this to ${business.email} or call ${business.phoneDisplay}. Mark replies within one business day with a straight, honest quote.`,
    ].join("\n");
    return text(summary);
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // stderr so it never corrupts the stdio JSON-RPC stream on stdout
  console.error("wuwraps MCP server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error starting wuwraps MCP server:", error);
  process.exit(1);
});
