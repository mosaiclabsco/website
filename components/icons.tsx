import {
  ArrowRight,
  ArrowUpRight,
  Sun as SunGlyph,
  Moon as MoonGlyph,
  Globe as GlobeGlyph,
} from "@phosphor-icons/react/dist/ssr";
import type { IconProps } from "@phosphor-icons/react";

export function Arrow({
  diagonal = false,
  ...props
}: IconProps & { diagonal?: boolean }) {
  const Icon = diagonal ? ArrowUpRight : ArrowRight;
  return <Icon size={22} weight="regular" aria-hidden="true" {...props} />;
}
export function Sun() {
  return <SunGlyph size={20} weight="regular" aria-hidden="true" />;
}
export function Moon() {
  return <MoonGlyph size={20} weight="regular" aria-hidden="true" />;
}
export function Globe() {
  return <GlobeGlyph size={16} weight="regular" aria-hidden="true" />;
}
