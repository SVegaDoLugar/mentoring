"use client";

import { useState } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { useTheme } from "@/contexts/ThemeContext";
import type { Lang } from "@/contexts/I18nContext";

const TABS = ["home", "services", "about", "testimonials", "contact"] as const;

export function Nav({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const { t, lang, setLang } = useI18n();
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="main-nav">
      <div className="container nav-container">
        <div className="nav-left">
          <button
            className="mobile-menu-btn"
            aria-label="Menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            ☰
          </button>
          <ul className={`nav-links ${mobileOpen ? "active" : ""}`}>
            {TABS.map((tab) => (
              <li key={tab}>
                <a
                  href={`#${tab}`}
                  className={`nav-link ${activeTab === tab ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onTabChange(tab);
                    setMobileOpen(false);
                  }}
                >
                  {t(`nav.${tab}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <select
            className="lang-select"
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
          >
            <option value="en">EN</option>
            <option value="pt">PT</option>
            <option value="es">ES</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
