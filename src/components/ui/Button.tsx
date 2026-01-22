import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand text-white shadow-soft hover:bg-brand-2 focus-visible:ring-brand",
  secondary:
    "border border-line bg-white text-ink hover:border-brand hover:text-brand",
  ghost: "text-brand hover:text-brand-2",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] active:opacity-90 ${variants[variant]} ${sizes[size]} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
}
