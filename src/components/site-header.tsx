"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Início", href: "/#inicio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Projectos", href: "/#projectos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-white/[0.07]">
      <div className="container-shell flex h-[78px] items-center justify-between">
        <Link href="/#inicio" aria-label="Onésimo Digital — início" className="brand-lockup group flex items-center gap-3">
          <span className="brand-mark flex h-10 w-10 items-center justify-center border border-[#d6b56d]/60 text-[15px] font-semibold tracking-[-.12em] text-[#e7ca8a]">OD<span className="text-[8px]">.</span></span>
          <span className="text-[13px] font-semibold tracking-[.12em] text-white">ONÉSIMO <span className="font-normal text-[#d6b56d]">DIGITAL</span></span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Navegação principal">
          {links.map((link) => <Link key={link.href} href={link.href} className="nav-link text-[11px] tracking-[.08em] text-white/65 transition hover:text-[#e5c987]">{link.label}</Link>)}
        </nav>
        <Link href="/#contacto" className="header-cta hidden border border-[#d6b56d]/70 px-5 py-3 text-[10px] font-bold tracking-[.14em] text-[#e7ca8a] transition md:inline-flex">INICIAR PROJECTO <span className="ml-3">↗</span></Link>
        <button type="button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] border border-white/15 md:hidden">
          <span className={"h-px w-4 bg-white transition " + (open ? "translate-y-[3px] rotate-45" : "")} />
          <span className={"h-px w-4 bg-white transition " + (open ? "-translate-y-[3px] -rotate-45" : "")} />
        </button>
      </div>
      {open && <nav className="border-t border-white/10 bg-[#0b0b0b] px-[18px] py-5 md:hidden" aria-label="Navegação móvel">
        {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/[0.06] py-4 text-sm text-white/75">{link.label}</Link>)}
        <Link href="/#contacto" onClick={() => setOpen(false)} className="mt-5 inline-flex text-xs font-bold tracking-widest text-[#d6b56d]">INICIAR PROJECTO ↗</Link>
      </nav>}
    </header>
  );
}
