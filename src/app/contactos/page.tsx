"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { LeadForm } from "@/components/lead-form";
import { useLanguage } from "@/components/language-provider";

export default function ContactPage() {
  const { language } = useLanguage();
  const en = language === "en";
  const tr = (pt: string, english: string) => en ? english : pt;

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen pt-36 pb-24">
        <section className="container-shell">
          <p className="section-overline">{tr("VAMOS CONVERSAR","LET'S TALK")}</p>
          <h1 className="section-heading mt-5 max-w-4xl">
            {tr("O próximo passo começa ","The next step starts ")}
            <span className="gold-text">{tr("com uma conversa.","with a conversation.")}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-sm leading-8 text-white/55">
            {tr("Partilhe o contexto, os objectivos e os desafios do seu projecto. Vamos analisar o pedido e responder com os próximos passos mais adequados.","Share the context, goals and challenges behind your project. We will review your enquiry and respond with the most appropriate next steps.")}
          </p>
          <div className="mt-14 grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <aside className="space-y-8">
              <div className="gold-border p-7">
                <p className="text-[9px] font-bold tracking-[.2em] text-[#d6b56d]">{tr("COMO FUNCIONA","HOW IT WORKS")}</p>
                <ol className="mt-6 space-y-5 text-sm leading-6 text-white/65">
                  <li><span className="mr-3 text-[#d6b56d]">01</span>{tr("Recebemos e analisamos o seu pedido.","We receive and review your enquiry.")}</li>
                  <li><span className="mr-3 text-[#d6b56d]">02</span>{tr("Clarificamos o âmbito e os objectivos.","We clarify scope and objectives.")}</li>
                  <li><span className="mr-3 text-[#d6b56d]">03</span>{tr("Apresentamos uma proposta adequada ao projecto.","We prepare a proposal suited to the project.")}</li>
                </ol>
              </div>
              <p className="text-xs leading-6 text-white/40">
                {tr("O envio do formulário não representa a aceitação de um projecto nem cria, por si só, uma relação contratual.","Submitting the form does not mean a project has been accepted or create a contractual relationship by itself.")}
              </p>
              <Link href="/projectos" className="inline-flex text-[10px] font-bold tracking-[.16em] text-[#d6b56d] hover:text-[#f4dfad]">
                {tr("EXPLORAR DEMONSTRAÇÕES","EXPLORE THE DEMOS")} ↗
              </Link>
            </aside>
            <div className="contact-panel gold-border p-7 sm:p-10">
              <p className="text-[10px] tracking-[.2em] text-[#d6b56d]">{tr("NOVOS PROJECTOS","NEW PROJECTS")}</p>
              <h2 className="mt-4 text-2xl tracking-[-.04em]">{tr("Conte-nos a sua ideia.","Tell us about your idea.")}</h2>
              <p className="mt-4 text-sm leading-7 text-white/50">{tr("Os campos assinalados são necessários para compreendermos e respondermos ao pedido.","Required fields help us understand and respond to your enquiry.")}</p>
              <div className="mt-8"><LeadForm /></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="container-shell flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <Link href="/" className="text-xs font-semibold tracking-[.13em]">ONÉSIMO <span className="text-[#d6b56d]">DIGITAL.</span></Link>
          <div className="flex gap-5 text-[10px] text-white/40">
            <Link href="/privacidade" className="hover:text-[#d6b56d]">{tr("Privacidade","Privacy")}</Link>
            <Link href="/termos" className="hover:text-[#d6b56d]">{tr("Termos","Terms")}</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
