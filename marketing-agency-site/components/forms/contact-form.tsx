"use client";

import { useState } from "react";
import type { FormEvent, HTMLInputTypeAttribute } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  website: "",
  service: "",
  budget: "",
  message: "",
};

type FormState = typeof initialState;
type FormErrors = Partial<Record<keyof FormState, string>>;

const serviceOptions = [
  "Paid Ads",
  "Branding",
  "Web Strategy",
  "CRO",
  "Content Strategy",
  "Creative Campaigns",
  "Integrated Multi-Service Engagement",
];

const budgetOptions = ["$8k-$12k/mo", "$12k-$20k/mo", "$20k-$35k/mo", "$35k+/mo", "Project-based budget"];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values: FormState): FormErrors => {
  const errors: FormErrors = {};

  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please provide a valid work email.";
  }

  if (!values.service) {
    errors.service = "Select a primary service focus.";
  }

  if (!values.budget) {
    errors.budget = "Select an estimated budget range.";
  }

  if (!values.message.trim() || values.message.trim().length < 30) {
    errors.message = "Share at least 30 characters so we can understand your goals.";
  }

  return errors;
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChange = (field: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));

    if (errors[field]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[field];
        return next;
      });
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate(values);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setValues(initialState);
  };

  if (isSubmitted) {
    return (
      <section className="surface-panel p-8 sm:p-10" aria-live="polite">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mint/20 text-sm font-bold text-mint">
          OK
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">Thanks, your inquiry is in.</h2>
        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
          This concept form is client-side only for portfolio use. In a production setup, submissions would route to your CRM,
          inbox, or form handler.
        </p>
        <button type="button" className="button-secondary mt-6" onClick={() => setIsSubmitted(false)}>
          Send Another Inquiry
        </button>
      </section>
    );
  }

  return (
    <form className="surface-panel grid gap-5 p-6 sm:grid-cols-2 sm:p-8" onSubmit={onSubmit} noValidate>
      <Field
        label="Full name"
        name="name"
        value={values.name}
        onChange={(value) => onChange("name", value)}
        error={errors.name}
        placeholder="Jordan Lee"
      />
      <Field
        label="Work email"
        name="email"
        type="email"
        value={values.email}
        onChange={(value) => onChange("email", value)}
        error={errors.email}
        placeholder="jordan@company.com"
      />
      <Field
        label="Company"
        name="company"
        value={values.company}
        onChange={(value) => onChange("company", value)}
        error={errors.company}
        placeholder="Acme Labs"
      />
      <Field
        label="Website"
        name="website"
        type="url"
        value={values.website}
        onChange={(value) => onChange("website", value)}
        error={errors.website}
        placeholder="https://acme.com"
      />

      <SelectField
        label="Primary service interest"
        name="service"
        value={values.service}
        onChange={(value) => onChange("service", value)}
        error={errors.service}
        options={serviceOptions}
      />
      <SelectField
        label="Monthly or project budget"
        name="budget"
        value={values.budget}
        onChange={(value) => onChange("budget", value)}
        error={errors.budget}
        options={budgetOptions}
      />

      <div className="sm:col-span-2">
        <label htmlFor="message" className="form-label">
          What are you trying to achieve?
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={(event) => onChange("message", event.target.value)}
          className={`form-input min-h-36 resize-y ${errors.message ? "border-rose-400/80" : ""}`}
          placeholder="Share your goals, timeline, and what is not working today."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-xs text-rose-300">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-3 border-t border-white/10 pt-3">
        <button type="submit" className="button-primary">
          Submit Inquiry
        </button>
        <p className="text-xs text-slate-400">No backend is connected in this demo. Validation and success state run entirely client-side.</p>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};

function Field({ label, name, value, onChange, error, placeholder, type = "text" }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`form-input ${error ? "border-rose-400/80" : ""}`}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-xs text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  error?: string;
};

function SelectField({ label, name, value, onChange, options, error }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`form-input ${error ? "border-rose-400/80" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
      >
        <option value="">Select one</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-xs text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
