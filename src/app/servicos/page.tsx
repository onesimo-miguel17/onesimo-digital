"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { useLanguage } from "@/components/language-provider";

const serviceLines = [
  {
    number: "01",
    id: "digital-experiences",
    name: "Digital Experiences",
    title: "Experiências digitais que aproximam marcas e pessoas.",
    description: "Concebemos e desenvolvemos experiências web funcionais, responsivas e alinhadas com os objectivos do negócio.",
    deliverables: ["Websites institucionais", "Landing pages e páginas de campanha", "Lojas online e experiências de comércio digital", "Plataformas web e aplicações à medida", "Optimização técnica e evolução de produtos digitais"],
    approach: "Estratégia de conteúdo, arquitectura, UX/UI, desenvolvimento, testes e entrega.",
    model: "Execução interna para projectos compatíveis com a capacidade técnica disponível. Especialistas externos podem ser envolvidos mediante aprovação.",
  },
  {
    number: "02",
    id: "brand-creative",
    name: "Brand & Creative",
    title: "Marcas com clareza, consistência e personalidade.",
    description: "Construímos sistemas visuais que ajudam negócios a comunicar o seu valor de forma reconhecível e coerente.",
    deliverables: ["Estratégia e posicionamento de marca", "Identidade visual e sistemas gráficos", "Logótipo e aplicações da marca", "Guias de identidade e direcção visual", "Materiais digitais de comunicação"],
    approach: "Descoberta, direcção criativa, exploração visual, refinamento e preparação dos ficheiros finais.",
    model: "Direcção e coordenação internas. Produção especializada pode ser atribuída a parceiros com portefólio validado.",
  },
  {
    number: "03",
    id: "business-technology",
    name: "Business Technology",
    title: "Tecnologia desenhada em torno do trabalho real.",
    description: "Ajudamos a transformar processos manuais e desafios operacionais em soluções digitais úteis e sustentáveis.",
    deliverables: ["Aplicações e software à medida", "Automação de processos", "Integrações entre plataformas", "Portais e dashboards empresariais", "Consultoria técnica e prototipagem"],
    approach: "Diagnóstico, definição de requisitos, desenho técnico, implementação, testes e documentação.",
    model: "Aceitação condicionada à análise técnica e de segurança. Projectos especializados podem exigir parceiros aprovados.",
  },
  {
    number: "04",
    id: "digital-growth",
    name: "Digital Growth",
    title: "Mais clareza para atrair, converter e evoluir.",
    description: "Estruturamos a presença digital e os pontos de contacto para apoiar crescimento mensurável e decisões melhores.",
    deliverables: ["Auditoria e estratégia SEO", "Pesquisa de palavras-chave e estrutura de conteúdo", "Optimização de conversão", "Estratégia de presença digital", "Medição e relatórios de desempenho"],
    approach: "Diagnóstico, prioridades, plano de acção, implementação acordada e acompanhamento por indicadores.",
    model: "Estratégia e coordenação internas. Execução de campanhas, produção especializada e análise avançada podem ser entregues com parceiros.",
  },
];

const principles = [
  { number: "01", title: "Começamos pelo problema", text: "Antes de recomendar tecnologia ou design, procuramos compreender o contexto, os objectivos e as restrições do negócio." },
  { number: "02", title: "Definimos um âmbito claro", text: "Cada proposta identifica entregáveis, exclusões, responsabilidades, prazos, investimento e critérios de aceitação." },
  { number: "03", title: "Montamos a equipa certa", text: "O núcleo da Onésimo Digital coordena cada projecto e envolve especialistas externos quando o âmbito o exige." },
  { number: "04", title: "Validamos antes de entregar", text: "Testes, revisão e comunicação fazem parte do processo. Não tratamos uma entrega como concluída sem validação." },
];

export default function ServicesPage() {
  const { language } = useLanguage();
  const en = language === "en";
  const tr = (pt: string, english: string) => en ? english : pt;
  const serviceText: Record<string, { name: string; title: string; description: string; deliverables: string[]; approach: string; model: string }> = {
    "digital-experiences": { name: tr("Experiências Digitais","Digital Experiences"), title: tr("Experiências digitais que aproximam marcas e pessoas.","Digital experiences that bring brands and people closer."), description: tr("Concebemos e desenvolvemos experiências web funcionais, responsivas e alinhadas com os objectivos do negócio.","We design and build functional, responsive web experiences aligned with business goals."), deliverables: en ? ["Corporate websites","Landing pages and campaign pages","Online shops and e-commerce experiences","Custom web platforms and applications","Technical optimisation and digital product evolution"] : ["Websites institucionais","Páginas de apresentação e campanhas","Lojas online e experiências de comércio digital","Plataformas web e aplicações à medida","Optimização técnica e evolução de produtos digitais"], approach: tr("Estratégia de conteúdo, arquitectura, experiência e interface, desenvolvimento, testes e entrega.","Content strategy, architecture, user experience and interface design, development, testing and delivery."), model: tr("Execução interna para projectos compatíveis com a capacidade técnica disponível. Especialistas externos podem ser envolvidos mediante aprovação.","In-house delivery for projects within our available technical capacity. External specialists may be engaged with approval.") },
    "brand-creative": { name: tr("Marca e Criatividade","Brand & Creative"), title: tr("Marcas com clareza, consistência e personalidade.","Brands with clarity, consistency and personality."), description: tr("Construímos sistemas visuais que ajudam negócios a comunicar o seu valor de forma reconhecível e coerente.","We build visual systems that help businesses communicate their value with clarity and consistency."), deliverables: en ? ["Brand strategy and positioning","Visual identity and graphic systems","Logos and brand applications","Identity guidelines and art direction","Digital communication materials"] : ["Estratégia e posicionamento de marca","Identidade visual e sistemas gráficos","Logótipos e aplicações da marca","Guias de identidade e direcção visual","Materiais digitais de comunicação"], approach: tr("Descoberta, direcção criativa, exploração visual, refinamento e preparação dos ficheiros finais.","Discovery, creative direction, visual exploration, refinement and final file preparation."), model: tr("Direcção e coordenação internas. Produção especializada pode ser atribuída a parceiros com portefólio validado.","Direction and coordination in-house. Specialist production may be assigned to vetted partners.") },
    "business-technology": { name: tr("Tecnologia Empresarial","Business Technology"), title: tr("Tecnologia desenhada em torno do trabalho real.","Technology designed around real work."), description: tr("Ajudamos a transformar processos manuais e desafios operacionais em soluções digitais úteis e sustentáveis.","We help turn manual processes and operational challenges into useful, sustainable digital solutions."), deliverables: en ? ["Custom applications and software","Process automation","Platform integrations","Business portals and dashboards","Technical consulting and prototyping"] : ["Aplicações e software à medida","Automação de processos","Integrações entre plataformas","Portais e painéis empresariais","Consultoria técnica e prototipagem"], approach: tr("Diagnóstico, definição de requisitos, desenho técnico, implementação, testes e documentação.","Assessment, requirements definition, technical design, implementation, testing and documentation."), model: tr("Aceitação condicionada à análise técnica e de segurança. Projectos especializados podem exigir parceiros aprovados.","Engagement depends on technical and security assessment. Specialist projects may require approved partners.") },
    "digital-growth": { name: tr("Crescimento Digital","Digital Growth"), title: tr("Mais clareza para atrair, converter e evoluir.","More clarity to attract, convert and grow."), description: tr("Estruturamos a presença digital e os pontos de contacto para apoiar crescimento mensurável e decisões melhores.","We structure digital presence and touchpoints to support measurable growth and better decisions."), deliverables: en ? ["SEO audits and strategy","Keyword research and content structure","Conversion optimisation","Digital presence strategy","Performance measurement and reporting"] : ["Auditoria e estratégia de SEO","Pesquisa de palavras-chave e estrutura de conteúdo","Optimização de conversão","Estratégia de presença digital","Medição e relatórios de desempenho"], approach: tr("Diagnóstico, prioridades, plano de acção, implementação acordada e acompanhamento por indicadores.","Assessment, priorities, action plan, agreed implementation and KPI tracking."), model: tr("Estratégia e coordenação internas. Execução de campanhas, produção especializada e análise avançada podem ser entregues com parceiros.","Strategy and coordination in-house. Campaign execution, specialist production and advanced analytics may be delivered with partners.") },
  };
  const principleText: Record<string, { title: string; text: string }> = {
    "01": { title: tr("Começamos pelo problema","We start with the problem"), text: tr("Antes de recomendar tecnologia ou design, procuramos compreender o contexto, os objectivos e as restrições do negócio.","Before recommending technology or design, we seek to understand the context, goals and business constraints.") },
    "02": { title: tr("Definimos um âmbito claro","We define a clear scope"), text: tr("Cada proposta identifica entregáveis, exclusões, responsabilidades, prazos, investimento e critérios de aceitação.","Every proposal defines deliverables, exclusions, responsibilities, timelines, investment and acceptance criteria.") },
    "03": { title: tr("Montamos a equipa certa","We build the right team"), text: tr("O núcleo da Onésimo Digital coordena cada projecto e envolve especialistas externos quando o âmbito o exige.","The Onésimo Digital core team coordinates each project and brings in external specialists when the scope requires it.") },
    "04": { title: tr("Validamos antes de entregar","We validate before delivery"), text: tr("Testes, revisão e comunicação fazem parte do processo. Não tratamos uma entrega como concluída sem validação.","Testing, review and communication are part of the process. We do not consider a delivery complete without validation.") },
  };
  return (
    <>
      <SiteHeader />
      <main>
        <section className="services-page-hero relative overflow-hidden border-b border-white/10">
          <div aria-hidden="true" className="hero-grid absolute inset-0" />
          <div className="container-shell relative z-10 pb-20 pt-40 sm:pb-28 sm:pt-48">
            <SectionLabel>{tr("CAPACIDADES / ONÉSIMO DIGITAL","CAPABILITIES / ONÉSIMO DIGITAL")}</SectionLabel>
            <p className="section-overline mt-10">{tr("ESTRATÉGIA. DESIGN. TECNOLOGIA.","STRATEGY. DESIGN. TECHNOLOGY.")}</p>
            <h1 className="mt-5 max-w-[1000px] text-[clamp(3.3rem,8vw,7rem)] font-medium leading-[.9] tracking-[-.075em]">
              {tr("Soluções digitais para ","Digital solutions for ")}<span className="gold-text">{tr("negócios em movimento.","businesses on the move.")}</span>
            </h1>
            <p className="mt-8 max-w-[650px] text-sm leading-8 text-white/55 sm:text-base">
              {tr("Combinamos pensamento estratégico, criatividade e engenharia para construir experiências, marcas e ferramentas digitais alinhadas com desafios reais.","We combine strategic thinking, creativity and engineering to build digital experiences, brands and tools aligned with real challenges.")}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/#contacto" className="primary-button group">{tr("Falar sobre um projecto","Discuss a project")} <span aria-hidden="true">↗</span></Link>
              <Link href="#unidades" className="secondary-button">{tr("Explorar capacidades","Explore capabilities")} <span aria-hidden="true">↓</span></Link>
            </div>
            <div className="mt-16 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div><p className="meta-label">{tr("MODELO","MODEL")}</p><p className="mt-2 text-sm text-white/75">{tr("Núcleo interno + especialistas","Core team + specialists")}</p></div>
              <div><p className="meta-label">{tr("MERCADO","MARKET")}</p><p className="mt-2 text-sm text-white/75">{tr("Mercado internacional, com base em Luanda","International market, based in Luanda")}</p></div>
              <div><p className="meta-label">{tr("ABORDAGEM","APPROACH")}</p><p className="mt-2 text-sm text-white/75">{tr("Âmbito definido por projecto","Project-defined scope")}</p></div>
            </div>
          </div>
        </section>

        <section id="unidades" className="section-space services-section">
          <div className="container-shell">
            <SectionLabel>01 / {tr("UNIDADES DE NEGÓCIO","BUSINESS UNITS")}</SectionLabel>
            <h2 className="section-heading mt-6">{tr("Quatro áreas. ","Four areas. ")}<span className="gold-text">{tr("Uma visão integrada.","One integrated vision.")}</span></h2>
            <p className="mt-6 max-w-[620px] text-sm leading-7 text-white/50">{tr("As capacidades são organizadas em quatro unidades. O âmbito de cada contratação é definido após diagnóstico e confirmação dos recursos necessários.","Our capabilities are organised into four units. Each engagement is scoped after an initial assessment and confirmation of the resources required.")}</p>
            <div className="mt-14 space-y-5">
              {serviceLines.map((service) => (
                <article id={service.id} key={service.id} className="service-detail-card gold-border grid gap-8 p-7 sm:p-10 lg:grid-cols-[.78fr_1.22fr]">
                  <div>
                    <p className="text-[10px] tracking-[.2em] text-[#d6b56d]">{service.number} / 04 — {serviceText[service.id].name.toUpperCase()}</p>
                    <h3 className="mt-6 text-3xl font-medium leading-tight tracking-[-.055em] sm:text-4xl">{serviceText[service.id].title}</h3>
                    <p className="mt-5 text-sm leading-7 text-white/50">{serviceText[service.id].description}</p>
                    <Link href="/#contacto" className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold tracking-[.16em] text-[#d6b56d]">{tr("FALAR SOBRE ESTA ÁREA","DISCUSS THIS SERVICE")} <span aria-hidden="true">↗</span></Link>
                  </div>
                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[.18em] text-white/75">{tr("SERVIÇOS E ENTREGÁVEIS","SERVICES AND DELIVERABLES")}</h4>
                      <ul className="mt-4 space-y-3">{serviceText[service.id].deliverables.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/55"><span className="text-[#d6b56d]">—</span>{item}</li>)}</ul>
                    </div>
                    <div className="space-y-7">
                      <div><h4 className="text-[10px] font-bold tracking-[.18em] text-white/75">{tr("ABORDAGEM","APPROACH")}</h4><p className="mt-4 text-sm leading-7 text-white/55">{serviceText[service.id].approach}</p></div>
                      <div><h4 className="text-[10px] font-bold tracking-[.18em] text-white/75">{tr("MODELO DE EXECUÇÃO","DELIVERY MODEL")}</h4><p className="mt-4 text-sm leading-7 text-white/55">{serviceText[service.id].model}</p></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-y border-white/[0.06]">
          <div className="container-shell">
            <SectionLabel>02 / {tr("COMO TRABALHAMOS","HOW WE WORK")}</SectionLabel>
            <h2 className="section-heading mt-6">{tr("Um processo claro. ","A clear process. ")}<span className="gold-text">{tr("Do primeiro diálogo à entrega.","From first conversation to delivery.")}</span></h2>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((item) => <article key={item.number} className="border-t border-[#d6b56d]/35 pt-5"><p className="text-[10px] tracking-[.18em] text-[#d6b56d]">{item.number}</p><h3 className="mt-5 text-xl tracking-[-.04em]">{principleText[item.number].title}</h3><p className="mt-4 text-sm leading-7 text-white/45">{principleText[item.number].text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="cta-stage relative overflow-hidden py-24 sm:py-32">
          <div className="cta-glow" />
          <div className="container-shell relative text-center">
            <SectionLabel>{tr("O PRÓXIMO PASSO","THE NEXT STEP")}</SectionLabel>
            <h2 className="section-heading mx-auto mt-7">{tr("Vamos perceber o que o seu negócio ","Let’s understand what your business ")}<span className="gold-text">{tr("precisa de construir.","needs to build.")}</span></h2>
            <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-white/50">{tr("Partilhe o desafio, o objectivo e o prazo pretendido. A proposta será preparada depois de avaliarmos o âmbito e os recursos necessários.","Tell us about the challenge, your goal and desired timeline. We will prepare a proposal after assessing the scope and resources required.")}</p>
            <Link href="/#contacto" className="primary-button mt-10">{tr("Iniciar uma conversa","Start a conversation")} <span aria-hidden="true">↗</span></Link>
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
