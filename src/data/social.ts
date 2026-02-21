import { Mail, Linkedin, Github } from "lucide-react";

export interface SocialLink {
  name: string;
  value: string;
  href: string;
  icon: typeof Mail;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    value: "smmeyer00@gmail.com",
    href: "mailto:smmeyer00@gmail.com",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    value: "in/smmeyer00",
    href: "https://linkedin.com/in/smmeyer00",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    value: "smmeyer00",
    href: "https://github.com/smmeyer00",
    icon: Github,
  },
];
