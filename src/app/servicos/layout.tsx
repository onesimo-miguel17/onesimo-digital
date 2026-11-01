import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de Desenvolvimento Web, Design e Tecnologia",
  description:
    "Conheça os serviços da Onésimo Digital: websites e plataformas, identidade de marca, tecnologia empresarial e crescimento digital em Luanda.",
  alternates: { canonical: "/servicos" },
  openGraph: {
    title: "Serviços | Onésimo Digital",
    description:
      "Websites, identidade de marca, soluções tecnológicas e crescimento digital para negócios.",
    url: "/servicos",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
