import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { locales } from "@/lib/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    en: `${site.url}/en`,
    "pt-BR": `${site.url}/pt-br`,
    fr: `${site.url}/fr`,
    es: `${site.url}/es`,
  };
  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
