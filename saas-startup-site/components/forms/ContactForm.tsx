"use client";

import { FormEvent, useState } from "react";

import { buttonClassName } from "@/components/ui/ButtonLink";

type FormValues = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  workflowType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  teamSize: "",
  workflowType: "",
  message: "",
};

const teamSizeOptions = ["1-25", "26-100", "101-500", "500+"];
const workflowOptions = [
  "Revenue operations",
  "Customer onboarding",
  "Support operations",
  "Finance workflows",
  "Platform and systems",
];

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid work email address.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Please share at least 20 characters so we can route your request.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setValues(initialValues);
  }

  function handleChange(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  if (submitted) {
    return (
      <div
        className="rounded-[1.6rem] border border-emerald-300/40 bg-emerald-500/12 p-6"
        role="status"
        aria-live="polite"
      >
        <p className="data-label text-emerald-200">Request received</p>
        <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white">
          Message sent successfully
        </h3>
        <p className="mt-3 text-sm leading-6 text-emerald-50/90">
          Thanks for reaching out. A product specialist will follow up shortly with next steps
          and available demo times.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={buttonClassName("light", "mt-5")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Full name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => handleChange("name", event.target.value)}
            className="form-input"
            placeholder="Jordan Patel"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-xs text-rose-300">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => handleChange("email", event.target.value)}
            className="form-input"
            placeholder="jordan@company.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-xs text-rose-300">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="company" className="form-label">
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={(event) => handleChange("company", event.target.value)}
            className="form-input"
            placeholder="Northstar Cloud"
          />
        </div>

        <div>
          <label htmlFor="teamSize" className="form-label">
            Team size
          </label>
          <select
            id="teamSize"
            name="teamSize"
            value={values.teamSize}
            onChange={(event) => handleChange("teamSize", event.target.value)}
            className="form-select"
          >
            <option value="">Select range</option>
            {teamSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="workflowType" className="form-label">
          Primary workflow focus
        </label>
        <select
          id="workflowType"
          name="workflowType"
          value={values.workflowType}
          onChange={(event) => handleChange("workflowType", event.target.value)}
          className="form-select"
        >
          <option value="">Select workflow area</option>
          {workflowOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="form-label">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="form-textarea min-h-[8rem]"
          placeholder="Tell us which workflows you want to standardize, where the current handoffs break down, and who needs visibility."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-xs text-rose-300">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-300">
          Typical response time is one business day, faster for active evaluations.
        </p>
        <button
          type="submit"
          className={buttonClassName("light", "w-full sm:w-auto")}
        >
          Request walkthrough
        </button>
      </div>
    </form>
  );
}
