"use client";

import { FormEvent, useState } from "react";

import { buttonClassName } from "@/components/ui/ButtonLink";

type FormValues = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  message: "",
};

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
        className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6"
        role="status"
        aria-live="polite"
      >
        <h3 className="font-display text-2xl font-semibold tracking-tight text-emerald-900">
          Message sent successfully
        </h3>
        <p className="mt-3 text-sm leading-6 text-emerald-800">
          Thanks for reaching out. A product specialist will follow up shortly with next steps
          and available demo times.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={buttonClassName("primary", "mt-5 bg-emerald-700 hover:bg-emerald-600")}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form noValidate className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
          Full name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => handleChange("name", event.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 text-xs text-rose-600">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => handleChange("email", event.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email ? (
          <p id="email-error" className="mt-1 text-xs text-rose-600">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-slate-700">
          Company
        </label>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => handleChange("company", event.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-xs text-rose-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className={buttonClassName("primary")}
      >
        Send message
      </button>
    </form>
  );
}
