export const locales = ["en", "pt-br", "fr", "es"] as const;
export type Locale = (typeof locales)[number];
export const languageNames: Record<Locale, string> = {
  en: "English",
  "pt-br": "Português (BR)",
  fr: "Français",
  es: "Español",
};
export const languageTags: Record<Locale, string> = {
  en: "en",
  "pt-br": "pt-BR",
  fr: "fr",
  es: "es",
};
export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
