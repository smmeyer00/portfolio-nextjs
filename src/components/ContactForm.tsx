"use client";

import { useActionState } from "react";
import Button from "@/components/Button";
import { initialContactFormState, submitContactAction } from "@/app/contact/actions";

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm text-[#f2b38f]">{message}</p>;
}

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContactAction,
    initialContactFormState
  );

  return (
    <form action={formAction} className="grid gap-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-[1.1rem] border border-white/10 bg-white/4 px-4 py-3.5 text-foreground outline-none transition duration-300 placeholder:text-background-400 focus:border-accent-300/40 focus:bg-white/6"
          placeholder="Your name"
        />
        <FieldError message={state.fieldErrors?.name} />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-[1.1rem] border border-white/10 bg-white/4 px-4 py-3.5 text-foreground outline-none transition duration-300 placeholder:text-background-400 focus:border-accent-300/40 focus:bg-white/6"
          placeholder="you@example.com"
        />
        <FieldError message={state.fieldErrors?.email} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          Project or question
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full resize-none rounded-[1.1rem] border border-white/10 bg-white/4 px-4 py-3.5 text-foreground outline-none transition duration-300 placeholder:text-background-400 focus:border-accent-300/40 focus:bg-white/6"
          placeholder="A few sentences about what you're building and what you'd like help thinking through."
        />
        <FieldError message={state.fieldErrors?.message} />
      </div>

      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-sm text-background-300">
          {state.message || "A little context is enough."}
        </p>
        <Button type="submit" size="lg" className="min-w-[10rem]" disabled={pending}>
          {pending ? "Sending..." : "Send message"}
        </Button>
      </div>
    </form>
  );
}
