import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Utilização",
  description: "Condições gerais de utilização do website Onésimo Digital.",
};

export default function TermsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
