import { Manrope, Outfit } from "next/font/google";

export const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const displayFont = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});
