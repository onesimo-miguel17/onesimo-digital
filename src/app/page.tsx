"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { LeadForm } from "@/components/lead-form";
import { useLanguage } from "@/components/language-provider";

function Arrow() {
  return <span aria-hidden="true" className="inline-block text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>;
}

export default function Home() {
  const { language } = useLanguage();
  const en = language === "en";
  const tr = (pt: string, english: string) => en ? english : pt;
  const services = [
    { number: "01", title: tr("Websites e Plataformas","Websites & Platforms"), description: tr("Experiências digitais rápidas, intuitivas e preparadas para transformar visitantes em clientes.","Fast, intuitive digital experiences designed to turn visitors into customers."), tags: tr("DESIGN WEB · DESENVOLVIMENTO","WEB DESIGN · DEVELOPMENT"), symbol: "↗" },
    { number: "02", title: tr("Marca e Identidade","Branding & Identity"), description: tr("Sistemas de marca consistentes que comunicam valor, personalidade e confiança.","Consistent brand systems that communicate value, personality and trust."), tags: tr("ESTRATÉGIA · IDENTIDADE VISUAL","STRATEGY · VISUAL IDENTITY"), symbol: "✳" },
    { number: "03", title: tr("Marketing Digital","Digital Marketing"), description: tr("Presença digital inteligente para atrair as pessoas certas e acelerar o crescimento.","A smart digital presence that attracts the right people and accelerates growth."), tags: tr("SEO · CONTEÚDO · DESEMPENHO","SEO · CONTENT · PERFORMANCE"), symbol: "◎" },
    { number: "04", title: tr("Soluções Tecnológicas","Technology Solutions"), description: tr("Automação e ferramentas digitais desenhadas à medida dos desafios do negócio.","Automation and digital tools tailored to business challenges."), tags: tr("AUTOMAÇÃO · SOFTWARE · INTEGRAÇÃO","AUTOMATION · SOFTWARE · INTEGRATION"), symbol: "⌘" },
  ];
  return (
    <>
      <SiteHeader />
      <main>
        <section id="inicio" className="hero-stage relative flex min-h-[790px] items-center overflow-hidden pt-28 sm:min-h-[900px]">
          <div aria-hidden="true" className="hero-grid absolute inset-0" />
          <div aria-hidden="true" className="hero-aurora hero-aurora-one" />
          <div aria-hidden="true" className="hero-aurora hero-aurora-two" />
          <div aria-hidden="true" className="hero-index absolute right-8 top-32 hidden lg:block">{tr("OD / 001 — FRONTEIRA DIGITAL","OD / 001 — DIGITAL FRONTIER")}</div>

          <div className="container-shell relative z-10 grid items-center gap-10 pb-24 pt-12 lg:grid-cols-[1.08fr_.92fr]">
            <div className="hero-copy max-w-[780px]">
              <div className="hero-kicker mb-8 inline-flex items-center gap-3">
                <span className="live-dot" />
                <span>{tr("ESTÚDIO DE TECNOLOGIA DIGITAL","DIGITAL TECHNOLOGY STUDIO")}</span>
                <span className="kicker-line" />
              </div>
              <p className="hero-overline mb-5">{tr("ESTRATÉGIA. DESIGN. TECNOLOGIA.","STRATEGY. DESIGN. TECHNOLOGY.")}</p>
              <h1 className="hero-title max-w-[850px] text-[clamp(3.8rem,8.2vw,7.8rem)] font-medium leading-[.86] tracking-[-.085em] text-[#f7f4ed]">
                {tr("Ideias grandes.","Big ideas.")}
                <span className="hero-title-accent block">{tr("Impacto real.","Real impact.")}</span>
                <span className="hero-title-last block">{tr("Futuro digital.","Digital future.")}</span>
              </h1>
              <p className="mt-9 max-w-[510px] text-[15px] leading-8 text-white/60 sm:text-base">
                {tr("Transformamos ambição em experiências digitais extraordinárias. Criamos marcas, plataformas e soluções tecnológicas para negócios que querem avançar.","We turn ambition into outstanding digital experiences. We build brands, platforms and technology solutions for businesses ready to move forward.")}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#contacto" className="primary-button group">{tr("Vamos construir o próximo","Let’s build what comes next")} <Arrow /></a>
                <a href="#servicos" className="secondary-button group">{tr("Descobrir o que fazemos","Explore our services")} <span className="transition-transform group-hover:translate-y-1">↓</span></a>
              </div>
              <div className="hero-footnote mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6">
                <div><p className="meta-label">{tr("BASE","BASED IN")}</p><p className="mt-2 text-xs text-white/80">Luanda, Angola</p></div>
                <div className="meta-divider" />
                <div><p className="meta-label">{tr("ALCANCE","REACH")}</p><p className="mt-2 text-xs text-white/80">{tr("Angola e internacional","Angola and international")}</p></div>
                <div className="meta-divider" />
                <div><p className="meta-label">{tr("FOCO","FOCUS")}</p><p className="mt-2 text-xs text-white/80">{tr("Criar o que vem a seguir","Building what comes next")}</p></div>
              </div>
            </div>

            <div aria-label={tr("Composição gráfica da identidade Onésimo Digital","Onésimo Digital brand composition")} className="hero-art relative mx-auto flex aspect-square w-full max-w-[560px] items-center justify-center">
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-orbit orbit-three" />
              <div className="art-crosshair crosshair-top" />
              <div className="art-crosshair crosshair-bottom" />
              <div className="art-core-glow" />
              <div className="art-core">
                <div className="art-core-inner">
                  <span className="art-monogram">OD<span>.</span></span>
                  <span className="art-core-caption">{tr("ALÉM DO ESPERADO","BEYOND THE EXPECTED")}</span>
                </div>
              </div>
              <div className="art-satellite satellite-one"><span className="satellite-icon">✳</span><span><b>{tr("DESIGN","DESIGN")}</b><small>{tr("Feito para ter significado.","Made to matter.")}</small></span></div>
              <div className="art-satellite satellite-two"><span className="satellite-icon">⌘</span><span><b>{tr("TECNOLOGIA","TECHNOLOGY")}</b><small>{tr("Criada para evoluir.","Built to evolve.")}</small></span></div>
              <div className="art-coordinate coordinate-one">08°50&apos; S<br />13°14&apos; E</div>
              <div className="art-coordinate coordinate-two">{tr("FUNDADO / 2026","EST. / 2026")}</div>
              <span className="art-particle particle-one" />
              <span className="art-particle particle-two" />
              <span className="art-particle particle-three" />
            </div>
          </div>
          <div className="hero-bottomline absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 sm:px-10">
            <span>{tr("FEITO PARA FAZER NEGÓCIOS AVANÇAR","DESIGNED TO MOVE BUSINESS FORWARD")}</span><span className="hidden sm:block">{tr("DESÇA PARA EXPLORAR ↓","SCROLL TO EXPLORE ↓")}</span><span>{tr("LUANDA · MUNDO","LUANDA · WORLDWIDE")}</span>
          </div>
        </section>

        <div className="marquee-line overflow-hidden py-5" aria-label={tr("A nossa filosofia","Our philosophy")}>
          <div className="marquee-track flex w-max items-center gap-10 text-[10px] font-semibold tracking-[.24em] text-white/45">
            {Array.from({ length: 2 }).map((_, index) => <div key={index} className="flex items-center gap-10"><span>{tr("PENSAR ESTRATEGICAMENTE","THINK STRATEGICALLY")}</span><span className="text-[#d6b56d]">✳</span><span>{tr("DESENHAR SEM RECEIO","DESIGN FEARLESSLY")}</span><span className="text-[#d6b56d]">✳</span><span>{tr("CONSTRUIR COM INTELIGÊNCIA","BUILD INTELLIGENTLY")}</span><span className="text-[#d6b56d]">✳</span><span>{tr("CRESCER SEM LIMITES","GROW WITHOUT LIMITS")}</span><span className="text-[#d6b56d]">✳</span></div>)}
          </div>
        </div>

        <section id="sobre" className="section-space about-section">
          <div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <div><SectionLabel>01 / {tr("Quem somos","Who we are")}</SectionLabel><p className="mt-6 max-w-[270px] text-sm leading-7 text-white/45">{tr("Uma visão contemporânea sobre o que a tecnologia pode fazer por uma marca.","A contemporary view of what technology can do for a brand.")}</p><div className="about-stamp mt-12 hidden sm:flex"><span>OD</span><small>{tr("PENSAR<br />EM FRENTE","THINK<br />FORWARD")}</small></div></div>
            <div><p className="section-overline">{tr("NÃO SE TRATA DE ACOMPANHAR O FUTURO.","IT IS NOT ABOUT FOLLOWING THE FUTURE.")}</p><h2 className="section-heading mt-5">{tr("Trata-se de ","It is about ")}<span className="gold-text">{tr("criar vantagem","creating an advantage")}</span> antes dos outros.</h2><p className="mt-8 max-w-[660px] text-[15px] leading-8 text-white/55">{tr("A Onésimo Digital é um estúdio de tecnologia e criatividade focado em aproximar marcas do seu próximo nível. Unimos pensamento estratégico, design intencional e engenharia digital para criar soluções que fazem sentido — e fazem a diferença.","Onésimo Digital is a technology and creative studio helping brands reach their next level. We combine strategic thinking, intentional design and digital engineering to create meaningful solutions that make a difference.")}</p><a href="#contacto" className="group mt-8 inline-flex items-center gap-3 text-[10px] font-bold tracking-[.16em] text-[#d6b56d]">{tr("CONHEÇA A NOSSA ABORDAGEM","DISCOVER OUR APPROACH")} <Arrow /></a></div>
          </div>
        </section>

        <section id="servicos" className="section-space services-section border-y border-white/[0.06]">
          <div className="container-shell">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><SectionLabel>02 / {tr("O que fazemos","What we do")}</SectionLabel><h2 className="section-heading mt-6">{tr("Capacidades para ","Capabilities to ")}<span className="gold-text">{tr("ir mais longe.","go further.")}</span></h2></div><p className="max-w-[330px] pb-1 text-sm leading-7 text-white/50">{tr("Da primeira ideia à solução final, cada detalhe é pensado para gerar impacto real.","From the first idea to the final solution, every detail is designed to create real impact.")}</p></div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2">{services.map((service) => <article key={service.number} className="service-card gold-border group relative min-h-[285px] overflow-hidden p-7 sm:p-9"><div className="service-card-shine" /><div className="relative z-10 flex items-start justify-between"><span className="text-[10px] tracking-[.15em] text-[#d6b56d]">{service.number} / 04</span><span className="service-symbol">{service.symbol}</span></div><h3 className="relative z-10 mt-12 text-[25px] font-medium tracking-[-.045em]">{service.title}</h3><p className="relative z-10 mt-4 max-w-[390px] text-sm leading-7 text-white/50">{service.description}</p><p className="relative z-10 mt-7 text-[8px] font-bold tracking-[.18em] text-[#c7a766]">{service.tags}</p></article>)}</div>
          </div>
        </section>

        <section id="projectos" className="section-space projects-section">
          <div className="container-shell">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><SectionLabel>03 / {tr("Demonstrações","Product demos")}</SectionLabel><h2 className="section-heading mt-6">{tr("Ideias que ganham ","Ideas brought ")}<span className="gold-text">{tr("vida.","to life.")}</span></h2></div>
              <p className="max-w-[330px] text-sm leading-7 text-white/50">{tr("Não mostramos apenas imagens. Explore demonstrações interactivas que revelam como pensamos, desenhamos e construímos produtos digitais.","We do more than show images. Explore interactive demos that reveal how we think, design and build digital products.")}</p>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <Link href="/projectos/form" className="project-card group block"><div className="project-visual commerce-art flex aspect-[1.28] items-center justify-center"><div className="project-frame" /><div className="project-orbit" /><div className="relative z-10 text-center"><span className="text-[9px] tracking-[.35em] text-[#f0d69a]/80">01 / {tr("COMÉRCIO DIGITAL","ONLINE STORE")}</span><div className="project-wordmark my-5">Compra Certa</div><span className="text-[8px] tracking-[.3em] text-white/50">{tr("DEMONSTRAÇÃO INTERACTIVA ↗","INTERACTIVE DEMO ↗")}</span></div></div><h3 className="mt-5 text-xl">Compra Certa — {tr("Loja online","Online store")}</h3><p className="mt-2 text-sm text-white/45">{tr("Loja online com catálogo, filtros e carrinho de compras.","Online shop with catalogue, filters and shopping cart.")}</p></Link>
              <Link href="/projectos/nexus" className="project-card group block"><div className="project-visual flex aspect-[1.28] items-center justify-center bg-[radial-gradient(ellipse_at_50%_45%,rgba(70,130,120,.24),transparent_45%),linear-gradient(135deg,#172421,#080b0a)]"><div className="project-frame" /><div className="relative z-10 text-center"><span className="text-[9px] tracking-[.35em] text-[#b7d8cb]/80">02 / {tr("GESTÃO EMPRESARIAL","BUSINESS MANAGEMENT")}</span><div className="project-wordmark my-5">Meu Negócio</div><span className="text-[8px] tracking-[.3em] text-white/50">{tr("PAINEL INTERACTIVO ↗","INTERACTIVE DASHBOARD ↗")}</span></div></div><h3 className="mt-5 text-xl">Meu Negócio — {tr("Gestão empresarial","Business management")}</h3><p className="mt-2 text-sm text-white/45">{tr("Plataforma de gestão de vendas, clientes e desempenho.","Business platform for sales, customers and performance.")}</p></Link>
              <Link href="/projectos/cliniq" className="project-card group block"><div className="project-visual flex aspect-[1.28] items-center justify-center bg-[radial-gradient(ellipse_at_50%_45%,rgba(180,145,145,.2),transparent_45%),linear-gradient(135deg,#292020,#0b0808)]"><div className="project-frame" /><div className="relative z-10 text-center"><span className="text-[9px] tracking-[.35em] text-[#edc9c9]/80">03 / {tr("MARCAÇÕES ONLINE","ONLINE APPOINTMENTS")}</span><div className="project-wordmark my-5">Marque Já</div><span className="text-[8px] tracking-[.3em] text-white/50">{tr("EXPERIÊNCIA DE MARCAÇÃO ↗","BOOKING EXPERIENCE ↗")}</span></div></div><h3 className="mt-5 text-xl">Marque Já — {tr("Marcações online","Online appointments")}</h3><p className="mt-2 text-sm text-white/45">{tr("Marcação de consultas e selecção de horários.","Appointment booking and time selection.")}</p></Link>
              <Link href="/projectos/aura" className="project-card group block"><div className="project-visual universe-art flex aspect-[1.28] items-center justify-center"><div className="project-frame" /><div className="project-orbit" /><div className="relative z-10 text-center"><span className="text-[9px] tracking-[.35em] text-[#f0d69a]/80">04 / {tr("IDENTIDADE DE MARCA","BRAND IDENTITY")}</span><div className="project-wordmark my-5">Minha Marca</div><span className="text-[8px] tracking-[.3em] text-white/50">{tr("ESTUDO DE MARCA INTERACTIVO ↗","INTERACTIVE BRAND STUDY ↗")}</span></div></div><h3 className="mt-5 text-xl">Minha Marca — {tr("Identidade de marca","Brand identity")}</h3><p className="mt-2 text-sm text-white/45">{tr("Identidade visual, paleta de cores, tipografia e aplicações.","Visual identity, colour palette, typography and brand applications.")}</p></Link>
            </div>
            <div className="mt-10 text-center"><Link href="/projectos" className="secondary-button group">{tr("Explorar as demonstrações","Explore the demos")} <Arrow /></Link></div>
            <p className="mt-8 text-[10px] tracking-wide text-white/35">{tr("* Estudos de conceito com dados fictícios. Não representam trabalhos realizados para clientes.","* Concept studies using fictional data. They are not client projects.")}</p>
          </div>
        </section>

        <section className="cta-stage relative overflow-hidden border-y border-[#d6b56d]/20 py-24 sm:py-32"><div className="cta-glow" /><div className="container-shell relative text-center"><SectionLabel>{tr("O próximo capítulo","The next chapter")}</SectionLabel><p className="section-overline mt-8">{tr("A SUA PRÓXIMA IDEIA MERECE MAIS.","YOUR NEXT IDEA DESERVES MORE.")}</p><h2 className="mx-auto mt-5 max-w-[900px] text-[clamp(2.9rem,6.5vw,6rem)] font-medium leading-[.94] tracking-[-.07em]">{tr("Vamos transformar visão em ","Let’s turn vision into ")}<span className="gold-text">{tr("movimento.","momentum.")}</span></h2><a href="#contacto" className="primary-button group mt-11">{tr("Fale sobre o seu projecto","Tell us about your project")} <Arrow /></a></div></section>

        <section id="contacto" className="section-space contact-section"><div className="container-shell grid gap-12 lg:grid-cols-[1fr_.8fr]"><div><SectionLabel>04 / {tr("Contacto","Contact")}</SectionLabel><p className="section-overline mt-8">{tr("TUDO COMEÇA COM UMA CONVERSA.","EVERYTHING STARTS WITH A CONVERSATION.")}</p><h2 className="section-heading mt-5">{tr("Tem uma ideia? ","Have an idea? ")}<span className="gold-text">Vamos dar-lhe {tr("vida.","to life.")}</span></h2><p className="mt-7 max-w-[430px] text-sm leading-7 text-white/50">{tr("Conte-nos o que pretende construir. Estamos prontos para ouvir, pensar e encontrar o caminho certo para o seu projecto.","Tell us what you want to build. We are ready to listen, think and find the right path for your project.")}</p></div><div className="contact-panel gold-border p-7 sm:p-10"><p className="text-[10px] tracking-[.2em] text-[#d6b56d]">{tr("NOVOS PROJECTOS","NEW PROJECTS")}</p><h3 className="mt-4 text-2xl tracking-[-.04em]">{tr("Vamos falar do seu projecto.","Let’s talk about your project.")}</h3><p className="mt-4 text-sm leading-7 text-white/50">{tr("Partilhe alguns detalhes. Analisaremos o seu pedido e entraremos em contacto para definir os próximos passos.","Share a few details. We will review your request and get in touch to discuss next steps.")}</p><div className="mt-8"><LeadForm /></div></div></div></section>
      </main>
      <footer className="border-t border-white/10 py-8"><div className="container-shell flex flex-col gap-6"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><a href="#inicio" className="text-xs font-semibold tracking-[.13em]">ONÉSIMO <span className="text-[#d6b56d]">DIGITAL.</span></a><p className="text-[10px] text-white/35">© {new Date().getFullYear()} Onésimo Digital. {tr("Todos os direitos reservados.","All rights reserved.")}</p><p className="text-[9px] tracking-[.15em] text-white/35">{tr("FEITO PARA O QUE VEM A SEGUIR.","BUILT FOR WHAT’S NEXT.")}</p></div><nav aria-label={tr("Ligações legais","Legal links")} className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/[0.07] pt-5 text-[10px] text-white/40"><Link href="/contactos" className="hover:text-[#d6b56d]">{tr("Contactos","Contact")}</Link><Link href="/privacidade" className="hover:text-[#d6b56d]">{tr("Política de Privacidade","Privacy Policy")}</Link><Link href="/termos" className="hover:text-[#d6b56d]">{tr("Termos de Utilização","Terms of Use")}</Link></nav></div></footer>
    </>
  );
}
