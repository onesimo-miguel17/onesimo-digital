"use client";

import Link from "next/link";
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
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setFeedback(tr("A enviar o seu pedido...","Sending your request..."));
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) throw new Error(result.error || tr("Não foi possível enviar o pedido. Tente novamente.","Unable to send your request. Please try again."));
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
        <div className="lead-field"><label htmlFor="lead-name">{tr("NOME *","NAME *")}</label><input id="lead-name" name="name" type="text" autoComplete="name" placeholder={tr("O seu nome","Your name")} minLength={2} maxLength={100} required /></div>
        <div className="lead-field"><label htmlFor="lead-email">E-MAIL *</label><input id="lead-email" name="email" type="email" autoComplete="email" placeholder="name@company.com" maxLength={254} required /></div>
        <div className="lead-field"><label htmlFor="lead-company">{tr("EMPRESA / MARCA","COMPANY / BRAND")}</label><input id="lead-company" name="company" type="text" autoComplete="organization" placeholder={tr("Nome da empresa (opcional)","Company name (optional)")} maxLength={120} /></div>
        <div className="lead-field"><label htmlFor="lead-phone">{tr("TELEFONE / WHATSAPP","PHONE / WHATSAPP")}</label><input id="lead-phone" name="phone" type="tel" autoComplete="tel" placeholder="+244 ..." maxLength={30} /></div>
        <div className="lead-field">
          <label htmlFor="lead-service">{tr("SERVIÇO PRETENDIDO *","SERVICE REQUIRED *")}</label>
          <select id="lead-service" name="service" defaultValue="" required>
            <option value="" disabled>{tr("Seleccione uma área","Select a service")}</option>
            <option value="Websites e plataformas">{tr("Websites e plataformas","Websites and platforms")}</option>
            <option value="E-commerce">{tr("Comércio electrónico","E-commerce")}</option>
            <option value="Branding e identidade">{tr("Marca e identidade visual","Branding and visual identity")}</option>
            <option value="Marketing digital e SEO">{tr("Marketing digital e SEO","Digital marketing and SEO")}</option>
            <option value="Software e automação">{tr("Software e automação","Software and automation")}</option>
            <option value="Consultoria tecnológica">{tr("Consultoria tecnológica","Technology consulting")}</option>
            <option value="Outro / Ainda não definido">{tr("Outro / Ainda não definido","Other / Not decided yet")}</option>
          </select>
        </div>
        <div className="lead-field">
          <label htmlFor="lead-timeline">{tr("PRAZO PRETENDIDO","DESIRED TIMELINE")}</label>
          <select id="lead-timeline" name="timeline" defaultValue="">
            <option value="">{tr("Ainda não definido","Not decided yet")}</option>
            <option value="O mais breve possível">{tr("O mais breve possível","As soon as possible")}</option>
            <option value="Dentro de 30 dias">{tr("Dentro de 30 dias","Within 30 days")}</option>
            <option value="Dentro de 1 a 3 meses">{tr("Dentro de 1 a 3 meses","Within 1 to 3 months")}</option>
            <option value="Mais de 3 meses">{tr("Mais de 3 meses","More than 3 months")}</option>
          </select>
        </div>
      </div>
      <div className="lead-field"><label htmlFor="lead-message">{tr("FALE-NOS SOBRE O PROJECTO *","TELL US ABOUT YOUR PROJECT *")}</label><textarea id="lead-message" name="message" placeholder={tr("O que pretende criar, melhorar ou resolver?","What would you like to build, improve or solve?")} minLength={20} maxLength={3000} required /></div>
      <div aria-hidden="true" className="hidden"><label htmlFor="lead-website">{tr("Não preencher este campo","Leave this field empty")}</label><input id="lead-website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
      {status !== "idle" && feedback && <p role="status" aria-live="polite" className={status === "error" ? "lead-status lead-status-error" : "lead-status"}>{status === "sending" ? tr("A enviar o seu pedido...","Sending your request...") : feedback}</p>}
      <button className="lead-submit w-full" type="submit" disabled={status === "sending"}>{status === "sending" ? tr("A enviar...","Sending...") : tr("Enviar pedido de orçamento","Send project enquiry")}<span aria-hidden="true">↗</span></button>
      <p className="lead-privacy">{tr("Ao enviar, confirma que leu a nossa ","By submitting, you confirm that you have read our ")}<Link href="/privacidade" className="text-[#d6b56d] underline underline-offset-4">{tr("Política de Privacidade","Privacy Policy")}</Link>{tr(" e compreende que os dados serão utilizados para analisar e responder ao seu pedido."," and understand that your information will be used to review and respond to your enquiry.")}</p>
    </form>
  );
}
