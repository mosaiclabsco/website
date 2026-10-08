"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { officialMark } from "@/lib/official-mark";

export function Artwork() {
  const reduce = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 90, damping: 22 });
  const y = useSpring(pointerY, { stiffness: 90, damping: 22 });
  return (
    <div
      className="artwork"
      aria-hidden="true"
      onPointerMove={(event) => {
        if (reduce || event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 22);
        pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 22);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      <motion.div
        className="artwork-mark"
        style={reduce ? undefined : { x, y }}
        dangerouslySetInnerHTML={{ __html: officialMark }}
      />
    </div>
  );
}
