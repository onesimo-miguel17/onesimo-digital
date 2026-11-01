"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { useLanguage } from "@/components/language-provider";

const principles = [
  {
    number: "01",
    title: "Clareza antes da execução",
    description: "Começamos por compreender o contexto, o público e o resultado pretendido. Uma boa solução responde a um problema real.",
  },
  {
    number: "02",
    title: "Design com intenção",
    description: "Cada decisão visual e cada interacção devem reforçar a mensagem, facilitar a utilização e criar confiança.",
  },
  {
    number: "03",
    title: "Tecnologia adequada",
    description: "Escolhemos ferramentas de acordo com os requisitos, a capacidade de evolução, a segurança e o contexto de cada projecto.",
  },
  {
    number: "04",
    title: "Responsabilidade na entrega",
    description: "Definimos âmbito, responsabilidades e critérios de validação. Comunicamos limites e envolvemos especialistas quando necessário.",
  },
];

export default function AboutPage() {
  const { language } = useLanguage();
  const en = language === "en";
  const tr = (pt: string, english: string) => en ? english : pt;
  return (
    <>
      <SiteHeader />
      <main>
        <section className="services-page-hero relative overflow-hidden border-b border-white/10">
          <div aria-hidden="true" className="hero-grid absolute inset-0" />
          <div className="container-shell relative z-10 pb-20 pt-40 sm:pb-28 sm:pt-48">
            <SectionLabel>{tr("O ESTÚDIO / ONÉSIMO DIGITAL","THE STUDIO / ONÉSIMO DIGITAL")}</SectionLabel>
            <p className="section-overline mt-10">{tr("UMA VISÃO. VÁRIAS POSSIBILIDADES.","ONE VISION. MANY POSSIBILITIES.")}</p>
            <h1 className="mt-5 max-w-[1000px] text-[clamp(3.3rem,8vw,7rem)] font-medium leading-[.9] tracking-[-.075em]">
              {tr("Tecnologia com propósito. ","Technology with purpose. ")}<span className="gold-text">{tr("Criatividade com direcção.","Creativity with direction.")}</span>
            </h1>
            <p className="mt-8 max-w-[680px] text-sm leading-8 text-white/55 sm:text-base">
              {tr("A Onésimo Digital é um estúdio independente de tecnologia e criatividade. Aproximamos estratégia, design e engenharia para ajudar negócios e marcas a transformar ideias em soluções digitais úteis.","Onésimo Digital is an independent technology and creative studio. We bring strategy, design and engineering together to help businesses and brands turn ideas into useful digital solutions.")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/servicos" className="primary-button">{tr("Conhecer serviços","Explore services")} <span aria-hidden="true">↗</span></Link>
              <Link href="/#contacto" className="secondary-button">{tr("Falar sobre um projecto","Discuss a project")} <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="mt-16 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div><p className="meta-label">{tr("BASE","BASED IN")}</p><p className="mt-2 text-sm text-white/75">Luanda, Angola</p></div>
              <div><p className="meta-label">{tr("ALCANCE","REACH")}</p><p className="mt-2 text-sm text-white/75">{tr("Angola e mercado internacional","Angola and international markets")}</p></div>
              <div><p className="meta-label">{tr("MODELO","MODEL")}</p><p className="mt-2 text-sm text-white/75">{tr("Núcleo fundador + especialistas por projecto","Founder-led core + project specialists")}</p></div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <SectionLabel>01 / {tr("A NOSSA VISÃO","OUR VISION")}</SectionLabel>
              <p className="mt-6 max-w-[280px] text-sm leading-7 text-white/40">{tr("Não construímos tecnologia por tendência. Construímo-la para criar valor.","We do not build technology for trends. We build it to create value.")}</p>
            </div>
            <div>
              <h2 className="section-heading">{tr("O digital deve ser uma ","Digital should be a ")}<span className="gold-text">{tr("vantagem real","real advantage")}</span>{tr(" para quem o utiliza."," for the people who use it.")}</h2>
              <p className="mt-8 max-w-[720px] text-sm leading-8 text-white/55">
                {tr("Acreditamos que uma presença digital forte vai além de uma aparência moderna. Precisa de comunicar com clareza, funcionar de forma consistente e apoiar objectivos concretos. Por isso, ligamos pensamento estratégico, experiência de utilização e implementação técnica desde o início.","We believe a strong digital presence goes beyond a modern appearance. It must communicate clearly, work consistently and support concrete goals. That is why we connect strategic thinking, user experience and technical implementation from the start.")}
              </p>
              <p className="mt-5 max-w-[720px] text-sm leading-8 text-white/55">
                {tr("Trabalhamos com um modelo deliberadamente flexível: a direcção, a relação com o cliente e a coordenação permanecem próximas do núcleo do estúdio; competências especializadas podem ser integradas por projecto, de acordo com o âmbito aprovado.","We work with a deliberately flexible model: direction, client relationships and coordination remain close to the studio core, while specialist skills can be brought in per project according to the approved scope.")}
              </p>
            </div>
          </div>
        </section>

        <section className="section-space border-y border-white/[0.06]">
          <div className="container-shell">
            <SectionLabel>02 / {tr("PRINCÍPIOS DE TRABALHO","WORKING PRINCIPLES")}</SectionLabel>
            <h2 className="section-heading mt-6">{tr("O padrão que orienta ","The standard behind ")}<span className="gold-text">{tr("cada decisão.","every decision.")}</span></h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <article key={principle.number} className="border-t border-[#d6b56d]/35 pt-5">
                  <p className="text-[10px] tracking-[.18em] text-[#d6b56d]">{principle.number}</p>
                  <h3 className="mt-5 text-xl tracking-[-.04em]">{tr(principle.title, ({ "Clareza antes da execução": "Clarity before execution", "Design com intenção": "Design with intent", "Tecnologia adequada": "Technology that fits", "Responsabilidade na entrega": "Responsible delivery" } as Record<string,string>)[principle.title])}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/45">{tr(principle.description, ({ "Começamos por compreender o contexto, o público e o resultado pretendido. Uma boa solução responde a um problema real.": "We start by understanding the context, audience and desired outcome. A good solution addresses a real problem.", "Cada decisão visual e cada interacção devem reforçar a mensagem, facilitar a utilização e criar confiança.": "Every visual decision and interaction should reinforce the message, improve usability and build trust.", "Escolhemos ferramentas de acordo com os requisitos, a capacidade de evolução, a segurança e o contexto de cada projecto.": "We choose tools according to requirements, scalability, security and each project’s context.", "Definimos âmbito, responsabilidades e critérios de validação. Comunicamos limites e envolvemos especialistas quando necessário.": "We define scope, responsibilities and acceptance criteria. We communicate limitations and involve specialists when needed." } as Record<string,string>)[principle.description])}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionLabel>03 / {tr("COMO NOS ORGANIZAMOS","HOW WE ARE ORGANISED")}</SectionLabel>
              <h2 className="section-heading mt-6">{tr("Uma estrutura ","A ")}<span className="gold-text">{tr("leve e responsável.","lean and accountable structure.")}</span></h2>
            </div>
            <div className="space-y-6 text-sm leading-8 text-white/55">
              <p>{tr("O estúdio opera com capacidade central liderada pelo fundador. Esta estrutura mantém a comunicação directa, reduz complexidade e permite adaptar a equipa às necessidades reais de cada projecto.","The studio operates with a founder-led core. This keeps communication direct, reduces complexity and allows the team to adapt to each project’s actual needs.")}</p>
              <p>{tr("Quando o trabalho exige competências, capacidade ou validação adicional, recorremos a parceiros independentes seleccionados para o âmbito específico. A participação, os custos, os prazos e as responsabilidades são definidos antes do início da execução.","When work requires additional expertise, capacity or validation, we engage independent specialists selected for the specific scope. Their involvement, costs, timelines and responsibilities are agreed before work begins.")}</p>
              <p>{tr("Não prometemos uma estrutura maior do que a existente. Assumimos apenas compromissos compatíveis com os recursos e os critérios acordados.","We do not claim to be larger than we are. We make commitments that match available resources and agreed criteria.")}</p>
            </div>
          </div>
        </section>

        <section className="cta-stage relative overflow-hidden py-24 sm:py-32">
          <div className="cta-glow" />
          <div className="container-shell relative text-center">
            <SectionLabel>{tr("O PRÓXIMO PASSO","THE NEXT STEP")}</SectionLabel>
            <h2 className="section-heading mx-auto mt-7">{tr("Tem um desafio digital? ","Have a digital challenge? ")}<span className="gold-text">{tr("Vamos explorá-lo.","Let’s explore it.")}</span></h2>
            <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-white/50">{tr("Conheça as nossas áreas de actuação e descubra como podemos estruturar uma solução adequada ao seu contexto.","Explore our areas of work and discover how we can shape a solution for your context.")}</p>
            <Link href="/servicos" className="primary-button mt-10">{tr("Explorar serviços","Explore services")} <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="container-shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <Link href="/" className="text-xs font-semibold tracking-[.13em]">ONÉSIMO <span className="text-[#d6b56d]">DIGITAL.</span></Link>
          <p className="text-[10px] text-white/35">© {new Date().getFullYear()} Onésimo Digital. {tr("Todos os direitos reservados.","All rights reserved.")}</p>
          <Link href="/#inicio" className="text-[9px] tracking-[.15em] text-white/35">{tr("VOLTAR AO INÍCIO ↑","BACK TO TOP ↑")}</Link>
        </div>
      </footer>
    </>
  );
}
