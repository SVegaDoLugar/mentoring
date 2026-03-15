"use client";

import { useI18n } from "@/contexts/I18nContext";
import { ContactForm } from "./ContactForm";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/samuel-j-vega-do-lugar-b13431172/",
  orcid: "https://orcid.org/0000-0001-7929-2576",
  scholar: "https://scholar.google.com/citations?user=PQ2yRigAAAAJ&hl=es",
  github: "https://github.com/SVegaDoLugar",
};

export function ContactTab() {
  const { t } = useI18n();
  return (
    <>
      <h2 className="section-title">{t("contact.title")}</h2>
      <p className="text-center" style={{ marginBottom: 20 }}>
        {t("contact.subtitle")}
      </p>
      <div className="contact-form">
        <ContactForm />
      </div>
      <div className="contact-methods">
        <div className="contact-method">
          <div className="icon">📧</div>
          <h3>{t("contact.email")}</h3>
          <p>svegadolugar@hotmail.com</p>
        </div>
        <div className="contact-method">
          <div className="icon">📱</div>
          <h3>{t("contact.phone")}</h3>
          <p>+57 302 602 6180</p>
        </div>
        <div className="contact-method">
          <div className="icon">🕒</div>
          <h3>{t("contact.scheduleLabel")}</h3>
          <p dangerouslySetInnerHTML={{ __html: t("contact.schedule") }} />
        </div>
      </div>
      <div className="social-icons">
        <a href={LINKS.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width={20} height={20} />
        </a>
        <a href={LINKS.orcid} className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/ORCID_iD.svg/2048px-ORCID_iD.svg.png" alt="ORCID" width={20} height={20} />
        </a>
        <a href={LINKS.scholar} className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Scholar_logo.svg/2048px-Google_Scholar_logo.svg.png" alt="Google Scholar" width={20} height={20} />
        </a>
        <a href={LINKS.github} className="social-icon" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width={20} height={20} />
        </a>
      </div>
    </>
  );
}
