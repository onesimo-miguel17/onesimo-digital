import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Onésimo Digital — Estúdio de Tecnologia Digital", template: "%s | Onésimo Digital" },
  description: "Estratégia, design e tecnologia para transformar ideias em soluções digitais úteis.",
  applicationName: "Onésimo Digital",
  keywords: ["Onésimo Digital", "Agência digital Angola", "Desenvolvimento web", "Identidade visual", "Tecnologia"],
  openGraph: {
    title: "Onésimo Digital — Tecnologia com propósito.",
    description: "Estratégia, design e tecnologia para construir o próximo capítulo da sua marca.",
    type: "website", locale: "pt_AO",
  },
};
export const viewport: Viewport = { themeColor: "#080808", colorScheme: "dark" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-AO"><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}
