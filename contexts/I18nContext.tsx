"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "@/i18n/en.json";
import pt from "@/i18n/pt.json";
import es from "@/i18n/es.json";

const translations: Record<string, Record<string, unknown>> = { en, pt, es };
const STORAGE_KEY = "mentoring-lang";
const SUPPORTED_LANGS = ["en", "pt", "es"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

function getNested(obj: Record<string, unknown>, path: string): string | undefined {
  const value = path.split(".").reduce((o: unknown, k) => (o as Record<string, unknown>)?.[k], obj);
  return value as string | undefined;
}

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  translations: Record<string, unknown>;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && SUPPORTED_LANGS.includes(stored)) setLangState(stored);
    setMounted(true);
  }, []);

  useEffect(() => {
    const meta = translations[lang]?.meta as { title?: string; description?: string } | undefined;
    if (meta?.title) document.title = meta.title;
    if (meta?.description) {
      const el = document.querySelector('meta[name="description"]');
      if (el) el.setAttribute("content", meta.description);
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((newLang: Lang) => {
    if (!SUPPORTED_LANGS.includes(newLang)) return;
    setLangState(newLang);
    if (mounted) localStorage.setItem(STORAGE_KEY, newLang);
  }, [mounted]);

  const t = useCallback(
    (key: string) => {
      const val = getNested(translations[lang] as Record<string, unknown>, key);
      return val ?? key;
    },
    [lang]
  );

  const value: I18nContextType = {
    lang,
    setLang,
    t,
    translations: translations[lang] as Record<string, unknown>,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
