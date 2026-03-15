"use client";

import { useI18n } from "@/contexts/I18nContext";
import { ServiceCard } from "./ServiceCard";

export function HomeTab({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const { t } = useI18n();
  return (
    <div className="text-center">
      <h2 className="section-title">{t("home.title")}</h2>
      <p>{t("home.subtitle")}</p>
      <div className="services-grid">
        <ServiceCard icon="📝" title={t("home.card1Title")} description={t("home.card1Desc")} />
        <ServiceCard icon="🔍" title={t("home.card2Title")} description={t("home.card2Desc")} />
        <ServiceCard icon="📊" title={t("home.card3Title")} description={t("home.card3Desc")} />
      </div>
      <div className="contact-info">
        <h3>{t("home.ctaTitle")}</h3>
        <p>{t("home.ctaDesc")}</p>
        <br />
        <a href="#contact" className="btn" style={{ textDecoration: "none" }} onClick={(e) => { e.preventDefault(); onNavigate("contact"); }}>
          {t("home.ctaButton")}
        </a>
      </div>
    </div>
  );
}
