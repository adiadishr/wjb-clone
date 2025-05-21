import { Geist, Geist_Mono, PT_Serif, Titillium_Web } from "next/font/google";

export const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const titiliumWeb = Titillium_Web({
  variable: "--font-titilium-web",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
})

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});