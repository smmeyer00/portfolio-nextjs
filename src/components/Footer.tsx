import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-frame footer-inner">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <p>{siteConfig.location}</p>
      </div>
    </footer>
  );
}
