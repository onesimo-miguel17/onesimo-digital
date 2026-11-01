import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contactos",
  description: "Fale com a Onésimo Digital sobre o seu próximo projecto.",
};

export default function ContactLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
