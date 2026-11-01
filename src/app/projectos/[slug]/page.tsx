import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { DemoExperience } from "@/components/demo-experience";

const slugs = ["form", "nexus", "cliniq", "aura"] as const;
type Slug = (typeof slugs)[number];

const titles: Record<Slug, string> = {
  form: "FORM. — Digital Commerce Demo",
  nexus: "NEXUS — Business Intelligence Demo",
  cliniq: "CLINIQ — Smart Booking Demo",
  aura: "AURA. — Brand Experience Demo",
};

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!slugs.includes(slug as Slug)) return { title: "Projecto não encontrado | Onésimo Digital" };
  return {
    title: `${titles[slug as Slug]} | Onésimo Digital`,
    description: "Explore uma demonstração interactiva de conceito criada pela Onésimo Digital. Dados fictícios, experiência real de produto.",
  };
}

export default async function DemoProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slugs.includes(slug as Slug)) notFound();

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#080808] pt-[78px]">
        <DemoExperience slug={slug as Slug} />
      </main>
    </>
  );
}
