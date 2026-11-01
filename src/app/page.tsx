import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { LeadForm } from "@/components/lead-form";

const services = [
  { number: "01", title: "Websites & Plataformas", description: "Experiências digitais rápidas, intuitivas e preparadas para transformar visitantes em clientes.", tags: "WEB DESIGN · DESENVOLVIMENTO", symbol: "↗" },
  { number: "02", title: "Branding & Identidade", description: "Sistemas de marca consistentes que comunicam valor, personalidade e confiança.", tags: "ESTRATÉGIA · IDENTIDADE VISUAL", symbol: "✳" },
  { number: "03", title: "Marketing Digital", description: "Presença digital inteligente para atrair as pessoas certas e acelerar o crescimento.", tags: "SEO · CONTEÚDO · PERFORMANCE", symbol: "◎" },
  { number: "04", title: "Soluções Tecnológicas", description: "Automação e ferramentas digitais desenhadas à medida dos desafios do negócio.", tags: "AUTOMAÇÃO · SOFTWARE · INTEGRAÇÃO", symbol: "⌘" },
];

const projects = [
  { number: "01", name: "Digital Commerce", type: "ECOMMERCE EXPERIENCE", className: "commerce-art", mark: "Nº 01", description: "Uma experiência de comércio digital construída para converter." },
  { number: "02", name: "Brand Universe", type: "BRAND & DIGITAL IDENTITY", className: "universe-art", mark: "FORM / FUNCTION", description: "Um universo visual coerente, distinto e memorável." },
];

function Arrow() {
  return <span aria-hidden="true" className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>;
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="inicio" className="hero-stage relative flex min-h-[790px] items-center overflow-hidden pt-28 sm:min-h-[900px]">
          <div aria-hidden="true" className="hero-grid absolute inset-0" />
          <div aria-hidden="true" className="hero-aurora hero-aurora-one" />
          <div aria-hidden="true" className="hero-aurora hero-aurora-two" />
          <div aria-hidden="true" className="hero-index absolute right-8 top-32 hidden lg:block">OD / 001 — DIGITAL FRONTIER</div>

          <div className="container-shell relative z-10 grid items-center gap-10 pb-24 pt-12 lg:grid-cols-[1.08fr_.92fr]">
            <div className="hero-copy max-w-[780px]">
              <div className="hero-kicker mb-8 inline-flex items-center gap-3">
                <span className="live-dot" />
                <span>PREMIUM DIGITAL TECHNOLOGY STUDIO</span>
                <span className="kicker-line" />
              </div>
              <p className="hero-overline mb-5">ESTRATÉGIA. DESIGN. TECNOLOGIA.</p>
              <h1 className="hero-title max-w-[850px] text-[clamp(3.8rem,8.2vw,7.8rem)] font-medium leading-[.86] tracking-[-.085em] text-[#f7f4ed]">
                Ideias grandes.
                <span className="hero-title-accent block">Impacto real.</span>
                <span className="hero-title-last block">Futuro digital.</span>
              </h1>
              <p className="mt-9 max-w-[510px] text-[15px] leading-8 text-white/60 sm:text-base">
                Transformamos ambição em experiências digitais extraordinárias. Criamos marcas, plataformas e soluções tecnológicas para negócios que querem avançar.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#contacto" className="primary-button group">Vamos construir o próximo <Arrow /></a>
                <a href="#servicos" className="secondary-button group">Descobrir o que fazemos <span className="transition-transform group-hover:translate-y-1">↓</span></a>
              </div>
              <div className="hero-footnote mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6">
                <div><p className="meta-label">BASE</p><p className="mt-2 text-xs text-white/80">Luanda, Angola</p></div>
                <div className="meta-divider" />
                <div><p className="meta-label">ALCANCE</p><p className="mt-2 text-xs text-white/80">Angola & Internacional</p></div>
                <div className="meta-divider" />
                <div><p className="meta-label">FOCO</p><p className="mt-2 text-xs text-white/80">Criar o que vem a seguir</p></div>
              </div>
            </div>

            <div aria-label="Composição gráfica da identidade Onésimo Digital" className="hero-art relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-orbit orbit-three" />
              <div className="art-crosshair crosshair-top" />
              <div className="art-crosshair crosshair-bottom" />
              <div className="art-core-glow" />
              <div className="art-core">
                <div className="art-core-inner">
                  <span className="art-monogram">OD<span>.</span></span>
                  <span className="art-core-caption">BEYOND THE EXPECTED</span>
                </div>
              </div>
              <div className="art-satellite satellite-one"><span className="satellite-icon">✳</span><span><b>DESIGN</b><small>Made to matter.</small></span></div>
              <div className="art-satellite satellite-two"><span className="satellite-icon">⌘</span><span><b>TECHNOLOGY</b><small>Built to evolve.</small></span></div>
              <div className="art-coordinate coordinate-one">08°50&apos; S<br />13°14&apos; E</div>
              <div className="art-coordinate coordinate-two">EST. / 2026</div>
              <span className="art-particle particle-one" />
              <span className="art-particle particle-two" />
              <span className="art-particle particle-three" />
            </div>
          </div>
          <div className="hero-bottomline absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 sm:px-10">
            <span>DESIGNED TO MOVE BUSINESS FORWARD</span><span className="hidden sm:block">SCROLL TO EXPLORE ↓</span><span>LUANDA · WORLDWIDE</span>
          </div>
        </section>

        <div className="marquee-line overflow-hidden py-5" aria-label="A nossa filosofia">
          <div className="marquee-track flex w-max items-center gap-10 text-[10px] font-semibold tracking-[.24em] text-white/45">
            {Array.from({ length: 2 }).map((_, index) => <div key={index} className="flex items-center gap-10"><span>THINK STRATEGICALLY</span><span className="text-[#d6b56d]">✳</span><span>DESIGN FEARLESSLY</span><span className="text-[#d6b56d]">✳</span><span>BUILD INTELLIGENTLY</span><span className="text-[#d6b56d]">✳</span><span>GROW LIMITLESSLY</span><span className="text-[#d6b56d]">✳</span></div>)}
          </div>
        </div>

        <section id="sobre" className="section-space about-section">
          <div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div><SectionLabel>01 / Quem somos</SectionLabel><p className="mt-6 max-w-[270px] text-sm leading-7 text-white/45">Uma visão contemporânea sobre o que a tecnologia pode fazer por uma marca.</p><div className="about-stamp mt-12 hidden sm:flex"><span>OD</span><small>THINK<br />FORWARD</small></div></div>
            <div><p className="section-overline">NÃO SE TRATA DE ACOMPANHAR O FUTURO.</p><h2 className="section-heading mt-5">Trata-se de <span className="gold-text">criar vantagem</span> antes dos outros.</h2><p className="mt-8 max-w-[660px] text-[15px] leading-8 text-white/55">A Onésimo Digital é um estúdio de tecnologia e criatividade focado em aproximar marcas do seu próximo nível. Unimos pensamento estratégico, design intencional e engenharia digital para criar soluções que fazem sentido — e fazem a diferença.</p><a href="#contacto" className="group mt-8 inline-flex items-center gap-3 text-[10px] font-bold tracking-[.16em] text-[#d6b56d]">CONHEÇA A NOSSA ABORDAGEM <Arrow /></a></div>
          </div>
        </section>

        <section id="servicos" className="section-space services-section border-y border-white/[0.06]">
          <div className="container-shell">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><SectionLabel>02 / O que fazemos</SectionLabel><h2 className="section-heading mt-6">Capacidades para <span className="gold-text">ir mais longe.</span></h2></div><p className="max-w-[330px] pb-1 text-sm leading-7 text-white/50">Da primeira ideia à solução final, cada detalhe é pensado para gerar impacto real.</p></div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2">{services.map((service) => <article key={service.number} className="service-card gold-border group relative min-h-[285px] overflow-hidden p-7 sm:p-9"><div className="service-card-shine" /><div className="relative z-10 flex items-start justify-between"><span className="text-[10px] tracking-[.15em] text-[#d6b56d]">{service.number} / 04</span><span className="service-symbol">{service.symbol}</span></div><h3 className="relative z-10 mt-12 text-[25px] font-medium tracking-[-.045em]">{service.title}</h3><p className="relative z-10 mt-4 max-w-[390px] text-sm leading-7 text-white/50">{service.description}</p><p className="relative z-10 mt-7 text-[8px] font-bold tracking-[.18em] text-[#c7a766]">{service.tags}</p></article>)}</div>
          </div>
        </section>

        <section id="projectos" className="section-space projects-section">
          <div className="container-shell">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><SectionLabel>03 / Concept Lab</SectionLabel><h2 className="section-heading mt-6">Ideias que ganham <span className="gold-text">vida.</span></h2></div>
              <p className="max-w-[330px] text-sm leading-7 text-white/50">Não mostramos apenas imagens. Explore demonstrações interactivas que revelam como pensamos, desenhamos e construímos produtos digitais.</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <a href="/projectos/form" className="project-card group block"><div className="project-visual commerce-art flex aspect-[1.28] items-center justify-center"><div className="project-frame" /><div className="project-orbit" /><div className="relative z-10 text-center"><span className="text-[9px] tracking-[.35em] text-[#f0d69a]/80">01 / DIGITAL COMMERCE</span><div className="project-wordmark my-5">FORM.</div><span className="text-[8px] tracking-[.3em] text-white/50">INTERACTIVE DEMO ↗</span></div></div><h3 className="mt-5 text-xl">FORM. — Digital Commerce</h3><p className="mt-2 text-sm text-white/45">Loja conceptual com catálogo, filtros e carrinho interactivo.</p></a>
              <a href="/projectos/nexus" className="project-card group block"><div className="project-visual flex aspect-[1.28] items-center justify-center bg-[radial-gradient(ellipse_at_50%_45%,rgba(70,130,120,.24),transparent_45%),linear-gradient(135deg,#172421,#080b0a)]"><div className="project-frame" /><div className="relative z-10 text-center"><span className="text-[9px] tracking-[.35em] text-[#b7d8cb]/80">02 / BUSINESS INTELLIGENCE</span><div className="project-wordmark my-5">NEXUS</div><span className="text-[8px] tracking-[.3em] text-white/50">INTERACTIVE DASHBOARD ↗</span></div></div><h3 className="mt-5 text-xl">NEXUS — Business Intelligence</h3><p className="mt-2 text-sm text-white/45">Painel demonstrativo de vendas, clientes e desempenho.</p></a>
              <a href="/projectos/cliniq" className="project-card group block"><div className="project-visual flex aspect-[1.28] items-center justify-center bg-[radial-gradient(ellipse_at_50%_45%,rgba(180,145,145,.2),transparent_45%),linear-gradient(135deg,#292020,#0b0808)]"><div className="project-frame" /><div className="relative z-10 text-center"><span className="text-[9px] tracking-[.35em] text-[#edc9c9]/80">03 / SMART BOOKING</span><div className="project-wordmark my-5">CLINIQ</div><span className="text-[8px] tracking-[.3em] text-white/50">BOOKING EXPERIENCE ↗</span></div></div><h3 className="mt-5 text-xl">CLINIQ — Smart Booking</h3><p className="mt-2 text-sm text-white/45">Fluxo de marcação online e selecção de horários.</p></a>
              <a href="/projectos/aura" className="project-card group block"><div className="project-visual universe-art flex aspect-[1.28] items-center justify-center"><div className="project-frame" /><div className="project-orbit" /><div className="relative z-10 text-center"><span className="text-[9px] tracking-[.35em] text-[#f0d69a]/80">04 / BRAND EXPERIENCE</span><div className="project-wordmark my-5">AURA.</div><span className="text-[8px] tracking-[.3em] text-white/50">INTERACTIVE BRAND STUDY ↗</span></div></div><h3 className="mt-5 text-xl">AURA. — Brand Experience</h3><p className="mt-2 text-sm text-white/45">Sistema de identidade, paleta, tipografia e aplicações.</p></a>
            </div>
            <div className="mt-10 text-center"><a href="/projectos" className="secondary-button group">Explorar o Concept Lab <Arrow /></a></div>
            <p className="mt-8 text-[10px] tracking-wide text-white/35">* Estudos de conceito com dados fictícios. Não representam trabalhos realizados para clientes.</p>
          </div>
        </section>

        <section className="cta-stage relative overflow-hidden border-y border-[#d6b56d]/20 py-24 sm:py-32"><div className="cta-glow" /><div className="container-shell relative text-center"><SectionLabel>O próximo capítulo</SectionLabel><p className="section-overline mt-8">A SUA PRÓXIMA IDEIA MERECE MAIS.</p><h2 className="mx-auto mt-5 max-w-[900px] text-[clamp(2.9rem,6.5vw,6rem)] font-medium leading-[.94] tracking-[-.07em]">Vamos transformar visão em <span className="gold-text">movimento.</span></h2><a href="#contacto" className="primary-button group mt-11">Fale sobre o seu projecto <Arrow /></a></div></section>

        <section id="contacto" className="section-space contact-section"><div className="container-shell grid gap-12 lg:grid-cols-[1fr_.8fr]"><div><SectionLabel>04 / Contacto</SectionLabel><p className="section-overline mt-8">TUDO COMEÇA COM UMA CONVERSA.</p><h2 className="section-heading mt-5">Tem uma ideia? <span className="gold-text">Vamos dar-lhe vida.</span></h2><p className="mt-7 max-w-[430px] text-sm leading-7 text-white/50">Conte-nos o que pretende construir. Estamos prontos para ouvir, pensar e encontrar o caminho certo para o seu projecto.</p></div><div className="contact-panel gold-border p-7 sm:p-10"><p className="text-[10px] tracking-[.2em] text-[#d6b56d]">NOVOS PROJECTOS</p><h3 className="mt-4 text-2xl tracking-[-.04em]">Vamos falar do seu projecto.</h3><p className="mt-4 text-sm leading-7 text-white/50">Partilhe alguns detalhes. Analisaremos o seu pedido e entraremos em contacto para definir os próximos passos.</p><div className="mt-8"><LeadForm /></div></div></div></section>
      </main>
      <footer className="border-t border-white/10 py-8"><div className="container-shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><a href="#inicio" className="text-xs font-semibold tracking-[.13em]">ONÉSIMO <span className="text-[#d6b56d]">DIGITAL.</span></a><p className="text-[10px] text-white/35">© {new Date().getFullYear()} Onésimo Digital. Todos os direitos reservados.</p><p className="text-[9px] tracking-[.15em] text-white/35">BUILT FOR WHAT&apos;S NEXT.</p></div></footer>
    </>
  );
}
