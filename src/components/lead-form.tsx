"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/language-provider";

type SubmissionState = "idle" | "sending" | "success" | "error";

export function LeadForm() {
  const { language } = useLanguage();
  const en = language === "en";
  const tr = (pt: string, english: string) => en ? english : pt;
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setStatus("sending");
    setFeedback(tr("A enviar o seu pedido...","Sending your request..."));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || tr("Não foi possível enviar o pedido. Tente novamente.","Unable to send your request. Please try again."));
      }

      form.reset();
      setStatus("success");
      setFeedback(tr("Pedido enviado com sucesso. A Onésimo Digital entrará em contacto consigo.","Your request was sent successfully. Onésimo Digital will be in touch."));
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : tr("Ocorreu um erro inesperado. Tente novamente.","An unexpected error occurred. Please try again."));
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <div className="lead-form-grid">
        <div className="lead-field">
          <label htmlFor="lead-name">{tr("NOME *","NAME *")}</label>
          <input id="lead-name" name="name" type="text" autoComplete="name" placeholder="{tr("O seu nome","Your name")}" minLength={2} maxLength={100} required />
        </div>
        <div className="lead-field">
          <label htmlFor="lead-email">E-MAIL *</label>
          <input id="lead-email" name="email" type="email" autoComplete="email" placeholder="nome@empresa.com" maxLength={254} required />
        </div>
        <div className="lead-field">
          <label htmlFor="lead-company">{tr("EMPRESA / MARCA","COMPANY / BRAND")}</label>
          <input id="lead-company" name="company" type="text" autoComplete="organization" placeholder="{tr("Nome da empresa (opcional)","Company name (optional)")}" maxLength={120} />
        </div>
        <div className="lead-field">
          <label htmlFor="lead-phone">{tr("TELEFONE / WHATSAPP","PHONE / WHATSAPP")}</label>
          <input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder="+244 ..." maxLength={30} />
        </div>
        <div className="lead-field">
          <label htmlFor="lead-service">{tr("SERVIÇO PRETENDIDO *","SERVICE REQUIRED *")}</label>
          <select id="lead-service" name="service" defaultValue="" required>
            <option value="" disabled>{tr("Seleccione uma área","Select a service")}</option>
            <option value="{tr("Websites e plataformas","Websites and platforms")}">{tr("Websites e plataformas","Websites and platforms")}</option>
            <option value="Online store">Online store</option>
            <option value="{tr("Marca e identidade visual","Branding and visual identity")}">{tr("Marca e identidade visual","Branding and visual identity")}</option>
            <option value="{tr("Marketing digital e SEO","Digital marketing and SEO")}">{tr("Marketing digital e SEO","Digital marketing and SEO")}</option>
            <option value="{tr("Software e automação","Software and automation")}">{tr("Software e automação","Software and automation")}</option>
            <option value="{tr("Consultoria tecnológica","Technology consulting")}">{tr("Consultoria tecnológica","Technology consulting")}</option>
            <option value="{tr("Outro / {tr("Ainda não definido","Not decided yet")}","Other / Not decided yet")}">{tr("Outro / {tr("Ainda não definido","Not decided yet")}","Other / Not decided yet")}</option>
          </select>
        </div>
        <div className="lead-field">
          <label htmlFor="lead-timeline">{tr("PRAZO PRETENDIDO","DESIRED TIMELINE")}</label>
          <select id="lead-timeline" name="timeline" defaultValue="">
            <option value="">{tr("Ainda não definido","Not decided yet")}</option>
            <option value="{tr("O mais breve possível","As soon as possible")}">{tr("O mais breve possível","As soon as possible")}</option>
            <option value="{tr("Dentro de 30 dias","Within 30 days")}">{tr("Dentro de 30 dias","Within 30 days")}</option>
            <option value="{tr("Dentro de 1 a 3 meses","Within 1 to 3 months")}">{tr("Dentro de 1 a 3 meses","Within 1 to 3 months")}</option>
            <option value="{tr("Mais de 3 meses","More than 3 months")}">{tr("Mais de 3 meses","More than 3 months")}</option>
          </select>
        </div>
      </div>
      <div className="lead-field">
        <label htmlFor="lead-message">{tr("FALE-NOS SOBRE O PROJECTO *","TELL US ABOUT YOUR PROJECT *")}</label>
        <textarea id="lead-message" name="message" placeholder="{tr("O que pretende criar, melhorar ou resolver?","What would you like to build, improve or solve?")}" minLength={20} maxLength={3000} required />
      </div>
      <div aria-hidden="true" className="hidden">
        <label htmlFor="lead-website">{tr("Não preencher este campo","Leave this field empty")}</label>
        <input id="lead-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      {status !== "idle" && feedback && (
        <p role="status" aria-live="polite" className={status === "error" ? "lead-status lead-status-error" : "lead-status"}>
          {status === "sending" ? "A enviar o seu pedido..." : feedback}
        </p>
      )}
      <button className="lead-submit w-full" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "{tr("A enviar...","Sending...")}" : "{tr("Enviar pedido de orçamento","Send project enquiry")}"}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="lead-privacy">{tr("Ao enviar, autoriza a Onésimo Digital a utilizar estes dados para analisar e responder ao seu pedido.","By submitting, you authorise Onésimo Digital to use this information to review and respond to your enquiry.")}</p>
    </form>
  );
}
