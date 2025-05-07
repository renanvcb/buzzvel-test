import React, { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "filled" | "outline" | "disabled" | "link" | "danger";
type ButtonSize = "s" | "m" | "l" | "xl";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactNode;
  // New props for customizable colors (optional)
  filledColor?: string; // Example: "bg-blue-600"
  filledHoverColor?: string; // Example: "hover:bg-blue-700"
}

function Button({
  size = "m",
  variant = "filled",
  filledColor = "bg-blue-600",
  filledHoverColor = "hover:bg-blue-700",
  children,
  className,
  ...props
}: ButtonProps) {
  // Base classes (with cn to merge conditional classes)
  const baseClasses = cn(
    "rounded-lg font-medium transition-all flex items-center justify-center gap-3",
    className // Allows additional classes via prop
  );

  // Size mapping
  const sizeClasses = {
    s: "px-4 py-2 text-sm",
    m: "px-6 py-3 text-base",
    l: "px-8 py-4 text-xl",
    xl: "px-10 py-5 font-bold text-2xl",
  };

  // Style mapping (now with cn and custom colors)
  const variantClasses = cn({
    // "filled" style with customizable colors
    [cn(filledColor, filledHoverColor, "text-white")]: variant === "filled",
    // Other fixed styles
    "border border-blue-600 text-blue-600 hover:bg-blue-50":
      variant === "outline",
    "bg-gray-300 text-gray-500 cursor-not-allowed": variant === "disabled",
    "text-blue-600 hover:underline p-0": variant === "link",
    "bg-red-600 hover:bg-red-700 text-white": variant === "danger",
  });

  return (
    <button
      className={cn(baseClasses, sizeClasses[size], variantClasses)}
      disabled={variant === "disabled"}
      {...props}
    >
      {children}
    </button>
  );
}

// Subcomponent for left icon
Button.IconLeft = ({ children }: { children: ReactNode }) => <>{children}</>;

// Subcomponent for right icon
Button.IconRight = ({ children }: { children: ReactNode }) => <>{children}</>;

// Subcomponent for text (optional)
Button.Text = ({ children }: { children: ReactNode }) => (
  <span>{children}</span>
);

export { Button };
