import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SERVICES = new Set([
  "Websites e plataformas",
  "E-commerce",
  "Branding e identidade",
  "Marketing digital e SEO",
  "Software e automação",
  "Consultoria tecnológica",
  "Outro / Ainda não definido",
]);
const TIMELINES = new Set([
  "",
  "O mais breve possível",
  "Dentro de 30 dias",
  "Dentro de 1 a 3 meses",
  "Mais de 3 meses",
]);

type LeadPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  phone?: unknown;
  service?: unknown;
  timeline?: unknown;
  message?: unknown;
  website?: unknown;
};

function clean(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return NextResponse.json({ error: "Pedido não autorizado." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 16_000) {
    return NextResponse.json({ error: "O pedido excede o tamanho permitido." }, { status: 413 });
  }

  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  // Honeypot: bots that fill this field receive a neutral success response.
  if (clean(body.website, 200)) {
    return NextResponse.json({ success: true });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const company = clean(body.company, 120);
  const phone = clean(body.phone, 30);
  const service = clean(body.service, 80);
  const timeline = clean(body.timeline, 80);
  const message = clean(body.message, 3000);

  if (name.length < 2 || !EMAIL_PATTERN.test(email) || !SERVICES.has(service) ||
      !TIMELINES.has(timeline) || message.length < 20) {
    return NextResponse.json({ error: "Verifique os campos obrigatórios e tente novamente." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_EMAIL || "onesimojoaom001@gmail.com";

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "O formulário está preparado, mas o canal de envio ainda está a ser configurado. Tente novamente mais tarde." },
      { status: 503 },
    );
  }

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    company: escapeHtml(company || "Não indicada"),
    phone: escapeHtml(phone || "Não indicado"),
    service: escapeHtml(service),
    timeline: escapeHtml(timeline || "Não definido"),
    message: escapeHtml(message).replace(/\n/g, "<br />"),
  };

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Novo pedido de orçamento — ${name}`,
        html: `<h2>Novo pedido de orçamento</h2><p><strong>Nome:</strong> ${safe.name}</p><p><strong>E-mail:</strong> ${safe.email}</p><p><strong>Empresa:</strong> ${safe.company}</p><p><strong>Telefone:</strong> ${safe.phone}</p><p><strong>Serviço:</strong> ${safe.service}</p><p><strong>Prazo:</strong> ${safe.timeline}</p><p><strong>Projecto:</strong><br />${safe.message}</p>`,
        text: [
          "NOVO PEDIDO DE ORÇAMENTO",
          `Nome: ${name}`,
          `E-mail: ${email}`,
          `Empresa: ${company || "Não indicada"}`,
          `Telefone: ${phone || "Não indicado"}`,
          `Serviço: ${service}`,
          `Prazo: ${timeline || "Não definido"}`,
          "",
          "PROJECTO:",
          message,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Não foi possível entregar o pedido neste momento. Tente novamente mais tarde." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "O serviço de envio está temporariamente indisponível. Tente novamente mais tarde." },
      { status: 502 },
    );
  }
}
