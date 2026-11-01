import type { Metadata } from "next";

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
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
