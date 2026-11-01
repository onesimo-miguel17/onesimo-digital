import type { Metadata } from "next";

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
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
