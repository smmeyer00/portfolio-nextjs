import type { Metadata, Viewport } from "next";
import "./globals.css";
import { bodyFont, displayFont } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { defaultOpenGraphImage, openGraphBase, siteConfig } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.baseUrl,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: siteConfig.employer,
  },
  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name} | Software Engineer`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.shortDescription,
  keywords: [...siteConfig.keywords],
  openGraph: {
    ...openGraphBase,
    title: `${siteConfig.name} | Software Engineer`,
    description: siteConfig.shortDescription,
    type: "website",
    url: siteConfig.baseUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Software Engineer`,
    description: siteConfig.shortDescription,
    images: [defaultOpenGraphImage.url],
  },
  alternates: {
    types: {
      "application/rss+xml": `${siteConfig.baseUrl}/feed.xml`,
    },
  },
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101410",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          key="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${bodyFont.variable} ${displayFont.variable} flex min-h-screen flex-col antialiased`}
      >
        <Navbar navItems={siteConfig.navItems.map((item) => ({ ...item }))} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
