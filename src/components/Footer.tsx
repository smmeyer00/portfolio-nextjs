import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { socialLinks } from "@/data/social";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="content-shell">
        <div className="section-frame rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-background-400">
                Explore
              </p>
              <div className="mt-4 grid gap-2">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm text-background-300 transition duration-300 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="https://man.smmeyer.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-background-300 transition duration-300 hover:text-foreground"
                >
                  Terminal edition
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-background-400">
                Connect
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background-200 transition duration-300 hover:border-accent-300/30 hover:bg-accent-300/10 hover:text-foreground"
                    aria-label={`Visit ${social.name}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm muted-copy">{siteConfig.availability}</p>
            </div>
          </div>

          <div className="fine-rule my-8" />

          <div className="flex flex-col gap-3 text-sm text-background-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {siteConfig.name}.</p>
            <p>{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
