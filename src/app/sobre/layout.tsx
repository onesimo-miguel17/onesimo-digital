import type { Metadata } from "next";

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Onésimo Digital — Sobre o estúdio",
};

export const metadata: Metadata = {
  title: "Sobre o Estúdio",
  description:
    "Conheça a visão, os princípios e o modelo de trabalho da Onésimo Digital, um estúdio independente de tecnologia e criatividade em Luanda.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre | Onésimo Digital",
    description:
      "Estratégia, design e engenharia digital com uma estrutura flexível e responsável.",
    url: "/sobre",
    siteName: "Onésimo Digital",
    type: "website",
    locale: "pt_AO",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre o Estúdio | Onésimo Digital",
    description:
      "Conheça a visão, os princípios e o modelo de trabalho do estúdio Onésimo Digital, em Luanda.",
    images: ["/twitter-image"],
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
