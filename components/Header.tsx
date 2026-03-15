"use client";

import { useI18n } from "@/contexts/I18nContext";

export function Header() {
  const { t } = useI18n();
  return (
    <header>
      <div className="container">
        <h1>{t("header.title")}</h1>
        <p>{t("header.subtitle")}</p>
      </div>
    </header>
  );
}
