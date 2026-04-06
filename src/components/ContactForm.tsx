"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/Button";
import {
  getContactFormFields,
  initialContactFormState,
  type ContactFormState,
  validateContactForm,
} from "@/app/contact/form-state";

interface ContactFormProps {
  accessKey?: string;
}

const web3FormsEndpoint = "https://api.web3forms.com/submit";

interface Web3FormsResponse {
  success?: boolean;
  message?: string;
  body?: {
    message?: string;
  };
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return <p className="mt-2 text-sm text-[#f2b38f]">{message}</p>;
}

export default function ContactForm({ accessKey }: ContactFormProps) {
  const [state, setState] = useState<ContactFormState>(initialContactFormState);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fields = getContactFormFields(formData);

    if (fields.botcheck) {
      setState({
        status: "success",
        message: "Thanks. I’ll review your note and respond if it looks relevant.",
      });
      return;
    }

    const fieldErrors = validateContactForm(fields);

    if (fieldErrors?.name || fieldErrors?.email || fieldErrors?.message) {
      setState({
        status: "error",
        message: "Please fix the highlighted fields and try again.",
        fieldErrors,
      });
      return;
    }

    if (!accessKey) {
      setState({
        status: "error",
        message:
          "The contact form is not configured yet. Email or LinkedIn will work in the meantime.",
      });
      return;
    }

    setPending(true);

    try {
      const response = await fetch(web3FormsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New portfolio inquiry from ${fields.name}`,
          name: fields.name,
          from_name: fields.name,
          email: fields.email,
          replyto: fields.email,
          message: fields.message,
          botcheck: "",
        }),
      });

      const payload = (await response.json().catch(() => null)) as Web3FormsResponse | null;

      if (!response.ok || !payload?.success) {
        console.error("Web3Forms submission failed", {
          status: response.status,
          payload,
        });

        setState({
          status: "error",
          message:
            payload?.body?.message ||
            payload?.message ||
            "Something went wrong while sending the message. Email or LinkedIn will be the fastest fallback.",
        });
        return;
      }

      setState({
        status: "success",
        message: "Message sent. I’ll get back to you as soon as I can.",
      });
      form.reset();
    } catch (error) {
      console.error("Web3Forms submission threw an unexpected error", error);
      setState({
        status: "error",
        message:
          "Something went wrong while sending the message. Email or LinkedIn will be the fastest fallback.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      action={web3FormsEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      className="grid gap-5"
    >
      <input type="hidden" name="access_key" value={accessKey ?? ""} />
      <input type="hidden" name="subject" value="New portfolio inquiry from smmeyer.dev" />
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

      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" />

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
