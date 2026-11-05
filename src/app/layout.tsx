import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/google-analytics";

import { siteUrl } from "@/lib/site-url";
const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Onésimo Digital — Estratégia, design e tecnologia em Luanda",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Onésimo Digital | Websites, Branding e Soluções Digitais",
    template: "%s | Onésimo Digital",
  },
  description:
    "Criamos websites empresariais, lojas online, identidades visuais, plataformas de gestão e automações para negócios. Estratégia, design e tecnologia com base em Luanda.",
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
    title: "Onésimo Digital | Websites, Branding e Soluções Digitais",
    description:
      "Websites, lojas online, branding e software à medida para negócios. Conheça os serviços da Onésimo Digital.",
    url: siteUrl,
    siteName: "Onésimo Digital",
    type: "website",
    locale: "pt_AO",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onésimo Digital | Websites, Branding e Soluções Digitais",
    description:
      "Websites, e-commerce, identidade visual, plataformas empresariais e automação.",
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
