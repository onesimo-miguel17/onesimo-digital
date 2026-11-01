import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre o Estúdio",
  description: "Conheça a visão, os princípios e o modelo de trabalho da Onésimo Digital.",
};

export default function AboutLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
