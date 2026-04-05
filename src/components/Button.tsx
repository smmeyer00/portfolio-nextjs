import Link from "next/link";

interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseStyles =
  "inline-flex cursor-pointer items-center justify-center rounded-full font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background-950";

const variantStyles = {
  primary:
    "bg-accent-400 text-background-950 shadow-[0_16px_40px_rgba(134,166,97,0.2)] hover:bg-accent-300",
  secondary:
    "border border-white/12 bg-white/5 text-foreground hover:border-white/20 hover:bg-white/9",
  ghost: "text-foreground-soft hover:bg-white/4 hover:text-foreground",
} as const;

const sizeStyles = {
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
} as const;

export default function Button({
  href,
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
  ...rest
}: ButtonProps) {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "pointer-events-none opacity-60" : ""} ${className}`.trim();

  if (href) {
    if (href.startsWith("http")) {
      return (
        <a href={href} className={classes} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
