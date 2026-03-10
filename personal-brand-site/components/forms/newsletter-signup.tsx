"use client";

import { type FormEvent, useState } from "react";

import { buttonClassName } from "@/components/ui/button-link";

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
        className={buttonClassName(
          "secondary",
          "w-full border-white/16 bg-white text-ink hover:bg-paper-soft",
        )}
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
