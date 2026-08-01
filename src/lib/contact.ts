export const contactLimits = {
  name: 80,
  email: 254,
  company: 100,
  message: 3000,
} as const;

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
  consent: boolean;
  website: string;
  startedAt: number;
};

export type ContactValidation =
  | { success: true; data: ContactPayload }
  | { success: false; error: string };

function readText(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength + 1) : "";
}

export function validateContactPayload(input: unknown): ContactValidation {
  if (!input || typeof input !== "object") {
    return { success: false, error: "Dados do formulário inválidos." };
  }

  const raw = input as Record<string, unknown>;
  const data: ContactPayload = {
    name: readText(raw.name, contactLimits.name),
    email: readText(raw.email, contactLimits.email).toLowerCase(),
    company: readText(raw.company, contactLimits.company),
    message: readText(raw.message, contactLimits.message),
    consent: raw.consent === true,
    website: readText(raw.website, 200),
    startedAt: typeof raw.startedAt === "number" ? raw.startedAt : 0,
  };

  if (data.name.length < 2 || data.name.length > contactLimits.name) {
    return { success: false, error: "Informe um nome válido." };
  }

  if (
    data.email.length > contactLimits.email ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  ) {
    return { success: false, error: "Informe um e-mail válido." };
  }

  if (data.company.length > contactLimits.company) {
    return { success: false, error: "O nome da empresa é muito longo." };
  }

  if (data.message.length < 20 || data.message.length > contactLimits.message) {
    return { success: false, error: "A mensagem deve ter entre 20 e 3.000 caracteres." };
  }

  if (!data.consent) {
    return { success: false, error: "Confirme o uso dos dados para responder ao contato." };
  }

  return { success: true, data };
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}
