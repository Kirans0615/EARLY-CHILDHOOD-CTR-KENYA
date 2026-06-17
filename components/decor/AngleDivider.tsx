interface AngleDividerProps {
  /** Tailwind text color class — fill = currentColor */
  fill?: string;
  /** Flip across the X axis */
  flip?: boolean;
  className?: string;
  /** Visual height in pixels */
  height?: number;
}

/** Slanted geometric divider — replaces straight section borders. */
export function AngleDivider({
  fill = "text-charcoal",
  flip = false,
  className = "",
  height = 56,
}: AngleDividerProps) {
  return (
    <div className={`block leading-[0] ${className}`} style={{ height }}>
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className={`w-full ${fill} ${flip ? "rotate-180" : ""}`}
        style={{ height: "100%" }}
        aria-hidden="true"
      >
        <polygon fill="currentColor" points="0,64 1440,0 1440,64" />
      </svg>
    </div>
  );
}
