import { Barlow_Condensed, IBM_Plex_Mono } from "next/font/google";

export const displayFont = Barlow_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const monoFont = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
