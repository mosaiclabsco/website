"use client";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { Arrow } from "./icons";

export function MagneticLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const reduce = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 200, damping: 24 });
  const y = useSpring(pointerY, { stiffness: 200, damping: 24 });
  return (
    <motion.a
      className="primary-button"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={reduce ? undefined : { x, y }}
      onPointerMove={(event) => {
        if (reduce || event.pointerType === "touch") return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - bounds.left - bounds.width / 2) * 0.12);
        pointerY.set((event.clientY - bounds.top - bounds.height / 2) * 0.12);
      }}
      onPointerLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
    >
      {children}
      <Arrow diagonal />
    </motion.a>
  );
}
