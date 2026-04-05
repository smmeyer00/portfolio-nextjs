export const siteConfig = {
  name: "Steven Meyer",
  firstName: "Steven",
  shortDescription:
    "Software engineer at Amazon Music with a product-minded approach to frontend, backend, and user experience.",
  longDescription:
    "I work across frontend and backend, thinking in product terms: what matters, what's noise, and what's worth building well.",
  baseUrl: "https://smmeyer.dev",
  location: "San Francisco Bay Area",
  employer: "Amazon Music",
  email: "smmeyer00@gmail.com",
  availability: "Happy to talk about product, engineering, and interesting problems.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Reading", href: "/reading" },
    { label: "Notes", href: "/notes" },
    { label: "Contact", href: "/contact" },
  ],
  social: {
    github: "https://github.com/smmeyer00",
    linkedin: "https://linkedin.com/in/smmeyer00",
  },
  keywords: [
    "Steven Meyer",
    "Steven Meyer software engineer",
    "product-minded software engineer",
    "frontend and backend engineer",
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

export const aboutTimeline = [
  {
    period: "Now",
    title: "Software Engineer at Amazon Music",
    detail:
      "Working on marketing technology across the interfaces and systems behind messaging experiences and internal tools.",
  },
  {
    period: "2023",
    title: "Graduated from Southern Illinois University Edwardsville",
    detail:
      "Earned a B.S. in Computer Science with a minor in Mathematics from Southern Illinois University Edwardsville, graduating cum laude.",
  },
];

export const aboutFacts = [
  {
    label: "Role",
    value: `Software Engineer at ${siteConfig.employer}`,
  },
  {
    label: "Location",
    value: siteConfig.location,
  },
  {
    label: "Education",
    value: "B.S. in Computer Science, minor in Mathematics",
  },
];
