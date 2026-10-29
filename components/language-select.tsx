"use client";

import { languageNames, locales, type Locale } from "@/lib/locales";
import s from "./studio-page.module.css";

const short: Record<Locale, string> = { en: "EN", "pt-br": "PT", fr: "FR", es: "ES" };

// Switching language keeps the visitor on the current section.
export function LanguageSelect({ locale, label }: { locale: Locale; label: string }) {
  return (
    <label className={s.language}>
      <span className={s.srOnly}>{label}</span>
      <select
        aria-label={label}
        value={locale}
        onChange={(event) => window.location.assign(`/${event.target.value}${window.location.hash}`)}
      >
        {locales.map((l) => (
          <option key={l} value={l} lang={l}>
            {short[l]} · {languageNames[l]}
          </option>
        ))}
      </select>
      <span className={s.languageValue} aria-hidden="true">{short[locale]}</span>
    </label>
  );
}
