import type { Metadata } from "next";

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Onésimo Digital — Serviços de tecnologia digital",
};

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
    siteName: "Onésimo Digital",
    type: "website",
    locale: "pt_AO",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serviços de Desenvolvimento Web, Design e Tecnologia | Onésimo Digital",
    description:
      "Websites, identidade de marca, soluções tecnológicas e crescimento digital para negócios em Luanda.",
    images: ["/twitter-image"],
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
