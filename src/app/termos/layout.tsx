import type { Metadata } from "next";

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Onésimo Digital — Termos de Utilização",
};

export const metadata: Metadata = {
  title: "Termos de Utilização",
  description:
    "Consulte as condições de utilização do website, das demonstrações e dos conteúdos da Onésimo Digital.",
  alternates: { canonical: "/termos" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Termos de Utilização | Onésimo Digital",
    description:
      "Conheça as condições aplicáveis à utilização do website, das demonstrações e dos conteúdos da Onésimo Digital.",
    url: "/termos",
    siteName: "Onésimo Digital",
    type: "website",
    locale: "pt_AO",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Termos de Utilização | Onésimo Digital",
    description:
      "Condições de utilização do website, das demonstrações e dos conteúdos da Onésimo Digital.",
    images: ["/twitter-image"],
  },
};

export default function TermsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
