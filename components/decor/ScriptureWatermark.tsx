interface ScriptureWatermarkProps {
  text: string;
  className?: string;
}

/**
 * Large translucent verse rendered behind section content.
 * Drop this inside a `relative` parent and put content at z-10 above it.
 */
export function ScriptureWatermark({ text, className = "" }: ScriptureWatermarkProps) {
  return (
    <div
      aria-hidden="true"
      className={`verse-watermark ${className}`}
      style={{ overflow: "hidden", padding: "0 4vw" }}
    >
      <span className="text-balance">{text}</span>
    </div>
  );
}
