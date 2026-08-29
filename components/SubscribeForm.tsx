"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (response.ok && payload?.ok === true) {
        setStatus("success");
        return;
      }

      setStatus("error");
      setError(payload?.error || "Could not subscribe. Try again.");
    } catch {
      setStatus("error");
      setError("Network error. Try again.");
    }
  }

  if (status === "success") {
    return (
      <p className="success" role="status">
        You&apos;re in. Issue 1 is <em>The IDE is not your vendor</em>. Friday
        is next.
      </p>
    );
  }

  return (
    <form className="signup" onSubmit={onSubmit} noValidate>
      <label htmlFor="email">Email</label>
      <div className="row">
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          spellCheck={false}
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "submitting"}
          placeholder="you@shop.com"
          aria-describedby={error ? "signup-error" : "signup-note"}
        />
        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Subscribe"}
        </button>
      </div>
      {error ? (
        <p id="signup-error" className="err" role="alert">
          {error}
        </p>
      ) : (
        <p id="signup-note" className="note">
          One email a week. Unsubscribe anytime. We will not sell the list.
        </p>
      )}
    </form>
  );
}
