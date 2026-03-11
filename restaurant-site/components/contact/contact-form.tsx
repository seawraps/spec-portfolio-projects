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

  const fieldClassName =
    "mt-2 w-full rounded-xl border border-[rgba(233,209,181,0.16)] bg-[rgba(255,255,255,0.04)] px-4 py-3 text-[#fff1df] outline-none ring-[#d1a364] transition placeholder:text-[#8d7460] focus:border-[rgba(233,209,181,0.3)] focus:ring-2";

  return (
    <div className="frame-panel rounded-[2rem] p-6 sm:p-8">
      <p className="eyebrow">Guest Relations</p>
      <h2 className="mt-4 font-display text-[2.8rem] leading-[0.9] tracking-[-0.05em] text-[#fff0db]">
        Send a note to the host stand.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#cfbda8] sm:text-base">
        Use this form for private events, large-party requests, collaborations, or any question
        that needs a slower, more tailored reply.
      </p>

      {submitted ? (
        <div
          className="mt-6 rounded-[1.2rem] border border-[rgba(170,220,186,0.24)] bg-[rgba(20,54,34,0.42)] p-4 text-sm leading-relaxed text-[#e6f5ea]"
          role="status"
        >
          <p className="font-semibold uppercase tracking-[0.16em]">Message received.</p>
          <p className="mt-2">
            Thank you for reaching out. A member of the Astera team will respond shortly.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className={buttonClassName("secondaryInverse", "mt-4")}
          >
            Send Another
          </button>
        </div>
      ) : null}

      <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
        <div>
          <label
            htmlFor="name"
            className="block text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d7aa75]"
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
            className={fieldClassName}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-xs text-[#f3b19d]">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="block text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d7aa75]"
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
              className={fieldClassName}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            {errors.email ? (
              <p id="email-error" className="mt-2 text-xs text-[#f3b19d]">
                {errors.email}
              </p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d7aa75]"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              className={fieldClassName}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              placeholder="Optional"
            />
            {errors.phone ? (
              <p id="phone-error" className="mt-2 text-xs text-[#f3b19d]">
                {errors.phone}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[0.66rem] font-semibold uppercase tracking-[0.32em] text-[#d7aa75]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            className={fieldClassName}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
          />
          {errors.message ? (
            <p id="message-error" className="mt-2 text-xs text-[#f3b19d]">
              {errors.message}
            </p>
          ) : null}
        </div>

        <button type="submit" className={buttonClassName("primary")}>
          Send Message
        </button>

        {hasErrors ? (
          <p className="text-xs text-[#b89b83]">
            Please correct the highlighted fields and submit again.
          </p>
        ) : null}
      </form>
    </div>
  );
}
