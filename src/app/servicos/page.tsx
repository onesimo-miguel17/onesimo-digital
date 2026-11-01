import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça as capacidades da Onésimo Digital em experiências digitais, branding, tecnologia empresarial e crescimento digital.",
};

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
  return (
    <>
      <SiteHeader />
      <main>
        <section className="services-page-hero relative overflow-hidden border-b border-white/10">
          <div aria-hidden="true" className="hero-grid absolute inset-0" />
          <div className="container-shell relative z-10 pb-20 pt-40 sm:pb-28 sm:pt-48">
            <SectionLabel>CAPACIDADES / ONÉSIMO DIGITAL</SectionLabel>
            <p className="section-overline mt-10">ESTRATÉGIA. DESIGN. TECNOLOGIA.</p>
            <h1 className="mt-5 max-w-[1000px] text-[clamp(3.3rem,8vw,7rem)] font-medium leading-[.9] tracking-[-.075em]">
              Soluções digitais para <span className="gold-text">negócios em movimento.</span>
            </h1>
            <p className="mt-8 max-w-[650px] text-sm leading-8 text-white/55 sm:text-base">
              Combinamos pensamento estratégico, criatividade e engenharia para construir experiências, marcas e ferramentas digitais alinhadas com desafios reais.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/#contacto" className="primary-button group">Falar sobre um projecto <span aria-hidden="true">↗</span></Link>
              <Link href="#unidades" className="secondary-button">Explorar capacidades <span aria-hidden="true">↓</span></Link>
            </div>
            <div className="mt-16 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div><p className="meta-label">MODELO</p><p className="mt-2 text-sm text-white/75">Núcleo interno + especialistas</p></div>
              <div><p className="meta-label">MERCADO</p><p className="mt-2 text-sm text-white/75">Angola e internacional</p></div>
              <div><p className="meta-label">ABORDAGEM</p><p className="mt-2 text-sm text-white/75">Escopo definido por projecto</p></div>
            </div>
          </div>
        </section>

        <section id="unidades" className="section-space services-section">
          <div className="container-shell">
            <SectionLabel>01 / UNIDADES DE NEGÓCIO</SectionLabel>
            <h2 className="section-heading mt-6">Quatro áreas. <span className="gold-text">Uma visão integrada.</span></h2>
            <p className="mt-6 max-w-[620px] text-sm leading-7 text-white/50">As capacidades são organizadas em quatro unidades. O âmbito de cada contratação é definido após diagnóstico e confirmação dos recursos necessários.</p>
            <div className="mt-14 space-y-5">
              {serviceLines.map((service) => (
                <article id={service.id} key={service.id} className="service-detail-card gold-border grid gap-8 p-7 sm:p-10 lg:grid-cols-[.78fr_1.22fr]">
                  <div>
                    <p className="text-[10px] tracking-[.2em] text-[#d6b56d]">{service.number} / 04 — {service.name.toUpperCase()}</p>
                    <h3 className="mt-6 text-3xl font-medium leading-tight tracking-[-.055em] sm:text-4xl">{service.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-white/50">{service.description}</p>
                    <Link href="/#contacto" className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold tracking-[.16em] text-[#d6b56d]">FALAR SOBRE ESTA ÁREA <span aria-hidden="true">↗</span></Link>
                  </div>
                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <h4 className="text-[10px] font-bold tracking-[.18em] text-white/75">SERVIÇOS E ENTREGÁVEIS</h4>
                      <ul className="mt-4 space-y-3">{service.deliverables.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/55"><span className="text-[#d6b56d]">—</span>{item}</li>)}</ul>
                    </div>
                    <div className="space-y-7">
                      <div><h4 className="text-[10px] font-bold tracking-[.18em] text-white/75">ABORDAGEM</h4><p className="mt-4 text-sm leading-7 text-white/55">{service.approach}</p></div>
                      <div><h4 className="text-[10px] font-bold tracking-[.18em] text-white/75">MODELO DE EXECUÇÃO</h4><p className="mt-4 text-sm leading-7 text-white/55">{service.model}</p></div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space border-y border-white/[0.06]">
          <div className="container-shell">
            <SectionLabel>02 / COMO TRABALHAMOS</SectionLabel>
            <h2 className="section-heading mt-6">Um processo claro. <span className="gold-text">Do primeiro diálogo à entrega.</span></h2>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((item) => <article key={item.number} className="border-t border-[#d6b56d]/35 pt-5"><p className="text-[10px] tracking-[.18em] text-[#d6b56d]">{item.number}</p><h3 className="mt-5 text-xl tracking-[-.04em]">{item.title}</h3><p className="mt-4 text-sm leading-7 text-white/45">{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="cta-stage relative overflow-hidden py-24 sm:py-32">
          <div className="cta-glow" />
          <div className="container-shell relative text-center">
            <SectionLabel>O PRÓXIMO PASSO</SectionLabel>
            <h2 className="section-heading mx-auto mt-7">Vamos perceber o que o seu negócio <span className="gold-text">precisa de construir.</span></h2>
            <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-white/50">Partilhe o desafio, o objectivo e o prazo pretendido. A proposta será preparada depois de avaliarmos o âmbito e os recursos necessários.</p>
            <Link href="/#contacto" className="primary-button mt-10">Iniciar uma conversa <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="container-shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <Link href="/" className="text-xs font-semibold tracking-[.13em]">ONÉSIMO <span className="text-[#d6b56d]">DIGITAL.</span></Link>
          <p className="text-[10px] text-white/35">© {new Date().getFullYear()} Onésimo Digital. Todos os direitos reservados.</p>
          <Link href="/#inicio" className="text-[9px] tracking-[.15em] text-white/35">VOLTAR AO INÍCIO ↑</Link>
        </div>
      </footer>
    </>
  );
}
