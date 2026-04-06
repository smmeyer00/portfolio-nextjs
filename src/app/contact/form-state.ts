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

export interface ContactFormFields {
  name: string;
  email: string;
  message: string;
  botcheck: string;
}

function getStringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function getContactFormFields(formData: FormData): ContactFormFields {
  return {
    name: getStringValue(formData, "name"),
    email: getStringValue(formData, "email"),
    message: getStringValue(formData, "message"),
    botcheck: getStringValue(formData, "botcheck"),
  };
}

export function validateContactForm(
  fields: Pick<ContactFormFields, "name" | "email" | "message">
): ContactFormState["fieldErrors"] {
  const fieldErrors: ContactFormState["fieldErrors"] = {};

  if (fields.name.length < 2) {
    fieldErrors.name = "Please enter your name.";
  }

  if (!isValidEmail(fields.email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }

  if (fields.message.length < 20) {
    fieldErrors.message = "Please include a little more detail so I can respond usefully.";
  }

  return fieldErrors;
}
