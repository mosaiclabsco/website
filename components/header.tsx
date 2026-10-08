"use client";

import { useEffect, useState } from "react";
import { Brand } from "./brand";
import { Arrow, Moon, Sun } from "./icons";

const links = [
  { href: "#about", label: "The studio" },
  { href: "#products", label: "Our products" },
  { href: "#philosophy", label: "Our approach" },
];

export function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setDark(document.documentElement.dataset.theme === "dark");
    const update = () => {
      let stored: string | null = null;
      try { stored = localStorage.getItem("mosaic-theme"); } catch {}
      if (!stored) {
        document.documentElement.dataset.theme = media.matches ? "dark" : "light";
        setDark(media.matches);
      }
    };
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  function toggleTheme() {
    const next = !dark;
    document.documentElement.dataset.theme = next ? "dark" : "light";
    setDark(next);
    try { localStorage.setItem("mosaic-theme", next ? "dark" : "light"); } catch {}
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode" aria-pressed={dark}>
            <span className="sun-icon"><Sun /></span><span className="moon-icon"><Moon /></span>
          </button>
          <a className="contact-link" href="#contact">Say hello <Arrow diagonal /></a>
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"}>
            <span /><span />
          </button>
        </div>
      </div>
      <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        {[...links, { href: "#contact", label: "Say hello" }].map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}<Arrow diagonal /></a>)}
      </nav>
    </header>
  );
}
