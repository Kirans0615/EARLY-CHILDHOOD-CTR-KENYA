import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-semibold tracking-ember uppercase transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        flame:    "bg-flame-linear text-ivory rounded-full shadow-[0_8px_30px_-4px_rgba(212,80,26,0.55)] hover:-translate-y-0.5 flame-glow",
        crimson:  "bg-crimson text-ivory rounded-full hover:bg-crimson-glow flame-glow",
        outline:  "border border-ivory/30 text-ivory rounded-full hover:bg-ivory/10",
        ghost:    "text-ivory hover:text-flame",
        textArrow:"text-ivory tracking-ember after:ml-2 after:content-['→'] after:transition-transform hover:after:translate-x-1",
      },
      size: {
        default: "h-11 px-7",
        sm:      "h-9 px-5 text-xs",
        lg:      "h-13 px-9 text-base",
        xl:      "h-16 px-11 text-base",
      },
    },
    defaultVariants: { variant: "flame", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
