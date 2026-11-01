import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a visão, a abordagem e o modelo de trabalho da Onésimo Digital, um estúdio independente de tecnologia e criatividade.",
};

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
  return (
    <>
      <SiteHeader />
      <main>
        <section className="services-page-hero relative overflow-hidden border-b border-white/10">
          <div aria-hidden="true" className="hero-grid absolute inset-0" />
          <div className="container-shell relative z-10 pb-20 pt-40 sm:pb-28 sm:pt-48">
            <SectionLabel>O ESTÚDIO / ONÉSIMO DIGITAL</SectionLabel>
            <p className="section-overline mt-10">UMA VISÃO. VÁRIAS POSSIBILIDADES.</p>
            <h1 className="mt-5 max-w-[1000px] text-[clamp(3.3rem,8vw,7rem)] font-medium leading-[.9] tracking-[-.075em]">
              Tecnologia com propósito. <span className="gold-text">Criatividade com direcção.</span>
            </h1>
            <p className="mt-8 max-w-[680px] text-sm leading-8 text-white/55 sm:text-base">
              A Onésimo Digital é um estúdio independente de tecnologia e criatividade. Aproximamos estratégia, design e engenharia para ajudar negócios e marcas a transformar ideias em soluções digitais úteis.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/servicos" className="primary-button">Conhecer serviços <span aria-hidden="true">↗</span></Link>
              <Link href="/#contacto" className="secondary-button">Falar sobre um projecto <span aria-hidden="true">↗</span></Link>
            </div>
            <div className="mt-16 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div><p className="meta-label">BASE</p><p className="mt-2 text-sm text-white/75">Luanda, Angola</p></div>
              <div><p className="meta-label">ALCANCE</p><p className="mt-2 text-sm text-white/75">Angola e mercado internacional</p></div>
              <div><p className="meta-label">MODELO</p><p className="mt-2 text-sm text-white/75">Núcleo fundador + especialistas por projecto</p></div>
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <SectionLabel>01 / A NOSSA VISÃO</SectionLabel>
              <p className="mt-6 max-w-[280px] text-sm leading-7 text-white/40">Não construímos tecnologia por tendência. Construímo-la para criar valor.</p>
            </div>
            <div>
              <h2 className="section-heading">O digital deve ser uma <span className="gold-text">vantagem real</span> para quem o utiliza.</h2>
              <p className="mt-8 max-w-[720px] text-sm leading-8 text-white/55">
                Acreditamos que uma presença digital forte vai além de uma aparência moderna. Precisa de comunicar com clareza, funcionar de forma consistente e apoiar objectivos concretos. Por isso, ligamos pensamento estratégico, experiência de utilização e implementação técnica desde o início.
              </p>
              <p className="mt-5 max-w-[720px] text-sm leading-8 text-white/55">
                Trabalhamos com um modelo deliberadamente flexível: a direcção, a relação com o cliente e a coordenação permanecem próximas do núcleo do estúdio; competências especializadas podem ser integradas por projecto, de acordo com o âmbito aprovado.
              </p>
            </div>
          </div>
        </section>

        <section className="section-space border-y border-white/[0.06]">
          <div className="container-shell">
            <SectionLabel>02 / PRINCÍPIOS DE TRABALHO</SectionLabel>
            <h2 className="section-heading mt-6">O padrão que orienta <span className="gold-text">cada decisão.</span></h2>
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle) => (
                <article key={principle.number} className="border-t border-[#d6b56d]/35 pt-5">
                  <p className="text-[10px] tracking-[.18em] text-[#d6b56d]">{principle.number}</p>
                  <h3 className="mt-5 text-xl tracking-[-.04em]">{principle.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/45">{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space">
          <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <SectionLabel>03 / COMO NOS ORGANIZAMOS</SectionLabel>
              <h2 className="section-heading mt-6">Uma estrutura <span className="gold-text">leve e responsável.</span></h2>
            </div>
            <div className="space-y-6 text-sm leading-8 text-white/55">
              <p>O estúdio opera com capacidade central liderada pelo fundador. Esta estrutura mantém a comunicação directa, reduz complexidade e permite adaptar a equipa às necessidades reais de cada projecto.</p>
              <p>Quando o trabalho exige competências, capacidade ou validação adicional, recorremos a parceiros independentes seleccionados para o âmbito específico. A participação, os custos, os prazos e as responsabilidades são definidos antes do início da execução.</p>
              <p>Não prometemos uma estrutura maior do que a existente. Assumimos apenas compromissos compatíveis com os recursos e os critérios acordados.</p>
            </div>
          </div>
        </section>

        <section className="cta-stage relative overflow-hidden py-24 sm:py-32">
          <div className="cta-glow" />
          <div className="container-shell relative text-center">
            <SectionLabel>O PRÓXIMO PASSO</SectionLabel>
            <h2 className="section-heading mx-auto mt-7">Tem um desafio digital? <span className="gold-text">Vamos explorá-lo.</span></h2>
            <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-white/50">Conheça as nossas áreas de actuação e descubra como podemos estruturar uma solução adequada ao seu contexto.</p>
            <Link href="/servicos" className="primary-button mt-10">Explorar serviços <span aria-hidden="true">↗</span></Link>
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
