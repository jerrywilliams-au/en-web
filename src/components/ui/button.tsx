import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02]",
        destructive:
          "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-[1.02]",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-emerald-500/10 hover:border-cyan-500/30 hover:text-foreground",
        secondary:
          "bg-muted text-foreground border border-transparent hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-emerald-500/10 hover:border-cyan-500/30",
        ghost:
          "text-muted-foreground hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-emerald-500/10 hover:text-foreground border border-transparent hover:border-cyan-500/30",
        link: "text-cyan-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-9 rounded-md gap-1.5 px-3",
        lg: "h-10 rounded-md px-5",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      type={asChild ? undefined : "button"}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
