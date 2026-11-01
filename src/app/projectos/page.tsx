import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SectionLabel } from "@/components/section-label";

const demos = [
  { number: "01", slug: "form", name: "FORM.", category: "DIGITAL COMMERCE", description: "Uma experiência de comércio electrónico com catálogo, pesquisa, filtros e carrinho interactivo.", outcome: "Explorar uma loja digital", tags: ["E-commerce", "UX/UI", "React"], visual: "demo-form" },
  { number: "02", slug: "nexus", name: "NEXUS", category: "BUSINESS INTELLIGENCE", description: "Um centro de comando empresarial para acompanhar vendas, clientes, desempenho e operações.", outcome: "Explorar um dashboard", tags: ["Dashboards", "Analytics", "Data"], visual: "demo-nexus" },
  { number: "03", slug: "cliniq", name: "CLINIQ", category: "SMART BOOKING", description: "Uma experiência de marcação digital com especialidades, profissionais e horários disponíveis.", outcome: "Experimentar uma marcação", tags: ["Booking", "Automação", "UX"], visual: "demo-cliniq" },
  { number: "04", slug: "aura", name: "AURA.", category: "BRAND EXPERIENCE", description: "Um universo de marca que combina estratégia, identidade visual e experiência digital.", outcome: "Explorar identidade", tags: ["Branding", "Direcção de arte", "Web"], visual: "demo-aura" },
];

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] pt-[78px]">
        <section className="demo-index-hero relative overflow-hidden border-b border-white/[0.07] py-24 sm:py-32">
          <div className="container-shell relative z-10">
            <SectionLabel>ONÉSIMO DIGITAL / LAB</SectionLabel>
            <p className="section-overline mt-10">CONCEITOS. EXPERIÊNCIAS. POSSIBILIDADES.</p>
            <h1 className="mt-5 max-w-[900px] text-[clamp(3.4rem,8vw,7.5rem)] font-medium leading-[.9] tracking-[-.085em]">Não mostramos apenas ideias. <span className="gold-text">Pomos-nas a funcionar.</span></h1>
            <p className="mt-8 max-w-[610px] text-sm leading-8 text-white/55 sm:text-base">Bem-vindo ao nosso laboratório de demonstrações. Explore protótipos interactivos que mostram como estratégia, design e engenharia se transformam em experiências digitais.</p>
            <div className="mt-10 flex flex-wrap gap-3 text-[9px] font-bold tracking-[.16em] text-white/45"><span className="border border-white/10 px-4 py-3">04 CONCEITOS</span><span className="border border-white/10 px-4 py-3">100% INTERACTIVOS</span><span className="border border-white/10 px-4 py-3">DEMONSTRAÇÕES</span></div>
          </div>
          <div className="demo-index-orbit" aria-hidden="true" />
        </section>
        <section className="section-space">
          <div className="container-shell">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><SectionLabel>01 / Projectos demonstrativos</SectionLabel><h2 className="section-heading mt-5">Escolha uma experiência.</h2></div><p className="max-w-[330px] text-sm leading-7 text-white/45">Cada demonstração utiliza dados fictícios e funciona de forma independente. Nenhuma operação real é efectuada.</p></div>
            <div className="grid gap-7 md:grid-cols-2">
              {demos.map((demo) => (
                <Link key={demo.slug} href={`/projectos/${demo.slug}`} className="demo-index-card group block">
                  <div className={`demo-index-art ${demo.visual}`}><span className="demo-art-number">{demo.number} / 04</span><span className="demo-art-wordmark">{demo.name}</span><span className="demo-art-caption">ONÉSIMO DIGITAL — CONCEPT LAB</span><span className="demo-art-open">↗</span></div>
                  <div className="flex flex-col justify-between gap-5 p-6 sm:flex-row sm:items-start sm:p-8"><div><p className="text-[9px] font-bold tracking-[.2em] text-[#d6b56d]">{demo.category}</p><h3 className="mt-3 text-2xl tracking-[-.04em]">{demo.name}</h3><p className="mt-3 max-w-[440px] text-sm leading-7 text-white/50">{demo.description}</p><div className="mt-5 flex flex-wrap gap-2">{demo.tags.map((tag) => <span key={tag} className="demo-tag">{tag}</span>)}</div></div><span className="shrink-0 text-[10px] font-bold tracking-[.12em] text-[#e7ca8a]">{demo.outcome} ↗</span></div>
                </Link>
              ))}
            </div>
            <p className="mt-12 border-t border-white/10 pt-6 text-[10px] leading-6 text-white/35">NOTA: Estes projectos são estudos de conceito desenvolvidos para demonstrar capacidades técnicas e criativas da Onésimo Digital. Não representam clientes, encomendas ou resultados comerciais reais.</p>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 py-8"><div className="container-shell flex flex-col justify-between gap-4 sm:flex-row"><Link href="/" className="text-xs font-semibold tracking-[.13em]">ONÉSIMO <span className="text-[#d6b56d]">DIGITAL.</span></Link><p className="text-[10px] text-white/35">© {new Date().getFullYear()} Onésimo Digital. Concept Lab.</p></div></footer>
    </>
  );
}
