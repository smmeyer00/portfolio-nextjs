import { Instrument_Sans, Newsreader } from "next/font/google";

export const bodyFont = Instrument_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const displayFont = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
