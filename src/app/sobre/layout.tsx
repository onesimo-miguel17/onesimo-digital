import type { Metadata } from "next";

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
  },
};

export default function AboutLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
