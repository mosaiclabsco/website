"use client";
import { useRef } from "react";
import { officialMark } from "@/lib/official-mark";
export function Artwork({ caption }: { caption: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="artwork"
      ref={ref}
      aria-hidden="true"
      onPointerMove={(event) => {
        if (
          window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
          event.pointerType === "touch"
        )
          return;
        const box = event.currentTarget.getBoundingClientRect();
        ref.current?.style.setProperty(
          "--pointer-x",
          `${((event.clientX - box.left) / box.width - 0.5) * 16}px`,
        );
        ref.current?.style.setProperty(
          "--pointer-y",
          `${((event.clientY - box.top) / box.height - 0.5) * 16}px`,
        );
      }}
      onPointerLeave={() => {
        ref.current?.style.setProperty("--pointer-x", "0px");
        ref.current?.style.setProperty("--pointer-y", "0px");
      }}
    >
      <div
        className="artwork-mark"
        dangerouslySetInnerHTML={{ __html: officialMark }}
      />
      <div className="artwork-caption">
        <span>ML / 001</span>
        <span>{caption}</span>
      </div>
    </div>
  );
}
