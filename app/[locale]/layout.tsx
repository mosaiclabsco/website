import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale, locales, languageTags } from "@/lib/locales";
import { site } from "@/lib/site";
import "../globals.css";

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Omit<Props, "children">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = dictionaries[locale];
  return {
    metadataBase: new URL(site.url),
    title: d.meta.title,
    description: d.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        "pt-BR": "/pt-br",
        fr: "/fr",
        es: "/es",
        "x-default": "/en",
      },
    },
    icons: { icon: "/brand/icon.svg" },
    openGraph: {
      title: d.meta.title,
      description: d.meta.description,
      url: `${site.url}/${locale}`,
      siteName: site.name,
      type: "website",
      locale: { en: "en_US", "pt-br": "pt_BR", fr: "fr_FR", es: "es_ES" }[
        locale
      ],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map(
          (l) =>
            ({ en: "en_US", "pt-br": "pt_BR", fr: "fr_FR", es: "es_ES" })[l],
        ),
    },
    twitter: {
      card: "summary",
      title: d.meta.title,
      description: d.meta.description,
    },
  };
}

export const viewport: Viewport = { themeColor: "#0F172A" };
const themeScript = `(function(){try{var t=localStorage.getItem('mosaic-theme');document.documentElement.dataset.theme=t==='dark'||t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}})()`;

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html lang={languageTags[locale]} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link
          rel="preload"
          href="/fonts/satoshi-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/satoshi-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
