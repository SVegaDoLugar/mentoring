"use client";

import { useI18n } from "@/contexts/I18nContext";

export function AboutTab() {
  const { t } = useI18n();
  return (
    <>
      <h2 className="section-title">{t("about.title")}</h2>
      <div className="about-content">
        <div className="about-text">
          <p>{t("about.para1")}</p>
          <p>{t("about.para2")}</p>
          <h3>{t("about.whyTitle")}</h3>
          <ul className="feature-list">
            <li>{t("about.feature1")}</li>
            <li>{t("about.feature2")}</li>
            <li>{t("about.feature3")}</li>
            <li>{t("about.feature4")}</li>
            <li>{t("about.feature5")}</li>
          </ul>
          <p>{t("about.para3")}</p>
        </div>
      </div>
    </>
  );
}
