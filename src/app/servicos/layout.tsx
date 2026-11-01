import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Conheça as áreas de actuação da Onésimo Digital: experiências digitais, identidade de marca, tecnologia empresarial e crescimento digital.",
};

export default function ServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
