"use client";

import { FormEvent, useMemo, useState } from "react";

import { buttonClassName } from "@/components/ui/button-styles";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (values.phone.trim()) {
    const phonePattern = /^[0-9+()\-\.\s]{7,20}$/;
    if (!phonePattern.test(values.phone.trim())) {
      errors.phone = "Please provide a valid phone number or leave this field empty.";
    }
  }

  if (values.message.trim().length < 12) {
    errors.message = "Please include a few more details in your message.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setValues(initialValues);
  }

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  return (
    <div className="surface-card-soft rounded-3xl p-6 sm:p-8">
      <h2 className="font-display text-3xl text-stone-900">Send us a message</h2>
      <p className="mt-2 text-sm text-stone-600">
        We respond within one business day for reservations, private events, and general inquiries.
      </p>

      {submitted ? (
        <div
          className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-800"
          role="status"
        >
          <p className="font-semibold">Message sent successfully.</p>
          <p className="mt-1">
            Thank you for contacting Astera. A team member will reply soon.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className={buttonClassName("secondary", "mt-3")}
          >
            Send another message
          </button>
        </div>
      ) : null}

      <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-800">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-800 outline-none ring-amber-500 transition focus:ring-2"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-xs text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-800">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-800 outline-none ring-amber-500 transition focus:ring-2"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-xs text-red-700">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-800">
            Phone <span className="text-stone-500">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-800 outline-none ring-amber-500 transition focus:ring-2"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1 text-xs text-red-700">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-stone-800">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-800 outline-none ring-amber-500 transition focus:ring-2"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
          />
          {errors.message ? (
            <p id="message-error" className="mt-1 text-xs text-red-700">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          className={buttonClassName("primary")}
        >
          Send Message
        </button>

        {hasErrors ? (
          <p className="text-xs text-stone-500">Please correct the highlighted fields and submit again.</p>
        ) : null}
      </form>
    </div>
  );
}
