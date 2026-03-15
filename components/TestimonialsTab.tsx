"use client";

import { useI18n } from "@/contexts/I18nContext";

const TESTIMONIALS = [
  { text: "testimonials.testimonial1", author: "testimonials.testimonial1Author", program: "testimonials.testimonial1Program" },
  { text: "testimonials.testimonial2", author: "testimonials.testimonial2Author", program: "testimonials.testimonial2Program" },
  { text: "testimonials.testimonial3", author: "testimonials.testimonial3Author", program: "testimonials.testimonial3Program" },
  { text: "testimonials.testimonial4", author: "testimonials.testimonial4Author", program: "testimonials.testimonial4Program" },
  { text: "testimonials.testimonial5", author: "testimonials.testimonial5Author", program: "testimonials.testimonial5Program" },
];

export function TestimonialsTab() {
  const { t } = useI18n();
  return (
    <>
      <h2 className="section-title">{t("testimonials.title")}</h2>
      <p className="text-center">{t("testimonials.subtitle")}</p>
      <div className="testimonials">
        {TESTIMONIALS.map((item, i) => (
          <div key={i} className="testimonial-card">
            <div className="testimonial-content">
              <p className="testimonial-text">{t(item.text)}</p>
              <p className="testimonial-author">{t(item.author)}</p>
              <p className="testimonial-program">{t(item.program)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
