"use client";

import { useI18n } from "@/contexts/I18nContext";

const FOOTER_SERVICES = [
  { key: "footer.service1", tab: "services", scroll: 1 },
  { key: "footer.service2", tab: "services", scroll: 2 },
  { key: "footer.service3", tab: "services", scroll: 3 },
  { key: "footer.service4", tab: "services", scroll: 4 },
  { key: "footer.service5", tab: "services", scroll: 5 },
  { key: "footer.service6", tab: "services", scroll: 6 },
  { key: "footer.service7", tab: "services", scroll: 7 },
];

const FOOTER_CONTACT = [
  { key: "footer.contact1", tab: "contact", scroll: 1 },
  { key: "footer.contact2", tab: "contact", scroll: 2 },
  { key: "footer.contact3", tab: "contact", scroll: 3 },
];

export function Footer({ onNavClick }: { onNavClick: (tab: string, scroll?: number) => void }) {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>{t("footer.aboutTitle")}</h3>
            <p>{t("footer.aboutDesc")}</p>
          </div>
          <div className="footer-column">
            <h3>{t("footer.servicesTitle")}</h3>
            <ul>
              {FOOTER_SERVICES.map((item) => (
                <li key={item.key}>
                  <a
                    href={`#${item.tab}`}
                    className="footer-nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(item.tab, item.scroll);
                    }}
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-column">
            <h3>{t("footer.contactTitle")}</h3>
            <ul>
              {FOOTER_CONTACT.map((item) => (
                <li key={item.key}>
                  <a
                    href={`#${item.tab}`}
                    className="footer-nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(item.tab, item.scroll);
                    }}
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} {t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
