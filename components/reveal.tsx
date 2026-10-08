"use client";

import { useEffect } from "react";

export function Reveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("reveal-pending");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top > window.innerHeight) node.classList.add("reveal-pending");
      observer.observe(node);
    });
    return () => { observer.disconnect(); nodes.forEach((node) => node.classList.remove("reveal-pending")); };
  }, []);
  return null;
}
