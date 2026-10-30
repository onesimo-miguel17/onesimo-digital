import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Onésimo Digital — Premium Digital Technology Studio", template: "%s | Onésimo Digital" },
  description: "Transformamos visão em experiências digitais extraordinárias. Estratégia, design e tecnologia para marcas que querem evoluir.",
  applicationName: "Onésimo Digital",
  keywords: ["Onésimo Digital", "Agência digital Angola", "Desenvolvimento web", "Branding", "Tecnologia"],
  openGraph: {
    title: "Onésimo Digital — Digital, elevado.",
    description: "Estratégia, design e tecnologia para construir o próximo capítulo da sua marca.",
    type: "website", locale: "pt_AO",
  },
};
export const viewport: Viewport = { themeColor: "#080808", colorScheme: "dark" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-AO"><body>{children}</body></html>;
}
