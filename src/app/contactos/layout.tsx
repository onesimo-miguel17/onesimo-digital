import type { Metadata } from "next";

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Onésimo Digital — Contactos e pedidos de projecto",
};

export const metadata: Metadata = {
  title: "Contactos e Pedidos de Projecto",
  description:
    "Fale com a Onésimo Digital sobre websites, identidade de marca, tecnologia empresarial ou crescimento digital. Base em Luanda, Angola.",
  alternates: { canonical: "/contactos" },
  openGraph: {
    title: "Contactos | Onésimo Digital",
    description:
      "Partilhe o contexto e os objectivos do seu projecto para analisarmos os próximos passos.",
    url: "/contactos",
    siteName: "Onésimo Digital",
    type: "website",
    locale: "pt_AO",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactos e Pedidos de Projecto | Onésimo Digital",
    description:
      "Fale com a Onésimo Digital sobre o seu próximo projecto digital em Luanda ou noutro mercado.",
    images: ["/twitter-image"],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
