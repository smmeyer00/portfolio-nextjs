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
    <article className="home-page">
      <header>
        <h1>Steven Meyer</h1>
        <p><small>Software engineer · {siteConfig.location}</small></p>
      </header>

      <hr />

      <p>
        Hello. I build product systems at Amazon Music. My work spans frontend and
        backend, with a current focus on marketing technology and AI-assisted tools.
      </p>

      <dl>
        <div>
          <dt>Current role</dt>
          <dd>Software Engineer, Amazon Music</dd>
        </div>
        <div>
          <dt>Work</dt>
          <dd>Product systems, frontend, and backend</dd>
        </div>
        <div>
          <dt>Education</dt>
          <dd>B.S. Computer Science</dd>
        </div>
      </dl>

      <h2>Off the clock</h2>
      <p>I read philosophy and fiction, hike in California, and build small experiments.</p>

      <h2>Elsewhere</h2>
      <ul>
        <li><a href={`mailto:${siteConfig.email}`}>Email</a></li>
        <li><a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>

      <hr />

      <footer>
        <small>Last updated September 2026. Plain HTML on purpose.</small>
      </footer>
    </article>
  );
}
