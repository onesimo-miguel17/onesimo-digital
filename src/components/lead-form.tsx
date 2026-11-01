"use client";

import { useState, type FormEvent } from "react";

type SubmissionState = "idle" | "sending" | "success" | "error";

export function LeadForm() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("sending");
    setFeedback("A enviar o seu pedido...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Não foi possível enviar o pedido. Tente novamente.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Pedido enviado com sucesso. A Onésimo Digital entrará em contacto consigo.");
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Ocorreu um erro inesperado. Tente novamente.");
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="lead-form-grid">
        <div className="lead-field">
          <label htmlFor="lead-name">NOME *</label>
          <input id="lead-name" name="name" type="text" autoComplete="name" placeholder="O seu nome" minLength={2} maxLength={100} required />
        </div>
        <div className="lead-field">
          <label htmlFor="lead-email">E-MAIL *</label>
          <input id="lead-email" name="email" type="email" autoComplete="email" placeholder="nome@empresa.com" maxLength={254} required />
        </div>
        <div className="lead-field">
          <label htmlFor="lead-company">EMPRESA / MARCA</label>
          <input id="lead-company" name="company" type="text" autoComplete="organization" placeholder="Nome da empresa (opcional)" maxLength={120} />
        </div>
        <div className="lead-field">
          <label htmlFor="lead-phone">TELEFONE / WHATSAPP</label>
          <input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder="+244 ..." maxLength={30} />
        </div>
        <div className="lead-field">
          <label htmlFor="lead-service">SERVIÇO PRETENDIDO *</label>
          <select id="lead-service" name="service" defaultValue="" required>
            <option value="" disabled>Seleccione uma área</option>
            <option value="Websites e plataformas">Websites e plataformas</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Branding e identidade">Branding e identidade</option>
            <option value="Marketing digital e SEO">Marketing digital e SEO</option>
            <option value="Software e automação">Software e automação</option>
            <option value="Consultoria tecnológica">Consultoria tecnológica</option>
            <option value="Outro / Ainda não definido">Outro / Ainda não definido</option>
          </select>
        </div>
        <div className="lead-field">
          <label htmlFor="lead-timeline">PRAZO PRETENDIDO</label>
          <select id="lead-timeline" name="timeline" defaultValue="">
            <option value="">Ainda não definido</option>
            <option value="O mais breve possível">O mais breve possível</option>
            <option value="Dentro de 30 dias">Dentro de 30 dias</option>
            <option value="Dentro de 1 a 3 meses">Dentro de 1 a 3 meses</option>
            <option value="Mais de 3 meses">Mais de 3 meses</option>
          </select>
        </div>
      </div>
      <div className="lead-field">
        <label htmlFor="lead-message">FALE-NOS SOBRE O PROJECTO *</label>
        <textarea id="lead-message" name="message" placeholder="O que pretende criar, melhorar ou resolver?" minLength={20} maxLength={3000} required />
      </div>
      <div aria-hidden="true" className="hidden">
        <label htmlFor="lead-website">Não preencher este campo</label>
        <input id="lead-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status !== "idle" && feedback && (
        <p role="status" aria-live="polite" className={status === "error" ? "lead-status lead-status-error" : "lead-status"}>
          {status === "sending" ? "A enviar o seu pedido..." : feedback}
        </p>
      )}
      <button className="lead-submit w-full" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "A enviar..." : "Enviar pedido de orçamento"}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="lead-privacy">Ao enviar, autoriza a Onésimo Digital a utilizar estes dados para analisar e responder ao seu pedido.</p>
    </form>
  );
}
