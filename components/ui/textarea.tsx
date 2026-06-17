import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[110px] w-full rounded-md border border-royal/20 bg-cream px-4 py-3 text-sm resize-y",
        "transition-colors placeholder:text-muted",
        "focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/15",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
