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

export const profileIndex = [
  {
    label: "Current",
    value: "Software Engineer · Amazon Music",
  },
  {
    label: "Practice",
    value: "Marketing technology · Server-driven UI · AI-assisted tooling",
  },
  {
    label: "Range",
    value: "Frontend · Backend · Product systems",
  },
  {
    label: "Based",
    value: siteConfig.location,
  },
] as const;
