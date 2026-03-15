"use client";

import { useI18n } from "@/contexts/I18nContext";
import { ServiceCard } from "./ServiceCard";

const SERVICES = [
  { icon: "🎓", titleKey: "services.service1Title", descKey: "services.service1Desc" },
  { icon: "📚", titleKey: "services.service2Title", descKey: "services.service2Desc" },
  { icon: "🔬", titleKey: "services.service3Title", descKey: "services.service3Desc" },
  { icon: "🔍", titleKey: "services.service4Title", descKey: "services.service4Desc" },
  { icon: "📊", titleKey: "services.service5Title", descKey: "services.service5Desc" },
  { icon: "📏", titleKey: "services.service6Title", descKey: "services.service6Desc" },
  { icon: "✏️", titleKey: "services.service7Title", descKey: "services.service7Desc" },
];

export function ServicesTab() {
  const { t } = useI18n();
  return (
    <>
      <h2 className="section-title">{t("services.title")}</h2>
      <div className="services-grid">
        {SERVICES.map((s) => (
          <ServiceCard key={s.titleKey} icon={s.icon} title={t(s.titleKey)} description={t(s.descKey)} />
        ))}
      </div>
    </>
  );
}
