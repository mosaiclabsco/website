"use client";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { locales, languageNames, type Locale } from "@/lib/locales";
import { Brand } from "./brand";
import { Arrow, Moon, Sun, Globe } from "./icons";

export function Header({
  locale,
  nav,
  access,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  access: Dictionary["access"];
}) {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#products", label: nav.products },
    { href: "#about", label: nav.studio },
    { href: "#philosophy", label: nav.approach },
  ];
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(document.documentElement.dataset.theme === "dark");
    const update = () => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem("mosaic-theme");
      } catch {}
      if (!saved) {
        document.documentElement.dataset.theme = media.matches
          ? "dark"
          : "light";
        setDark(media.matches);
      }
    };
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  function toggleTheme() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    setDark(next);
    try {
      localStorage.setItem("mosaic-theme", next ? "dark" : "light");
    } catch {}
  }
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand label={access.home} />
        <nav className="desktop-nav" aria-label={access.open}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <label className="language-control">
            <span className="sr-only">{nav.language}</span>
            <Globe />
            <select
              aria-label={nav.language}
              value={locale}
              onChange={(event) => {
                window.location.assign(
                  `/${event.target.value}${window.location.hash}`,
                );
              }}
            >
              {locales.map((l) => (
                <option key={l} value={l}>
                  {languageNames[l]}
                </option>
              ))}
            </select>
          </label>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={access.theme}
            aria-pressed={dark}
          >
            <span className="sun-icon">
              <Sun />
            </span>
            <span className="moon-icon">
              <Moon />
            </span>
          </button>
          <a className="contact-link" href="#contact">
            {nav.contact}
            <Arrow diagonal />
          </a>
          <button
            className={`menu-toggle${open ? " is-open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? access.close : access.open}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label={access.open}
        hidden={!open}
      >
        {[...links, { href: "#contact", label: nav.contact }].map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
            <Arrow diagonal />
          </a>
        ))}
      </nav>
    </header>
  );
}
