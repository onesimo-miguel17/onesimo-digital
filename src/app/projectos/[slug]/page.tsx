import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { DemoExperience } from "@/components/demo-experience";

const slugs = ["form", "nexus", "cliniq", "aura"] as const;
type Slug = (typeof slugs)[number];

const projectMetadata: Record<Slug, { title: string; description: string }> = {
  form: {
    title: "Compra Certa — Demonstração de Comércio Digital",
    description:
      "Explore uma demonstração conceptual de comércio digital com catálogo, pesquisa, filtros e carrinho. Produtos e dados apresentados são ilustrativos.",
  },
  nexus: {
    title: "Meu Negócio — Demonstração de Gestão Empresarial",
    description:
      "Explore uma demonstração conceptual de gestão empresarial com indicadores, clientes, vendas e actividade. Todos os dados são fictícios.",
  },
  cliniq: {
    title: "Marque Já — Demonstração de Marcações Online",
    description:
      "Explore uma demonstração ilustrativa de marcações online com serviços, profissionais e horários. Não constitui um sistema clínico ou de reservas em produção.",
  },
  aura: {
    title: "Minha Marca — Demonstração de Identidade Visual",
    description:
      "Explore um conceito demonstrativo de identidade visual, incluindo cores, tipografia e aplicações de marca.",
  },
};

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!slugs.includes(slug as Slug)) {
    return {
      title: "Projecto não encontrado | Onésimo Digital",
      description: "A demonstração solicitada não existe.",
      robots: { index: false, follow: false },
      alternates: {},
      openGraph: {
        title: "Projecto não encontrado | Onésimo Digital",
        description: "A demonstração solicitada não existe.",
      },
    };
  }

  const project = projectMetadata[slug as Slug];
  const canonical = `/projectos/${slug}`;
  const socialImage = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${project.title} | Onésimo Digital`,
  };

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      title: `${project.title} | Onésimo Digital`,
      description: project.description,
      url: canonical,
      siteName: "Onésimo Digital",
      type: "website",
      locale: "pt_AO",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Onésimo Digital`,
      description: project.description,
      images: ["/twitter-image"],
    },
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
