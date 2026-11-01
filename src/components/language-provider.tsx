"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "pt" | "en";

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem("od-language");
    if (saved === "pt" || saved === "en") setLanguageState(saved);
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    window.localStorage.setItem("od-language", next);
    document.documentElement.lang = next === "pt" ? "pt-AO" : "en";
  };

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-AO" : "en";
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
