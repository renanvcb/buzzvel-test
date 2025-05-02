import React, { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "filled" | "outline" | "disabled" | "link" | "danger";
type ButtonSize = "s" | "m" | "l" | "xl";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: ReactNode;
  // Novas props para cores customizáveis (opcionais)
  filledColor?: string; // Ex: "bg-blue-600"
  filledHoverColor?: string; // Ex: "hover:bg-blue-700"
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
  // Classes base (com cn para mesclar classes condicionais)
  const baseClasses = cn(
    "rounded-lg font-medium transition-all flex items-center justify-center",
    className // Permite classes adicionais via prop
  );

  // Mapeamento de tamanhos
  const sizeClasses = {
    s: "px-4 py-2 text-sm",
    m: "px-6 py-3 text-base",
    l: "px-8 py-4 text-xl",
    xl: "px-10 py-5 font-bold text-2xl",
  };

  // Mapeamento de estilos (agora com cn e cores custom)
  const variantClasses = cn({
    // Estilo "filled" com cores customizáveis
    [cn(filledColor, filledHoverColor, "text-white")]: variant === "filled",
    // Outros estilos fixos
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

// Subcomponente para ícone esquerdo
Button.IconLeft = ({ children }: { children: ReactNode }) => <>{children}</>;

// Subcomponente para ícone direito
Button.IconRight = ({ children }: { children: ReactNode }) => (
  <span className="ml-2">{children}</span>
);

// Subcomponente para texto (opcional)
Button.Text = ({ children }: { children: ReactNode }) => (
  <span>{children}</span>
);

export default Button;
