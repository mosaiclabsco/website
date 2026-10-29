"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/dictionaries";
import { palette } from "@/lib/mark";
import s from "./studio-page.module.css";

const radii = ["0 48% 0 0", "50%", "0 48% 0 48%", "48% 0 48% 0"];
const COLS = 8;
const TOTAL = COLS * COLS;
const TICK = 900;
// The wall drifts around this many filled tiles, within a small band.
const TARGET = 40;
const BAND = 4;
const centre = new Map<number, number>([
  [2 * COLS + 2, 0], [2 * COLS + 5, 1], [5 * COLS + 2, 2], [5 * COLS + 5, 3],
]);

type Tile = { c: number; r: number } | null;

// Deterministic first picture (server and client agree): the mark in the middle plus ~36 tiles.
function firstWall(): Tile[] {
  return Array.from({ length: TOTAL }, (_, i) => {
    const c = centre.get(i);
    if (c !== undefined) return { c, r: (c + i) % 4 };
    return (i * 7 + 3) % 11 < 6 ? { c: (i * 5 + Math.floor(i / COLS)) % 4, r: (i * 3) % 4 } : null;
  });
}

const pick = <T,>(list: T[]) => list[Math.floor(Math.random() * list.length)];

export function TileWall({ label, copy }: { label: string; copy: Dictionary["wall"] }) {
  const [tiles, setTiles] = useState<Tile[]>(firstWall);
  const [auto, setAuto] = useState(true);
  const turn = useRef(0);
  const lastTouch = useRef(0);

  const lay = (i: number) => {
    lastTouch.current = Date.now();
    const c = turn.current++ % 4;
    setTiles((prev) => {
      const next = [...prev];
      next[i] = { c, r: (c + i + turn.current) % 4 };
      return next;
    });
  };

  // The wall keeps rearranging itself; hovering still paints and briefly takes over.
  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (Date.now() - lastTouch.current < 1500) return;
      setTiles((prev) => {
        const next = [...prev];
        const moves = 1 + Math.floor(Math.random() * 3);
        for (let m = 0; m < moves; m++) {
          const filled = next.flatMap((t, i) => (t ? [i] : []));
          const empty = next.flatMap((t, i) => (t ? [] : [i]));
          const roll = Math.random();
          const add = filled.length < TARGET - BAND || (filled.length <= TARGET + BAND && roll < 0.35);
          const clear = filled.length > TARGET + BAND || (!add && roll < 0.7);
          if (add && empty.length) next[pick(empty)] = { c: Math.floor(Math.random() * 4), r: Math.floor(Math.random() * 4) };
          else if (clear && filled.length) next[pick(filled)] = null;
          else if (filled.length) next[pick(filled)] = { c: Math.floor(Math.random() * 4), r: Math.floor(Math.random() * 4) };
        }
        return next;
      });
    }, TICK);
    return () => clearInterval(id);
  }, [auto]);

  const placed = tiles.filter(Boolean).length;
  return (
    <div className={s.wallWrap}>
      <div className={s.wall} role="img" aria-label={label}>
        {tiles.map((t, i) => (
          <span
            key={i}
            className={s.tile}
            onPointerEnter={(e) => e.pointerType === "mouse" && lay(i)}
            onPointerDown={() => lay(i)}
            style={t ? { background: palette[t.c], borderRadius: radii[t.r] } : undefined}
          />
        ))}
      </div>
      <div className={s.wallMeta}>
        <span><i className={auto ? s.live : undefined} /> {String(placed).padStart(2, "0")}/{TOTAL} {copy.count}</span>
        <span className={s.wallBtns}>
          <button type="button" onClick={() => setAuto((a) => !a)} aria-pressed={!auto}>{auto ? copy.pause : copy.play}</button>
          <button type="button" onClick={() => setTiles(Array(TOTAL).fill(null))}>{copy.clear}</button>
        </span>
      </div>
    </div>
  );
}
