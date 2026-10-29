import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale, locales, languageTags } from "@/lib/locales";
import { site } from "@/lib/site";
import "../globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-mono",
});
const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  weight: "800",
  variable: "--font-bricolage",
});

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

export const viewport: Viewport = { themeColor: "#F8F5EF" };

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <html
      lang={languageTags[locale]}
      className={`${mono.variable} ${bricolage.variable}`}
    >
      <head>
        <link
          rel="preload"
          href="/fonts/satoshi-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/clash-grotesk-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
