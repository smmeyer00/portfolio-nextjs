import Image from "next/image";
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
    <div className="site-frame page-content">
      <section className="editorial-profile" aria-labelledby="profile-heading">
        <div className="profile-copy">
          <p className="profile-label reveal">Steven Meyer · Software Engineer</p>
          <h1 id="profile-heading" className="reveal reveal-1">
            I work across frontend and backend at Amazon Music.
          </h1>
          <p className="profile-summary reveal reveal-2">
            My current work centers on marketing technology, server-driven product
            experiences, and AI-assisted tools.
          </p>

          <dl className="profile-notes reveal reveal-3">
            <div>
              <dt>Based</dt>
              <dd>{siteConfig.location}</dd>
            </div>
            <div>
              <dt>Elsewhere</dt>
              <dd>Philosophy, fiction, California trails, and small experiments.</dd>
            </div>
          </dl>
        </div>

        <figure className="portrait reveal reveal-2">
          <Image
            src="/kings_canyon_film.jpg"
            alt="Looking out over a mountain valley in Kings Canyon, California"
            fill
            sizes="(max-width: 700px) 100vw, 34vw"
            className="portrait-photo"
            priority
          />
          <span className="portrait-texture" aria-hidden="true" />
          <figcaption>Kings Canyon · California</figcaption>
        </figure>
      </section>
    </div>
  );
}
