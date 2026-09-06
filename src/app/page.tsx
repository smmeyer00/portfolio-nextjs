import type { Metadata } from "next";
import { openGraphBase, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: `${siteConfig.name} — Software Engineer`,
  },
  description: siteConfig.shortDescription,
  openGraph: {
    ...openGraphBase,
    title: `${siteConfig.name} | Software Engineer`,
    description: siteConfig.shortDescription,
    type: "website",
    url: siteConfig.baseUrl,
  },
};

export default function HomePage() {
  return (
    <article className="man-page">
      <header className="man-header">
        <h1>STEVEN-MEYER(1)</h1>
        <p>General Commands Manual</p>
        <p>STEVEN-MEYER(1)</p>
      </header>

      <section>
        <h2>NAME</h2>
        <p><strong>steven-meyer</strong> — software engineer at Amazon Music</p>
      </section>

      <section>
        <h2>SYNOPSIS</h2>
        <p><strong>steven</strong> [--frontend] [--backend] [--product-systems]</p>
      </section>

      <section>
        <h2>DESCRIPTION</h2>
        <p>
          Builds marketing technology across interface and infrastructure. Current
          work includes server-driven product experiences and AI-assisted tooling.
        </p>
      </section>

      <section>
        <h2>OPTIONS</h2>
        <dl className="options">
          <div><dt>--frontend</dt><dd>User-facing product interfaces.</dd></div>
          <div><dt>--backend</dt><dd>The systems behind them.</dd></div>
          <div><dt>--product-systems</dt><dd>Structure, tradeoffs, and execution.</dd></div>
        </dl>
      </section>

      <section>
        <h2>ENVIRONMENT</h2>
        <dl className="environment">
          <div><dt>LOCATION</dt><dd>{siteConfig.location}</dd></div>
          <div><dt>EDUCATION</dt><dd>B.S. Computer Science</dd></div>
        </dl>
      </section>

      <section>
        <h2>SEE ALSO</h2>
        <p className="see-also">
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">github(1)</a>,{" "}
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">linkedin(1)</a>,{" "}
          <a href={`mailto:${siteConfig.email}`}>mail(1)</a>
        </p>
      </section>

      <footer className="man-footer">
        <p>smmeyer.dev</p>
        <p className="prompt" aria-label="End of manual">:</p>
        <p>STEVEN-MEYER(1)</p>
      </footer>
    </article>
  );
}
