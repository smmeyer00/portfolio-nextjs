import Link from "next/link";
import { siteConfig } from "@/data/site";

const links = [
  { label: "GitHub", href: siteConfig.social.github },
  { label: "LinkedIn", href: siteConfig.social.linkedin },
  { label: "Email", href: `mailto:${siteConfig.email}` },
] as const;

export default function Navbar() {
  return (
    <header className="site-header">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <div className="site-frame header-inner">
        <Link href="/" className="identity-link" aria-label="Steven Meyer, home">
          <span className="identity-name">{siteConfig.name}</span>
          <span className="identity-role">Software engineer</span>
        </Link>

        <nav aria-label="External links" className="header-links">
          {links.map((link) => {
            const external = link.href.startsWith("http");

            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-link"
              >
                <span>{link.label}</span>
                <span aria-hidden="true" className="link-arrow">↗</span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
