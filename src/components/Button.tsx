import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-block bg-accent-500 text-foreground px-8 py-3 rounded-full hover:bg-accent-600 transition duration-300"
    >
      {children}
    </Link>
  );
}
