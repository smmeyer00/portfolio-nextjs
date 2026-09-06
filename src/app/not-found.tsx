import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="site-frame minimal-page">
      <div className="minimal-page-inner">
        <p className="section-index">404 / Not found</p>
        <h1>This route isn’t here.</h1>
        <p className="minimal-page-copy">
          The page may have moved, or it may never have belonged here.
        </p>
        <Link href="/" className="minimal-link">
          Return home
        </Link>
      </div>
    </section>
  );
}
