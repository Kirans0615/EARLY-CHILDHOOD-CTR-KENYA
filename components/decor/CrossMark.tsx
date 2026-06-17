interface CrossMarkProps {
  className?: string;
  /** Stroke color */
  stroke?: string;
  /** Thickness */
  strokeWidth?: number;
}

/** Minimal Latin cross — used decoratively. */
export function CrossMark({
  className = "",
  stroke = "currentColor",
  strokeWidth = 2,
}: CrossMarkProps) {
  return (
    <svg
      viewBox="0 0 120 200"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      aria-hidden="true"
    >
      {/* Vertical beam */}
      <line x1="60" y1="0" x2="60" y2="200" />
      {/* Horizontal beam, set ~30% from top per traditional Latin cross */}
      <line x1="10" y1="62" x2="110" y2="62" />
    </svg>
  );
}
