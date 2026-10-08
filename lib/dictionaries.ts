import en from "./dictionaries/en.json";
import ptBR from "./dictionaries/pt-br.json";
import fr from "./dictionaries/fr.json";
import es from "./dictionaries/es.json";
import type { Locale } from "./locales";

export type Dictionary = typeof en;
export const dictionaries = { en, "pt-br": ptBR, fr, es } satisfies Record<
  Locale,
  Dictionary
>;
