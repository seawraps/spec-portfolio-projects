"use client";

import { type FormEvent, useMemo, useState } from "react";

import { buttonClassName } from "@/components/ui/button-link";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function validateForm(values: FormState): FormErrors {
  const errors: FormErrors = {};
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedPhone = values.phone.trim();
  const trimmedMessage = values.message.trim();

  if (!trimmedName) {
    errors.name = "Please enter your name.";
  }

  if (!trimmedEmail) {
    errors.email = "Please enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
    errors.email = "Please use a valid email format.";
  }

  if (trimmedPhone && !/^[+()\-\s\d]{7,20}$/.test(trimmedPhone)) {
    errors.phone = "Please use a valid phone number format.";
  }

  if (!trimmedMessage) {
    errors.message = "Please share a few details about your project.";
  } else if (trimmedMessage.length < 20) {
    errors.message = "Please include at least 20 characters for context.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  function onFieldChange(field: keyof FormState, value: string) {
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

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitted(true);
    setValues(initialState);
  }

  if (isSubmitted) {
    return (
      <div
        className="rounded-[0.95rem] border border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6"
        role="status"
      >
        <h3 className="font-display text-4xl text-[var(--color-brand)]">Thanks, we got it.</h3>
        <p className="mt-3 text-sm leading-8 text-[var(--color-muted)] sm:text-base">
          Your message was submitted successfully. A project specialist will follow up within
          one business day.
        </p>
        <button
          type="button"
          className={buttonClassName("primary", "mt-6")}
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form noValidate className="space-y-4" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => onFieldChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="mt-2 w-full rounded-[0.8rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.95)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[color:rgba(36,54,75,0.14)]"
          placeholder="Jordan Smith"
          required
        />
        {errors.name ? (
          <p id="name-error" className="mt-1 text-sm text-[var(--color-error)]">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => onFieldChange("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="mt-2 w-full rounded-[0.8rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.95)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[color:rgba(36,54,75,0.14)]"
            placeholder="you@example.com"
            required
          />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-sm text-[var(--color-error)]">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
            Phone (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => onFieldChange("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="mt-2 w-full rounded-[0.8rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.95)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[color:rgba(36,54,75,0.14)]"
            placeholder="(615) 555-0192"
          />
          {errors.phone ? (
            <p id="phone-error" className="mt-1 text-sm text-[var(--color-error)]">
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-[0.74rem] font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => onFieldChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="mt-2 w-full rounded-[0.8rem] border border-[var(--color-border)] bg-[color:rgba(255,250,243,0.95)] px-4 py-3 text-sm leading-7 text-[var(--color-ink)] outline-none transition focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[color:rgba(36,54,75,0.14)]"
          placeholder="Tell us which rooms are involved, what is not working, and your preferred timing."
          required
        />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-sm text-[var(--color-error)]">
            {errors.message}
          </p>
        ) : null}
      </div>

      {hasErrors ? (
        <p className="text-sm text-[var(--color-error)]" role="alert">
          Please correct the highlighted fields and resubmit.
        </p>
      ) : null}

      <button
        type="submit"
        className={buttonClassName("primary", "w-full sm:w-auto")}
      >
        Request My Consultation
      </button>
    </form>
  );
}
