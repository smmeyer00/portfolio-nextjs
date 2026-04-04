import type { Metadata } from "next";
import "./globals.css";
import { robotoSans } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const baseUrl = "https://smmeyer.dev";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Steven Meyer",
  url: baseUrl,
  jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Amazon",
    },
  sameAs: [
    "https://github.com/smmeyer00",
    "https://linkedin.com/in/smmeyer00",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Steven Meyer | Software Engineer",
    template: "%s | Steven Meyer",
  },
  description: "I build.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Steven Meyer",
    title: "Steven Meyer | Software Engineer",
    description: "I build.",
    images: [
      {
        url: `${baseUrl}/kings_canyon_film.jpg`,
        alt: "Steven Meyer - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steven Meyer | Software Engineer",
    description: "I build.",
    images: [`${baseUrl}/kings_canyon_film.jpg`],
  },
  authors: [{ name: "Steven Meyer" }],
  creator: "Steven Meyer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <script
          key="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${robotoSans.className} antialiased min-h-screen flex flex-col bg-background-900`}
      >
        <AnimatedBackground />
        <Navbar
          navItems={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "BookRecs", href: "/book-recs" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <main id="main-content">{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
