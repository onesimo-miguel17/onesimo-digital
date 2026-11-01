import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Utilização",
  description:
    "Consulte as condições de utilização do website, das demonstrações e dos conteúdos da Onésimo Digital.",
  alternates: { canonical: "/termos" },
  robots: { index: true, follow: true },
};

export default function TermsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
