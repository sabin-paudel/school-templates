"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === "left"
      ? { x: -28 }
      : direction === "right"
        ? { x: 28 }
        : { y: 28 };

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 1, ...offset }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
