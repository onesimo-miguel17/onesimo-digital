import type { Metadata } from "next";

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Onésimo Digital — Demonstrações e projectos digitais",
};

export const metadata: Metadata = {
  title: "Demonstrações e Projectos Digitais",
  description:
    "Explore demonstrações de comércio digital, gestão empresarial, marcações online e identidade de marca desenvolvidas como conceitos pela Onésimo Digital.",
  alternates: { canonical: "/projectos" },
  openGraph: {
    title: "Demonstrações Digitais | Onésimo Digital",
    description:
      "Experiências demonstrativas de produtos digitais, com dados fictícios e funcionalidades ilustrativas.",
    url: "/projectos",
    siteName: "Onésimo Digital",
    type: "website",
    locale: "pt_AO",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Demonstrações e Projectos Digitais | Onésimo Digital",
    description:
      "Explore conceitos demonstrativos de comércio digital, gestão empresarial, marcações online e identidade visual.",
    images: ["/twitter-image"],
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
