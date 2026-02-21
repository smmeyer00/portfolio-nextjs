import Link from "next/link";

interface ButtonBaseProps {
  children: React.ReactNode;
  className?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const baseStyles =
  "inline-block bg-accent-500 text-foreground px-8 py-3 rounded-full hover:bg-accent-600 transition duration-300 cursor-pointer";

export default function Button({
  href,
  children,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${className}`}>
      {children}
    </button>
  );
}
