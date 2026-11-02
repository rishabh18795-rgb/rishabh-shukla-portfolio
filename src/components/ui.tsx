"use client";

import { motion, MotionConfig, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

export function Motion({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

/** Fades and lifts content in once, when it first scrolls into view. */
export function Reveal({ delay = 0, y = 24, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <Reveal className="mb-14 max-w-3xl md:mb-20">
      <p className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-muted">
        <span className="text-cyan">{index}</span>
        <span className="h-px w-8 bg-line-strong" />
        {label}
      </p>
      <h2 className="mt-5 text-4xl font-medium leading-[1.05] tracking-tight text-fg md:text-6xl">{title}</h2>
      {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white/[0.02] px-3 py-1 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}
