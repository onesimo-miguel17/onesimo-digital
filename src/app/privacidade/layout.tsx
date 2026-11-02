import type { Metadata } from "next";

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Onésimo Digital — Política de Privacidade",
};

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Informação sobre os dados tratados através do website Onésimo Digital, finalidades, fornecedores e direitos dos utilizadores.",
  alternates: { canonical: "/privacidade" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Política de Privacidade | Onésimo Digital",
    description:
      "Consulte como o website Onésimo Digital trata dados, utiliza ferramentas de análise e respeita as escolhas de privacidade.",
    url: "/privacidade",
    siteName: "Onésimo Digital",
    type: "website",
    locale: "pt_AO",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidade | Onésimo Digital",
    description:
      "Informação sobre privacidade, tratamento de dados e escolhas dos utilizadores no website Onésimo Digital.",
    images: ["/twitter-image"],
  },
};

export default function PrivacyLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
