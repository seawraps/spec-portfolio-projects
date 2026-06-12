"use client";

import { type FormEvent, useMemo, useState } from "react";

import { buttonClassName } from "@/components/ui/button-link";

type FormState = {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  vehicle: "",
  message: "",
};

const fieldClasses =
  "mt-2 w-full border border-[var(--color-line-strong)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition focus:bg-white focus:shadow-[0_0_0_3px_rgba(31,87,195,0.22)]";

const labelClasses = "comic-heavy text-[0.7rem] tracking-[0.12em] text-[var(--color-ink)]";

const errorClasses = "mt-1 text-sm font-semibold text-[var(--color-error)]";

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
    errors.message = "Tell us a little about the wrap you want.";
  } else if (trimmedMessage.length < 15) {
    errors.message = "Please include at least 15 characters for context.";
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
      <div className="comic-panel-yellow p-7" role="status">
        <p className="comic-display text-4xl text-[var(--color-ink)]">Boom! Message sent.</p>
        <p className="mt-3 text-sm leading-7 text-[var(--color-ink)] sm:text-base">
          Thanks for reaching out. Mark will get back to you within one business day with next
          steps and a straight-up quote.
        </p>
        <button
          type="button"
          className={buttonClassName("ink", "mt-6")}
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
        <label htmlFor="name" className={labelClasses}>
          Your Name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => onFieldChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={fieldClasses}
          placeholder="Alex Rivera"
          required
        />
        {errors.name ? (
          <p id="name-error" className={errorClasses}>
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
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
            className={fieldClasses}
            placeholder="you@example.com"
            required
          />
          {errors.email ? (
            <p id="email-error" className={errorClasses}>
              {errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
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
            className={fieldClasses}
            placeholder="(206) 707-6491"
          />
          {errors.phone ? (
            <p id="phone-error" className={errorClasses}>
              {errors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="vehicle" className={labelClasses}>
          Vehicle (Year / Make / Model)
        </label>
        <input
          id="vehicle"
          name="vehicle"
          value={values.vehicle}
          onChange={(event) => onFieldChange("vehicle", event.target.value)}
          className={fieldClasses}
          placeholder="2021 Tesla Model 3"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          What Are You Thinking?
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => onFieldChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClasses}
          placeholder="Full color change to satin black, chrome delete, the works..."
          required
        />
        {errors.message ? (
          <p id="message-error" className={errorClasses}>
            {errors.message}
          </p>
        ) : null}
      </div>

      {hasErrors ? (
        <p className="text-sm font-semibold text-[var(--color-error)]" role="alert">
          Please fix the highlighted fields and resubmit.
        </p>
      ) : null}

      <button type="submit" className={buttonClassName("red", "w-full sm:w-auto")}>
        Send It →
      </button>
    </form>
  );
}
