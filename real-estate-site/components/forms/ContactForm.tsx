"use client";

import { useState } from "react";

import { ButtonLink, buttonClassName } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";

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

function validateForm(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (
    values.phone.trim() &&
    !/^[0-9()+.\-\s]{7,}$/.test(values.phone.trim())
  ) {
    errors.phone = "Please enter a valid phone number or leave it blank.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Please share a bit more detail so we can respond well.";
  }

  return errors;
}

function fieldClassName(hasError: boolean) {
  return cn(
    "mt-2 w-full rounded-[20px] border bg-[var(--color-surface-strong)] px-4 py-3.5 text-base text-[var(--color-ink)] outline-none",
    hasError
      ? "border-red-400 ring-4 ring-red-100"
      : "border-[var(--color-line-strong)] focus:border-[var(--color-forest)] focus:ring-4 focus:ring-[rgba(35,53,46,0.12)]",
  );
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setFormMessage("Please review the highlighted fields and try again.");
      return;
    }

    setFormMessage("");
    setIsSubmitting(true);

    await new Promise((resolve) => {
      window.setTimeout(resolve, 500);
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    setValues(initialValues);
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));

    if (formMessage) {
      setFormMessage("");
    }
  }

  if (isSubmitted) {
    return (
      <div
        className="rounded-[28px] border border-[var(--color-line)] bg-white/78 p-6"
        role="status"
        aria-live="polite"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
          Message sent
        </p>
        <h3 className="mt-4 font-display text-4xl text-[var(--color-ink)]">
          Thank you. We&apos;ll be in touch shortly.
        </h3>
        <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
          Your message has been captured locally for demo purposes. In a live
          launch, this form would connect to an email or CRM workflow.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className={buttonClassName("primary")}
            onClick={() => setIsSubmitted(false)}
          >
            Send Another Message
          </button>
          <ButtonLink href="/services" variant="secondary">
            Explore Services
          </ButtonLink>
        </div>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-semibold text-[var(--color-ink)]">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClassName(Boolean(errors.name))}
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-sm text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="email" className="text-sm font-semibold text-[var(--color-ink)]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClassName(Boolean(errors.email))}
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-sm text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-semibold text-[var(--color-ink)]">
          Phone <span className="text-[var(--color-muted)]">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={handleChange}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          className={fieldClassName(Boolean(errors.phone))}
        />
        {errors.phone ? (
          <p id="phone-error" className="mt-2 text-sm text-red-600">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-semibold text-[var(--color-ink)]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-help"}
          className={fieldClassName(Boolean(errors.message))}
        />
        <p id="message-help" className="mt-2 text-sm text-[var(--color-muted)]">
          A few details about timing, property type, or the neighborhood you are
          considering will help us respond more thoughtfully.
        </p>
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      {formMessage ? (
        <p className="rounded-[18px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {formMessage}
        </p>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-[var(--color-muted)]">
          No spam, no pressure, and no backend submission. This is a polished
          demo form with client-side validation only.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={buttonClassName(
            "primary",
            isSubmitting ? "cursor-wait opacity-70" : undefined,
          )}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
