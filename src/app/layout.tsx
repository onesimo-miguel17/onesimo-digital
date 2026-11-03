import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/google-analytics";

const siteUrl = "https://onesimo-digital.vercel.app";
const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Onésimo Digital — Estratégia, design e tecnologia em Luanda",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Onésimo Digital | Estúdio de Tecnologia Digital em Luanda",
    template: "%s | Onésimo Digital",
  },
  description:
    "Estúdio independente de tecnologia digital em Luanda. Estratégia, design, desenvolvimento web e soluções digitais para negócios.",
  applicationName: "Onésimo Digital",
  keywords: [
    "Onésimo Digital",
    "estúdio digital Luanda",
    "desenvolvimento web Angola",
    "websites empresariais",
    "identidade visual",
    "SEO",
    "soluções tecnológicas",
  ],
  verification: {
    google: "DOkvxvV3K3sjWLlUFbjS6NrCxGbeOszO-ynuoGYhGVw",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Onésimo Digital | Estúdio de Tecnologia Digital em Luanda",
    description:
      "Estratégia, design e tecnologia para transformar desafios de negócio em soluções digitais úteis.",
    url: siteUrl,
    siteName: "Onésimo Digital",
    type: "website",
    locale: "pt_AO",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onésimo Digital | Estúdio de Tecnologia Digital em Luanda",
    description:
      "Estratégia, design e tecnologia para negócios que querem avançar.",
    images: ["/twitter-image"],
  },
};
export const viewport: Viewport = { themeColor: "#080808", colorScheme: "dark" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-AO" data-scroll-behavior="smooth">
      <body>
        <LanguageProvider>
          {children}
          <GoogleAnalytics />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
