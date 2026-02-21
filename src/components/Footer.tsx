import { socialLinks } from "@/data/social";

export default function Footer() {
  return (
    <footer className="bg-background-900 text-background-300 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-500 transition-colors duration-300"
                aria-label={`Visit ${social.name}`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
          <div className="text-sm text-background-400">
            © {new Date().getFullYear()} Steven Meyer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
