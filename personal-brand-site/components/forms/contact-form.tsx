"use client";

import { type FormEvent, useEffect, useState } from "react";

import { buttonClassName } from "@/components/ui/button-link";

type FormState = {
  name: string;
  email: string;
  company: string;
  timeline: string;
  inquiryType: string;
  message: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  timeline: "",
  inquiryType: "",
  message: "",
};

const inquiryTypeMap = {
  speaking: "speaking",
  advisory: "advisory",
  partnership: "partnership",
} as const;

function validate(values: FormState): ErrorState {
  const errors: ErrorState = {};

  if (values.name.trim().length < 2) {
    errors.name = "Enter your name so the inquiry feels like a real intro.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.inquiryType) {
    errors.inquiryType = "Choose the inquiry type that fits best.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Add a little more context so the next step can be useful.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<ErrorState>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const preset = new URLSearchParams(window.location.search).get("type");

    if (!preset || !Object.hasOwn(inquiryTypeMap, preset) || values.inquiryType) {
      return;
    }

    setValues((current) => ({
      ...current,
      inquiryType: inquiryTypeMap[preset as keyof typeof inquiryTypeMap],
    }));
  }, [values.inquiryType]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);
    setValues(initialState);
  }

  if (submitted) {
    return (
      <div
        className="rounded-[1.5rem] border border-olive/25 bg-olive/10 p-6"
        role="status"
        aria-live="polite"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-plum">Inquiry sent</p>
        <h3 className="mt-3 text-3xl text-ink">Success state confirmed.</h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-mocha/88">
          This concept demo keeps submissions entirely on the client, so no backend is required. In a real deployment,
          the same UI could connect to a server action, CRM, or email provider.
        </p>
        <button
          type="button"
          className={buttonClassName("primary", "mt-6")}
          onClick={() => setSubmitted(false)}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-5" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-mocha/84">Name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-error-name" : undefined}
          />
          {errors.name ? (
            <p id="contact-error-name" className="mt-2 text-sm text-plum">
              {errors.name}
            </p>
          ) : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-mocha/84">Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-error-email" : undefined}
          />
          {errors.email ? (
            <p id="contact-error-email" className="mt-2 text-sm text-plum">
              {errors.email}
            </p>
          ) : null}
        </label>
      </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-mocha/84">Company or project</span>
            <input
            type="text"
            name="company"
            autoComplete="organization"
            placeholder="Brand, team, or event"
            value={values.company}
            onChange={(event) => updateField("company", event.target.value)}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-mocha/84">Timing or event date</span>
            <input
              type="text"
              name="timeline"
              placeholder="September offsite, Q4 launch, or flexible"
              value={values.timeline}
              onChange={(event) => updateField("timeline", event.target.value)}
            />
          </label>
        </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-mocha/84">Inquiry type</span>
          <select
            name="inquiryType"
            value={values.inquiryType}
            onChange={(event) => updateField("inquiryType", event.target.value)}
            aria-invalid={Boolean(errors.inquiryType)}
            aria-describedby={errors.inquiryType ? "contact-error-type" : undefined}
          >
            <option value="">Select one</option>
            <option value="speaking">Speaking or workshop</option>
            <option value="advisory">Advisory or strategy</option>
            <option value="partnership">Partnership or media</option>
          </select>
          {errors.inquiryType ? (
            <p id="contact-error-type" className="mt-2 text-sm text-plum">
              {errors.inquiryType}
            </p>
          ) : null}
        </label>

        <div className="rounded-[1.5rem] border border-ink/8 bg-white/70 p-5">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-mocha/72">
            Helpful context
          </p>
          <p className="mt-3 text-sm leading-7 text-mocha/86">
            Budget ranges, room size, audience sophistication, and what a strong outcome sounds like make the first
            reply more useful.
          </p>
        </div>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-mocha/84">What do you need help with?</span>
        <textarea
          name="message"
          placeholder="Share the audience, timing, and what a strong outcome would look like."
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-error-message" : undefined}
        />
        {errors.message ? (
          <p id="contact-error-message" className="mt-2 text-sm text-plum">
            {errors.message}
          </p>
        ) : null}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-7 text-mocha/88">
          Frontend-only demo form. Validation and success states are included without a backend dependency.
        </p>
        <button
          type="submit"
          className={buttonClassName("primary")}
        >
          Send booking note
        </button>
      </div>
    </form>
  );
}
