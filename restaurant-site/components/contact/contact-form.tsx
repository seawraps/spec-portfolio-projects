"use client";

import { FormEvent, useState } from "react";

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

  const hasErrors = Object.keys(errors).length > 0;

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
    <div className="surface-card rounded-[2.2rem] p-6 sm:p-8">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#9a6435]">
        Guest Relations
      </p>
      <h2 className="mt-4 font-display text-[2.7rem] leading-[0.92] text-[#201511]">
        Send us a message
      </h2>
      <p className="mt-3 text-base leading-relaxed text-[#5b4538]">
        Use this form for reservations above eight guests, private events, collaborations, or
        general questions about the dining room.
      </p>

      {submitted ? (
        <div
          className="mt-6 rounded-[1.6rem] border border-emerald-200 bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-900"
          role="status"
        >
          <p className="font-semibold uppercase tracking-[0.14em]">Message sent successfully.</p>
          <p className="mt-2">
            Thank you for contacting Astera. A member of the team will reply shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className={buttonClassName("secondary", "mt-4")}
          >
            Send another message
          </button>
        </div>
      ) : null}

      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#6c4a31]"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-2 w-full rounded-[1.2rem] border border-[#ceb59d] bg-[rgba(255,255,255,0.72)] px-4 py-3 text-[#201511] outline-none ring-[#d1a364] transition focus:ring-2"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-xs text-red-700">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#6c4a31]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              className="mt-2 w-full rounded-[1.2rem] border border-[#ceb59d] bg-[rgba(255,255,255,0.72)] px-4 py-3 text-[#201511] outline-none ring-[#d1a364] transition focus:ring-2"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email ? (
              <p id="email-error" className="mt-2 text-xs text-red-700">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#6c4a31]"
            >
              Phone <span className="text-[#8a6a52]">(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className="mt-2 w-full rounded-[1.2rem] border border-[#ceb59d] bg-[rgba(255,255,255,0.72)] px-4 py-3 text-[#201511] outline-none ring-[#d1a364] transition focus:ring-2"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone ? (
              <p id="phone-error" className="mt-2 text-xs text-red-700">
                {errors.phone}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold uppercase tracking-[0.18em] text-[#6c4a31]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="mt-2 w-full rounded-[1.2rem] border border-[#ceb59d] bg-[rgba(255,255,255,0.72)] px-4 py-3 text-[#201511] outline-none ring-[#d1a364] transition focus:ring-2"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-xs text-red-700">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button type="submit" className={buttonClassName("primary")}>
          Send Message
        </button>

        {hasErrors ? (
          <p className="text-xs text-[#7a5c46]">
            Please correct the highlighted fields and submit again.
          </p>
        ) : null}
      </form>
    </div>
  );
}
