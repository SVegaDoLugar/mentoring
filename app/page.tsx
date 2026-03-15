"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";
import { HomeTab } from "@/components/HomeTab";
import { ServicesTab } from "@/components/ServicesTab";
import { AboutTab } from "@/components/AboutTab";
import { TestimonialsTab } from "@/components/TestimonialsTab";
import { ContactTab } from "@/components/ContactTab";
import { Footer } from "@/components/Footer";

const TABS = ["home", "services", "about", "testimonials", "contact"] as const;

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabChange = (tab: string, scrollTo?: number) => {
    setActiveTab(tab);
    if (scrollTo) {
      setTimeout(() => {
        const cards = document.querySelectorAll(".service-card");
        if (cards.length >= scrollTo) {
          cards[scrollTo - 1]?.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector(".main-nav");
      if (window.scrollY > 100) nav?.classList.add("scrolled");
      else nav?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Nav activeTab={activeTab} onTabChange={handleTabChange} />
      <div className="main-content">
        <div className="container">
          <div id="home" className={`tab-content ${activeTab === "home" ? "active" : ""}`}>
            <HomeTab onNavigate={handleTabChange} />
          </div>
          <div id="services" className={`tab-content ${activeTab === "services" ? "active" : ""}`}>
            <ServicesTab />
          </div>
          <div id="about" className={`tab-content ${activeTab === "about" ? "active" : ""}`}>
            <AboutTab />
          </div>
          <div id="testimonials" className={`tab-content ${activeTab === "testimonials" ? "active" : ""}`}>
            <TestimonialsTab />
          </div>
          <div id="contact" className={`tab-content ${activeTab === "contact" ? "active" : ""}`}>
            <ContactTab />
          </div>
        </div>
      </div>
      <Footer onNavClick={handleTabChange} />
    </>
  );
}
