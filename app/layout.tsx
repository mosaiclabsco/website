import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Mosaic Labs — Build Ideas Together",
  description: site.description,
  alternates: { canonical: "/" },
  icons: { icon: "/brand/icon.svg", apple: "/brand/icon-text.png" },
  openGraph: { title: "Mosaic Labs — Build Ideas Together", description: site.description, url: site.url, siteName: site.name, type: "website", locale: "en_US" },
  twitter: { card: "summary", title: "Mosaic Labs — Build Ideas Together", description: site.description },
};

export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: light)", color: "#F8F5EF" }, { media: "(prefers-color-scheme: dark)", color: "#0F172A" }] };

const themeScript = `(function(){try{var t=localStorage.getItem('mosaic-theme');document.documentElement.dataset.theme=t==='dark'||t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}catch(e){document.documentElement.dataset.theme=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /><link rel="preload" href="/fonts/satoshi-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /><link rel="preload" href="/fonts/satoshi-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head>
      <body>{children}</body>
    </html>
  );
}
