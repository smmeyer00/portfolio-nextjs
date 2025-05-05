import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/smmeyer00",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/smmeyer00",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:smmeyer00@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="bg-background-900 text-background-300 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
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
