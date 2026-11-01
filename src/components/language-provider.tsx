"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

export type Language = "pt" | "en";

const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void } | null>(null);

function subscribe(onStoreChange: () => void) {
  window.addEventListener("od-language-change", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("od-language-change", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot(): Language {
  return window.localStorage.getItem("od-language") === "en" ? "en" : "pt";
}

function getServerSnapshot(): Language {
  return "pt";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLanguage = useCallback((next: Language) => {
    window.localStorage.setItem("od-language", next);
    window.dispatchEvent(new Event("od-language-change"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-AO" : "en";
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
