import { Mail, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/data/site";

export interface SocialLink {
  name: string;
  value: string;
  href: string;
  icon: typeof Mail;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "in/smmeyer00",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "smmeyer00",
    href: siteConfig.social.github,
    icon: Github,
  },
];
