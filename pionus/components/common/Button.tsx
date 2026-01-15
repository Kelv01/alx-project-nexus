import React from "react";
import { ButtonProps } from "@/interfaces/button";
import clsx from "clsx";

function Button({
  children,
  variant = "primary",
  size = "sm",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex gap-2 items-center justify-center transition",
        {
          "bg-merino-600 text-white hover:bg-merino-600/90":
            variant === "primary",
          "bg-merino-100 text-merino-900 hover:bg-merino-200":
            variant === "secondary",
          "bg-none text-white hover:bg-merino-600": variant === "transparent",
          "border border-merino-300 text-merino-800 hover:bg-merino-100":
            variant === "outline",
        },
        {
          "px-3 py-1.5 text-sm": size === "sm",
          "px-4 py-2 text-base": size === "md",
          "px-8 py-3 text-lg": size === "lg",
        },

        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
