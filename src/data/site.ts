export const siteConfig = {
  name: "Steven Meyer",
  firstName: "Steven",
  shortDescription:
    "Software engineer at Amazon Music building product systems across frontend and backend.",
  longDescription:
    "I build product systems across frontend and backend, currently focused on marketing technology and AI-assisted tooling.",
  baseUrl: "https://smmeyer.dev",
  location: "San Francisco Bay Area",
  employer: "Amazon Music",
  email: "smmeyer00@gmail.com",
  social: {
    github: "https://github.com/smmeyer00",
    linkedin: "https://linkedin.com/in/smmeyer00",
  },
  keywords: [
    "Steven Meyer",
    "Steven Meyer software engineer",
    "product systems engineer",
    "frontend and backend software engineer",
    "Amazon Music engineer",
    "San Francisco Bay Area software engineer",
  ],
} as const;

export const defaultOpenGraphImage = {
  url: `${siteConfig.baseUrl}/kings_canyon_film.jpg`,
  alt: `${siteConfig.name} - Software Engineer`,
};

export const openGraphBase = {
  locale: "en_US",
  siteName: siteConfig.name,
  images: [defaultOpenGraphImage],
};

export const selectedWork = [
  {
    number: "01",
    title: "Marketing systems",
    description:
      "Interfaces and backend systems behind messaging experiences and internal workflows.",
    focus: "Product engineering · Frontend + backend",
    status: "Current",
  },
  {
    number: "02",
    title: "Server-driven UI",
    description:
      "Infrastructure for evolving product experiences without coupling every change to a client release.",
    focus: "Systems design · UI architecture",
    status: "Amazon Music",
  },
  {
    number: "03",
    title: "AI-assisted tooling",
    description:
      "Tools that translate marketing intent into structured, executable campaigns.",
    focus: "Product systems · Applied AI",
    status: "In practice",
  },
] as const;
