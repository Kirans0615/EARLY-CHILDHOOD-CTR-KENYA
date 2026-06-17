"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrambleHoverProps {
  text: string;
  scrambleSpeed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  scrambledClassName?: string;
  as?: keyof React.JSX.IntrinsicElements;
}

const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+";

export function ScrambleHover({
  text,
  scrambleSpeed = 38,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = DEFAULT_CHARS,
  className,
  scrambledClassName,
  as: Tag = "span",
}: ScrambleHoverProps) {
  const [display, setDisplay] = React.useState(text);
  const [scrambled, setScrambled] = React.useState<boolean[]>(() =>
    Array.from({ length: text.length }, () => false)
  );
  const [running, setRunning] = React.useState(false);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);
  const iterRef = React.useRef(0);

  React.useEffect(() => {
    setDisplay(text);
    setScrambled(Array.from({ length: text.length }, () => false));
  }, [text]);

  const charPool = useOriginalCharsOnly
    ? Array.from(new Set(text.replace(/\s/g, "").split("")))
    : characters.split("");

  const stop = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const revealIndexAt = React.useCallback(
    (step: number, length: number) => {
      if (revealDirection === "end") return length - 1 - step;
      if (revealDirection === "center") {
        const mid = Math.floor(length / 2);
        const offset = Math.floor((step + 1) / 2);
        return step % 2 === 0 ? mid - offset : mid + offset;
      }
      return step;
    },
    [revealDirection]
  );

  const startScramble = React.useCallback(() => {
    stop();
    iterRef.current = 0;
    setRunning(true);
    const length = text.length;
    const revealed = Array.from({ length }, () => false);

    intervalRef.current = setInterval(() => {
      iterRef.current += 1;
      const step = iterRef.current;

      if (sequential) {
        const idx = revealIndexAt(Math.min(step - 1, length - 1), length);
        if (idx >= 0 && idx < length) revealed[idx] = true;
      }

      const next = text
        .split("")
        .map((c, i) => {
          if (c === " ") return " ";
          if (sequential && revealed[i]) return c;
          if (!sequential && step >= maxIterations) return c;
          return charPool[Math.floor(Math.random() * charPool.length)];
        })
        .join("");

      setDisplay(next);
      setScrambled(
        text.split("").map((c, i) => {
          if (c === " ") return false;
          if (sequential) return !revealed[i];
          return step < maxIterations;
        })
      );

      const done = sequential ? step >= length : step >= maxIterations;
      if (done) {
        stop();
        setDisplay(text);
        setScrambled(Array.from({ length }, () => false));
        setRunning(false);
      }
    }, scrambleSpeed);
  }, [text, scrambleSpeed, maxIterations, sequential, revealIndexAt, charPool, stop]);

  React.useEffect(() => () => stop(), [stop]);

  return (
    <motion.span
      className={cn("inline-block cursor-default", className)}
      onMouseEnter={startScramble}
      aria-label={text}
    >
      {display.split("").map((char, i) => (
        <span
          key={i}
          className={cn(
            "inline-block transition-colors",
            scrambled[i] && (scrambledClassName ?? "text-gold")
          )}
        >
          {char === " " ? " " : char}
        </span>
      ))}
      {running ? null : null}
      <span className="sr-only">{text}</span>
    </motion.span>
  );
}
