"use client";

import { type FormEvent, useState } from "react";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedEmail = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!trimmedEmail || !isValidEmail) {
      setError("Enter a valid email address to preview the signup flow.");
      setSubmitted(false);
      return;
    }

    setError("");
    setSubmitted(true);
    setEmail("");
  }

  return (
    <form className="space-y-4" noValidate onSubmit={handleSubmit}>
      <label className="block">
        <span className="mb-2 block text-sm font-medium text-white/72">Email address</span>
        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) {
              setError("");
            }
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "newsletter-error" : submitted ? "newsletter-success" : undefined}
        />
      </label>

      <button
        type="submit"
        className="inline-flex h-11 w-full items-center justify-center rounded-full bg-clay px-5 text-sm font-semibold text-ink shadow-[0_18px_38px_-26px_rgba(216,162,123,0.62)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold hover:shadow-[0_24px_44px_-26px_rgba(242,183,102,0.64)]"
      >
        Join the Newsletter
      </button>

      {error ? (
        <p id="newsletter-error" className="text-sm text-[#ffd2ca]">
          {error}
        </p>
      ) : null}

      {submitted ? (
        <p id="newsletter-success" className="text-sm text-[#f6d7b4]">
          Signup captured. In this concept demo, the success state is handled entirely on the client.
        </p>
      ) : null}
    </form>
  );
}
