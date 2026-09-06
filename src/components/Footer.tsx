import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-frame footer-inner">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <nav aria-label="Footer links" className="footer-links">
          <a href={`mailto:${siteConfig.email}`}>Email</a>
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
