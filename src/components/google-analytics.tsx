"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useLanguage } from "@/components/language-provider";

type AnalyticsConsent = "unknown" | "granted" | "denied";
type AnalyticsParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const CONSENT_KEY = "od-analytics-consent";
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener("od-analytics-consent-change", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("od-analytics-consent-change", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getConsentSnapshot(): AnalyticsConsent {
  const saved = window.localStorage.getItem(CONSENT_KEY);
  return saved === "granted" || saved === "denied" ? saved : "unknown";
}

function getServerConsentSnapshot(): AnalyticsConsent {
  return "unknown";
}

export function trackAnalyticsEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !MEASUREMENT_ID) return;
  if (window.localStorage.getItem(CONSENT_KEY) !== "granted") return;
  window.gtag?.("event", eventName, params);
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const consent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getServerConsentSnapshot);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [tagReady, setTagReady] = useState(false);
  const bannerOpen = preferencesOpen || consent === "unknown";
  const english = language === "en";

  useEffect(() => {
    const openPreferences = () => setPreferencesOpen(true);
    window.addEventListener("od-open-analytics-preferences", openPreferences);
    return () => window.removeEventListener("od-open-analytics-preferences", openPreferences);
  }, []);

  useEffect(() => {
    if (consent === "granted" && tagReady) {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
      window.gtag?.("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }

    if (consent === "denied" && tagReady) {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }, [consent, pathname, tagReady]);

  function chooseConsent(nextConsent: Exclude<AnalyticsConsent, "unknown">) {
    window.localStorage.setItem(CONSENT_KEY, nextConsent);
    window.dispatchEvent(new Event("od-analytics-consent-change"));
    setPreferencesOpen(false);
  }

  if (!MEASUREMENT_ID) return null;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script id="google-analytics-consent" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              window.gtag = function(){window.dataLayer.push(arguments);};
              window.gtag("consent", "default", {
                analytics_storage: "denied",
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied"
              });
              window.gtag("js", new Date());
              window.gtag("consent", "update", {
                analytics_storage: "granted",
                ad_storage: "denied",
                ad_user_data: "denied",
                ad_personalization: "denied"
              });
              window.gtag("config", "${MEASUREMENT_ID}", { send_page_view: false });`}
          </Script>
          <Script
            id="google-analytics"
            src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
            strategy="afterInteractive"
            onReady={() => setTagReady(true)}
          />
        </>
      )}

      {bannerOpen && (
        <aside
          role="dialog"
          aria-modal="false"
          aria-labelledby="analytics-consent-title"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl border border-[#d6b56d]/35 bg-[#101010] p-5 shadow-2xl sm:inset-x-6 sm:p-6"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 id="analytics-consent-title" className="text-sm font-semibold text-white">
                {english ? "Your privacy matters" : "A sua privacidade importa"}
              </h2>
              <p className="mt-2 text-xs leading-6 text-white/60">
                {english
                  ? "We use Google Analytics to understand website usage and improve our services. Analytics cookies are only enabled if you agree. You can change your choice at any time in the Privacy Policy."
                  : "Utilizamos o Google Analytics para compreender a utilização do website e melhorar os nossos serviços. Os cookies de análise só são activados se aceitar. Pode alterar a sua escolha a qualquer momento na Política de Privacidade."}
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-2">
              <button
                type="button"
                onClick={() => chooseConsent("denied")}
                className="border border-white/20 px-4 py-3 text-[10px] font-bold tracking-wider text-white/75 transition hover:border-white/50"
              >
                {english ? "REJECT" : "REJEITAR"}
              </button>
              <button
                type="button"
                onClick={() => chooseConsent("granted")}
                className="border border-[#d6b56d] bg-[#d6b56d] px-4 py-3 text-[10px] font-bold tracking-wider text-black transition hover:bg-[#e7ca8a]"
              >
                {english ? "ACCEPT ANALYTICS" : "ACEITAR ANÁLISE"}
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
