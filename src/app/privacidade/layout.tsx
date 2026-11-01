import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Informação sobre os dados tratados através do website da Onésimo Digital.",
};

export default function PrivacyLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
