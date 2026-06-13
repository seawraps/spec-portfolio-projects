# Wu Wraps MCP server

A small [Model Context Protocol](https://modelcontextprotocol.io) server that
exposes Wu Wraps' real business data as tools, so an AI assistant (a website
chat widget, a phone-line agent, or a back-office helper) can answer customer
questions accurately and capture quote requests in a consistent shape.

Built with the MCP TypeScript SDK over the **stdio** transport.

## Tools

| Tool | What it does |
| --- | --- |
| `wuwraps_list_services` | List all services with a summary and turnaround |
| `wuwraps_get_service` | Full details for one service (by id) |
| `wuwraps_get_business_info` | Contact, address, hours, Instagram |
| `wuwraps_list_service_areas` | Cities served; optionally check one |
| `wuwraps_search_faq` | Keyword search across the FAQ |
| `wuwraps_create_quote_request` | Validate and format a lead for the shop |

All tool names share the `wuwraps_` prefix, return focused text, and emit
actionable error messages (for example, an unknown service id lists the valid
ids and points to `wuwraps_list_services`).

## Run

```bash
npm install
npm run build
npm start          # serves on stdio
```

## Use from Claude Code / Claude Desktop

Add to your MCP config (adjust the absolute path):

```json
{
  "mcpServers": {
    "wuwraps": {
      "command": "node",
      "args": ["/absolute/path/to/wuwraps-mcp/dist/index.js"]
    }
  }
}
```

## Data

Business data lives in `src/data.ts` and mirrors the marketing site's
`wuwraps-site/lib/data.ts`. Update both together when services, hours, or
contact details change.
