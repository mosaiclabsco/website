import { notFound } from "next/navigation";
import { dictionaries } from "@/lib/dictionaries";
import { isLocale } from "@/lib/locales";
import { StudioPage } from "@/components/studio-page";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <StudioPage locale={locale} d={dictionaries[locale]} />;
}
