"use server";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    message?: string;
  };
}

export const initialContactFormState: ContactFormState = {
  status: "idle",
  message: "",
};

function getStringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactAction(
  _previousState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = getStringValue(formData, "name");
  const email = getStringValue(formData, "email");
  const message = getStringValue(formData, "message");
  const company = getStringValue(formData, "company");

  if (company) {
    return {
      status: "success",
      message: "Thanks. I’ll review your note and respond if it looks relevant.",
    };
  }

  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (name.length < 2) {
    fieldErrors.name = "Please enter your name.";
  }

  if (!isValidEmail(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (message.length < 20) {
    fieldErrors.message = "Please include a little more detail so I can respond usefully.";
  }

  if (fieldErrors.name || fieldErrors.email || fieldErrors.message) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return {
      status: "error",
      message:
        "The contact form is not configured yet. Email or LinkedIn will work in the meantime.",
    };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New portfolio inquiry from ${name}`,
        from_name: name,
        email,
        message,
      }),
      cache: "no-store",
    });

    const payload = (await response.json()) as { success?: boolean };

    if (!response.ok || !payload.success) {
      throw new Error("Contact submission failed");
    }

    return {
      status: "success",
      message: "Message sent. I’ll get back to you as soon as I can.",
    };
  } catch {
    return {
      status: "error",
      message:
        "Something went wrong while sending the message. Email or LinkedIn will be the fastest fallback.",
    };
  }
}
