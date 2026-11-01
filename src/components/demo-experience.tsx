"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type DemoSlug = "form" | "nexus" | "cliniq" | "aura";

const products = [
  { id: 1, name: "Studio Headphones", category: "Áudio", price: 89500, color: "product-sand", label: "ESSENTIAL 01" },
  { id: 2, name: "Minimal Watch", category: "Acessórios", price: 124900, color: "product-stone", label: "OBJECT 02" },
  { id: 3, name: "Everyday Pack", category: "Acessórios", price: 68900, color: "product-olive", label: "CARRY 03" },
  { id: 4, name: "Wireless Speaker", category: "Áudio", price: 112500, color: "product-copper", label: "SOUND 04" },
];

const money = (value: number) => new Intl.NumberFormat("pt-AO", { style: "currency", currency: "AOA", maximumFractionDigits: 0 }).format(value);

const projectInfo: Record<DemoSlug, { number: string; name: string; category: string; intro: string; stack: string }> = {
  form: { number: "01", name: "FORM.", category: "DIGITAL COMMERCE", intro: "Uma loja digital onde cada detalhe reduz a distância entre descoberta e compra.", stack: "Next.js · React · TypeScript · UX/UI" },
  nexus: { number: "02", name: "NEXUS", category: "BUSINESS INTELLIGENCE", intro: "Uma visão clara da operação para decisões mais rápidas e fundamentadas.", stack: "React · Data visualisation · Product design" },
  cliniq: { number: "03", name: "CLINIQ", category: "SMART BOOKING", intro: "Marcação simples, informação organizada e uma experiência mais humana.", stack: "Next.js · Interactive flows · UX" },
  aura: { number: "04", name: "AURA.", category: "BRAND EXPERIENCE", intro: "Uma identidade construída para ser reconhecida, sentida e lembrada.", stack: "Brand strategy · Visual identity · Digital design" },
};

export function DemoExperience({ slug }: { slug: DemoSlug }) {
  const info = projectInfo[slug];
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<number[]>([]);
  const [checkoutDone, setCheckoutDone] = useState(false);
  const [dashboardTab, setDashboardTab] = useState("Visão geral");
  const [specialty, setSpecialty] = useState("Clínica geral");
  const [professional, setProfessional] = useState("Dra. Ana Costa");
  const [day, setDay] = useState("2026-11-05");
  const [slot, setSlot] = useState("10:30");
  const [bookingDone, setBookingDone] = useState(false);
  const [brandTab, setBrandTab] = useState("Identidade");

  const filteredProducts = useMemo(() => products.filter((product) => (category === "Todos" || product.category === category) && product.name.toLowerCase().includes(search.toLowerCase())), [category, search]);
  const cartTotal = cart.reduce((sum, id) => sum + (products.find((product) => product.id === id)?.price ?? 0), 0);

  return (
    <div className="demo-shell">
      <div className="demo-topline"><span>ONÉSIMO DIGITAL / CONCEPT LAB</span><span>DEMONSTRAÇÃO INTERACTIVA · {info.number} / 04</span></div>
      <header className="demo-project-header"><Link href="/projectos" className="demo-back">← TODOS OS PROJECTOS</Link><span className="demo-project-mark">{info.name}</span><span className="demo-project-category">{info.category}</span></header>
      <section className="demo-project-intro"><p className="section-overline">CONCEPT STUDY / {info.number}</p><h1>{info.name}</h1><p>{info.intro}</p><span>{info.stack}</span></section>

      {slug === "form" && (
        <section className="demo-app demo-store">
          <div className="store-nav"><span className="store-brand">FORM<span>.</span></span><span className="store-nav-note">OBJECTS FOR EVERY DAY</span><button className="store-cart" type="button" onClick={() => setCheckoutDone(false)}>SACO ({cart.length}) · {money(cartTotal)}</button></div>
          <div className="store-hero"><div><p>CURATED OBJECTS / 2026</p><h2>Menos ruído.<br /><i>Mais intenção.</i></h2><span>Uma selecção de objectos para viver, criar e trabalhar melhor.</span></div><div className="store-hero-shape" aria-hidden="true"><span>F.</span></div></div>
          <div className="store-toolbar"><div><p>SELECÇÃO ACTUAL</p><h3>Peças em destaque</h3></div><div className="store-controls"><input aria-label="Pesquisar produtos" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Pesquisar..." /><div className="store-filters">{["Todos", "Áudio", "Acessórios"].map((item) => <button type="button" key={item} onClick={() => setCategory(item)} className={category === item ? "active" : ""}>{item}</button>)}</div></div></div>
          <div className="store-products">{filteredProducts.map((product) => <article className="store-product" key={product.id}><div className={`store-product-art ${product.color}`}><span>{product.label}</span><div className="store-object" /><small>FORM / OBJECTS</small></div><div className="flex items-start justify-between gap-3"><div><h4>{product.name}</h4><p>{product.category}</p></div><strong>{money(product.price)}</strong></div><button type="button" onClick={() => { setCart((current) => [...current, product.id]); setCheckoutDone(false); }}>ADICIONAR AO SACO +</button></article>)}</div>
          <div className="store-checkout"><div><span>RESUMO DO SACO</span><h3>{cart.length} {cart.length === 1 ? "artigo seleccionado" : "artigos seleccionados"}</h3><p>Checkout demonstrativo. Não será efectuado qualquer pagamento.</p></div><div className="store-checkout-action"><strong>{money(cartTotal)}</strong><button type="button" disabled={!cart.length} onClick={() => setCheckoutDone(true)}>SIMULAR CHECKOUT ↗</button></div></div>
          {checkoutDone && <p className="demo-feedback" role="status">Demonstração concluída. O fluxo de checkout está a funcionar; nenhum pagamento foi realizado.</p>}
        </section>
      )}

      {slug === "nexus" && (
        <section className="demo-app nexus-app">
          <aside className="nexus-sidebar"><span className="nexus-logo">N<span>.</span></span><p>WORKSPACE</p>{["Visão geral", "Vendas", "Clientes", "Relatórios"].map((tab) => <button type="button" key={tab} onClick={() => setDashboardTab(tab)} className={dashboardTab === tab ? "active" : ""}>{tab}</button>)}<div className="nexus-side-foot">DEMO ACCOUNT<br />NEXUS / 001</div></aside>
          <div className="nexus-main"><div className="nexus-heading"><div><p>QUINTA-FEIRA, 05 NOVEMBRO 2026</p><h2>{dashboardTab}</h2></div><span>● DADOS DE DEMONSTRAÇÃO</span></div>
            <div className="nexus-kpis">{[{ label: "Receita total", value: "AOA 8,42M", change: "+12,8%" }, { label: "Encomendas", value: "1.284", change: "+8,2%" }, { label: "Clientes activos", value: "846", change: "+5,4%" }, { label: "Ticket médio", value: "AOA 65,6K", change: "+3,1%" }].map((item) => <article key={item.label}><p>{item.label}</p><strong>{item.value}</strong><span>↗ {item.change}</span></article>)}</div>
            <div className="nexus-panels"><article className="nexus-chart"><div><h3>{dashboardTab === "Vendas" ? "Evolução das vendas" : dashboardTab === "Clientes" ? "Crescimento de clientes" : dashboardTab === "Relatórios" ? "Desempenho mensal" : "Desempenho da receita"}</h3><span>ÚLTIMOS 7 MESES</span></div><div className="nexus-bars">{[42, 58, 47, 74, 62, 88, 96].map((height, index) => <div key={index}><span style={{ height: `${height}%` }} /><small>{["MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV"][index]}</small></div>)}</div></article><article className="nexus-activity"><h3>Actividade recente</h3>{[["Nova encomenda", "Pedido #OD-2048", "há 8 min"], ["Novo cliente", "Mário Fernandes", "há 32 min"], ["Pagamento recebido", "AOA 245.000", "há 1 h"], ["Relatório actualizado", "Resumo semanal", "há 3 h"]].map((item) => <div key={item[0]}><span className="nexus-activity-dot" /><div><b>{item[0]}</b><small>{item[1]}</small></div><time>{item[2]}</time></div>)}</article></div>
            <p className="nexus-disclaimer">Valores e actividade inteiramente fictícios, apresentados apenas para demonstração.</p>
          </div>
        </section>
      )}

      {slug === "cliniq" && (
        <section className="demo-app cliniq-app"><div className="cliniq-brand"><span>cliniq<span>.</span></span><small>CUIDAR COMEÇA COM UM PASSO.</small></div><div className="cliniq-layout"><div className="cliniq-copy"><p>MARCAÇÃO ONLINE / 01</p><h2>A sua saúde,<br /><i>no seu tempo.</i></h2><span>Escolha a especialidade, o profissional e o horário que melhor se adapta a si.</span><div className="cliniq-trust"><b>+12</b><small>ESPECIALIDADES</small><b>+08</b><small>PROFISSIONAIS</small></div></div><form className="cliniq-form" onSubmit={(event) => { event.preventDefault(); setBookingDone(true); }}><p>MARCAR CONSULTA</p><h3>Vamos encontrar o seu horário.</h3><label>Especialidade<select value={specialty} onChange={(event) => { setSpecialty(event.target.value); setBookingDone(false); }}><option>Clínica geral</option><option>Cardiologia</option><option>Dermatologia</option><option>Pediatria</option></select></label><label>Profissional<select value={professional} onChange={(event) => { setProfessional(event.target.value); setBookingDone(false); }}><option>Dra. Ana Costa</option><option>Dr. Paulo Mendes</option><option>Dra. Sofia Manuel</option></select></label><label>Data<input type="date" value={day} min="2026-11-01" onChange={(event) => { setDay(event.target.value); setBookingDone(false); }} /></label><label>Horário<select value={slot} onChange={(event) => { setSlot(event.target.value); setBookingDone(false); }}><option>09:00</option><option>10:30</option><option>11:45</option><option>14:00</option><option>15:30</option></select></label><button type="submit">CONFIRMAR MARCAÇÃO ↗</button>{bookingDone && <p className="demo-feedback" role="status">Pedido de demonstração registado: {specialty}, {professional}, {day} às {slot}. Não foi criada uma consulta real.</p>}<small>Protótipo demonstrativo. Não recolhe nem transmite dados de saúde.</small></form></div></section>
      )}

      {slug === "aura" && (
        <section className="demo-app aura-app"><div className="aura-brand-nav"><span>AURA<span>.</span></span><span>OBJECTS / FORM / FEELING</span><span>EST. 2026</span></div><div className="aura-hero"><p>IDENTITY IS AN EXPERIENCE</p><h2>Quietly<br /><i>unforgettable.</i></h2><span>Uma identidade contemporânea para marcas que encontram força na simplicidade.</span><div className="aura-orb" /></div><div className="aura-workbench"><div className="aura-tabs">{["Identidade", "Paleta", "Tipografia", "Aplicações"].map((tab) => <button type="button" key={tab} onClick={() => setBrandTab(tab)} className={brandTab === tab ? "active" : ""}>{tab}</button>)}</div><div className="aura-workbench-content">{brandTab === "Identidade" && <><p>01 / BRAND MARK</p><strong>AURA<span>.</span></strong><small>Uma assinatura visual minimalista, desenhada para transmitir clareza e presença.</small></>}{brandTab === "Paleta" && <><p>02 / COLOUR SYSTEM</p><div className="aura-swatches">{[["#171714", "CARBON"], ["#e7dfd0", "BONE"], ["#b5a58a", "SAND"], ["#8d927d", "SAGE"]].map((item) => <div key={item[1]}><span style={{ background: item[0] }} /><small>{item[1]}<br />{item[0]}</small></div>)}</div></>}{brandTab === "Tipografia" && <><p>03 / TYPOGRAPHY</p><strong className="aura-type-sample">Aa Bb 0123</strong><small>Contraste editorial entre uma serif expressiva e uma sans-serif funcional.</small></>}{brandTab === "Aplicações" && <><p>04 / BRAND IN USE</p><div className="aura-applications"><span>AURA. / STUDIO</span><span>THE ART OF LESS</span><span>2026 — COLLECTION 01</span></div></>}</div></div></section>
      )}

      <section className="demo-notes"><div><p>O QUE ESTA DEMONSTRAÇÃO MOSTRA</p><h2>Ideia clara. Execução cuidada.</h2></div><div><p>Esta experiência é um estudo de conceito criado pela Onésimo Digital para demonstrar abordagem, design e possibilidades de implementação. Os dados são fictícios e as interacções não executam operações comerciais reais.</p><span>TECNOLOGIA COM INTENÇÃO / ONÉSIMO DIGITAL</span></div></section>
      <footer className="demo-footer"><Link href="/projectos">← EXPLORAR OUTROS PROJECTOS</Link><Link href="/#contacto">TEM UM PROJECTO SEMELHANTE? FALE CONNOSCO ↗</Link></footer>
    </div>
  );
}
