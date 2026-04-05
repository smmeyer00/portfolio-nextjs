"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  navItems: NavItem[];
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar({ navItems }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        openButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstMobileLinkRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-accent-400 focus:px-4 focus:py-2 focus:text-background-950"
      >
        Skip to main content
      </a>

      <div className="content-shell">
        <div className="section-frame flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-foreground transition duration-300 group-hover:border-accent-300/40 group-hover:bg-accent-300/10">
              SM
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold text-foreground">
                Steven Meyer
              </span>
              <span className="block text-xs uppercase tracking-[0.24em] text-background-400">
                Software Engineer
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                    isActive
                      ? "bg-white/10 text-foreground"
                      : "text-background-300 hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            ref={openButtonRef}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label="Open navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background-200 transition duration-300 hover:text-foreground lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7h16M4 12h16M4 17h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-background-950/80 backdrop-blur-sm transition duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          className={`absolute inset-x-3 top-3 rounded-[2rem] border border-white/10 bg-background-900/96 p-5 shadow-[0_32px_80px_rgba(0,0,0,0.45)] transition duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-accent-300">
                Navigation
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground">
                Explore the site
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openButtonRef.current?.focus();
              }}
              aria-label="Close navigation menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-background-200 transition duration-300 hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="fine-rule my-5" />

          <div className="grid gap-2">
            {navItems.map((item, index) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-[1.5rem] border px-4 py-4 transition duration-300 ${
                    isActive
                      ? "border-accent-300/30 bg-accent-300/10 text-foreground"
                      : "border-white/8 bg-white/3 text-background-200 hover:border-white/14 hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  <span className="block text-sm uppercase tracking-[0.18em] text-background-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-lg font-semibold">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
