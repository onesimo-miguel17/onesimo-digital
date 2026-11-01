"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";
import { useLanguage } from "@/components/language-provider";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const en = language === "en";
  const tr = (pt: string, english: string) => en ? english : pt;
  const demos = [
    { number: "01", slug: "form", name: tr("Compra Certa","Compra Certa"), category: tr("COMÉRCIO DIGITAL","ONLINE STORE"), description: tr("Uma loja online com catálogo, pesquisa, filtros e carrinho de compras.","An online shop with a product catalogue, search, filters and shopping cart."), outcome: tr("Explorar a loja","Explore the store"), tags: ["Comércio electrónico", "UX/UI", "React"], visual: "demo-form" },
    { number: "02", slug: "nexus", name: tr("Meu Negócio","Meu Negócio"), category: tr("GESTÃO EMPRESARIAL","BUSINESS MANAGEMENT"), description: tr("Uma plataforma para acompanhar vendas, clientes, desempenho e actividade do negócio.","A platform to track sales, customers, performance and business activity."), outcome: tr("Explorar a plataforma","Explore the platform"), tags: [tr("Gestão","Management"), "Indicadores", "Dados"], visual: "demo-nexus" },
    { number: "03", slug: "cliniq", name: tr("Marque Já","Marque Já"), category: tr("MARCAÇÕES ONLINE","ONLINE APPOINTMENTS"), description: tr("Uma experiência de marcação com especialidades, profissionais e horários disponíveis.","An appointment booking experience with specialities, professionals and available times."), outcome: tr("Marcar uma consulta","Book an appointment"), tags: [tr("Marcações","Bookings"), "Automação", "UX"], visual: "demo-cliniq" },
    { number: "04", slug: "aura", name: tr("Minha Marca","Minha Marca"), category: tr("IDENTIDADE DE MARCA","BRAND IDENTITY"), description: tr("Um espaço para explorar identidade visual, cores, tipografia e aplicações de marca.","A space to explore visual identity, colours, typography and brand applications."), outcome: tr("Explorar identidade","Explore the identity"), tags: ["Identidade visual", "Direcção de arte", "Web"], visual: "demo-aura" },
  ];
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] pt-[78px]">
        <section className="demo-index-hero relative overflow-hidden border-b border-white/[0.07] py-24 sm:py-32">
          <div className="container-shell relative z-10">
            <SectionLabel>{tr("ONÉSIMO DIGITAL / DEMONSTRAÇÕES","ONÉSIMO DIGITAL / PRODUCT DEMOS")}</SectionLabel>
            <p className="section-overline mt-10">{tr("CONCEITOS. EXPERIÊNCIAS. POSSIBILIDADES.","CONCEPTS. EXPERIENCES. POSSIBILITIES.")}</p>
            <h1 className="mt-5 max-w-[900px] text-[clamp(3.4rem,8vw,7.5rem)] font-medium leading-[.9] tracking-[-.085em]">{tr("Não mostramos apenas ideias.","We do more than show ideas.")} <span className="gold-text">{tr("Pomos-nas a funcionar.","We make them work.")}</span></h1>
            <p className="mt-8 max-w-[610px] text-sm leading-8 text-white/55 sm:text-base">{tr("Explore demonstrações interactivas que mostram como estratégia, design e engenharia se transformam em experiências digitais úteis.","Explore interactive demos showing how strategy, design and engineering become useful digital experiences.")}</p>
            <div className="mt-10 flex flex-wrap gap-3 text-[9px] font-bold tracking-[.16em] text-white/45"><span className="border border-white/10 px-4 py-3">04 {tr("PROJECTOS","PROJECTS")}</span><span className="border border-white/10 px-4 py-3">{tr("INTERACTIVOS","INTERACTIVE")}</span><span className="border border-white/10 px-4 py-3">{tr("DEMONSTRAÇÕES","DEMOS")}</span></div>
          </div>
          <div className="demo-index-orbit" aria-hidden="true" />
        </section>
        <section className="section-space">
          <div className="container-shell">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><SectionLabel>01 / {tr("PROJECTOS DEMONSTRATIVOS","CONCEPT PROJECTS")}</SectionLabel><h2 className="section-heading mt-5">{tr("Escolha uma experiência.","Choose an experience.")}</h2></div><p className="max-w-[330px] text-sm leading-7 text-white/45">{tr("Cada demonstração utiliza dados fictícios e funciona de forma independente. Nenhuma operação real é efectuada.","Each demo uses fictional data and works independently. No real-world operation is performed.")}</p></div>
            <div className="grid gap-7 md:grid-cols-2">
              {demos.map((demo) => (
                <Link key={demo.slug} href={`/projectos/${demo.slug}`} className="demo-index-card group block">
                  <div className={`demo-index-art ${demo.visual}`}><span className="demo-art-number">{demo.number} / 04</span><span className="demo-art-wordmark">{demo.name}</span><span className="demo-art-caption">ONÉSIMO DIGITAL — {tr("DEMONSTRAÇÃO","PRODUCT DEMO")}</span><span className="demo-art-open">↗</span></div>
                  <div className="flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-start sm:p-8"><div><p className="text-[9px] font-bold tracking-[.2em] text-[#d6b56d]">{demo.category}</p><h3 className="mt-3 text-2xl tracking-[-.04em]">{demo.name}</h3><p className="mt-3 max-w-[440px] text-sm leading-7 text-white/50">{demo.description}</p><div className="mt-5 flex flex-wrap gap-2">{demo.tags.map((tag) => <span key={tag} className="demo-tag">{tag}</span>)}</div></div><span className="shrink-0 text-[10px] font-bold tracking-[.12em] text-[#e7ca8a]">{demo.outcome} ↗</span></div>
                </Link>
              ))}
            </div>
            <p className="mt-12 border-t border-white/10 pt-6 text-[10px] leading-6 text-white/35">{tr("NOTA: Estes projectos são estudos de conceito desenvolvidos pela Onésimo Digital. Não representam clientes, encomendas ou resultados comerciais reais.","NOTE: These projects are concept studies developed by Onésimo Digital. They do not represent real clients, commissioned work or commercial results.")}</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-8"><div className="container-shell flex flex-col justify-between gap-4 sm:flex-row"><Link href="/" className="text-xs font-semibold tracking-[.13em]">ONÉSIMO <span className="text-[#d6b56d]">DIGITAL.</span></Link><p className="text-[10px] text-white/35">© {new Date().getFullYear()} Onésimo Digital. {tr("Demonstrações de produto.","Product demos.")}</p></div></footer>
    </>
  );
}
