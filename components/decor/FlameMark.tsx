interface FlameMarkProps {
  className?: string;
  /** Flame fill color */
  fill?: string;
}

/** Stylized flame teardrop — used as inline icon between marquee repetitions. */
export function FlameMark({ className = "", fill = "#F5A623" }: FlameMarkProps) {
  return (
    <svg
      viewBox="0 0 24 32"
      className={className}
      fill={fill}
      aria-hidden="true"
    >
      <path d="M12 0 C16 8 22 12 22 20 C22 26 17 32 12 32 C7 32 2 26 2 20 C2 14 8 10 12 0 Z" />
    </svg>
  );
}
