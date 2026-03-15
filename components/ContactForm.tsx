"use client";

import { useI18n } from "@/contexts/I18nContext";

const PROJECT_OPTIONS = [
  { value: "escolar", key: "contact.projectSchool" },
  { value: "pregrado", key: "contact.projectUndergrad" },
  { value: "maestria", key: "contact.projectMasters" },
  { value: "doctorado", key: "contact.projectDoctoral" },
  { value: "otro", key: "contact.projectOther" },
] as const;

export function ContactForm() {
  const { t, translations } = useI18n();

  const getNested = (obj: Record<string, unknown>, path: string): string => {
    const val = path.split(".").reduce((o: unknown, k) => (o as Record<string, unknown>)?.[k], obj);
    return (val as string) ?? "";
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value.trim();
    const projectType = (form.elements.namedItem("projectType") as HTMLSelectElement).value;
    const projectTypeText = (form.elements.namedItem("projectType") as HTMLSelectElement).selectedOptions[0]?.text ?? projectType;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    const nameReq = getNested(translations, "validation.nameRequired");
    const projectReq = getNested(translations, "validation.projectTypeRequired");
    const msgReq = getNested(translations, "validation.messageRequired");
    const errorsTitle = getNested(translations, "validation.errorsTitle");

    let errorMessage = "";
    if (!name) errorMessage += nameReq + "\n";
    if (!projectType) errorMessage += projectReq + "\n";
    if (!message) errorMessage += msgReq + "\n";

    if (errorMessage) {
      alert(errorsTitle + "\n\n" + errorMessage);
      return;
    }

    const intro = getNested(translations, "mailto.bodyIntro") ?? "";
    const phonePart = getNested(translations, "mailto.bodyPhone") ?? "";
    const closing = getNested(translations, "mailto.bodyClosing") ?? "";

    let body = intro.replace("{name}", name).replace("{projectType}", projectTypeText);
    body += message;
    if (phone) body += phonePart.replace("{phone}", phone);
    body += closing;

    const subject = `${projectTypeText} - ${name}`;
    const mailto = `mailto:svegadolugar@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">{t("contact.formName")}</label>
        <input type="text" id="name" name="name" className="form-control" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">{t("contact.formPhone")}</label>
        <input type="tel" id="phone" name="phone" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="projectType">{t("contact.formProjectType")}</label>
        <select id="projectType" name="projectType" className="form-control" required>
          <option value="">{t("contact.formSelectPlaceholder")}</option>
          {PROJECT_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {t(opt.key)}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">{t("contact.formMessage")}</label>
        <textarea id="message" name="message" className="form-control" required />
      </div>
      <button type="submit" className="btn">
        {t("contact.formSubmit")}
      </button>
    </form>
  );
}
