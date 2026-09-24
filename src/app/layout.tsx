import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});
const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.CF_PAGES_URL ??
    "https://tortoise-website.pages.dev",
);

export const metadata: Metadata = {
  metadataBase,
  title: "Tortoise — A paper trail for every driver change",
  description:
    "A safety-first Windows 11 driver utility. Trace local device inventory and Windows Update offers into a reviewable plan. Driver installation is disabled in public builds.",
  applicationName: "Tortoise",
  keywords: [
    "Windows driver management",
    "driver inventory",
    "Windows Update",
    "device drivers",
    "Tortoise",
  ],
  openGraph: {
    type: "website",
    title: "Tortoise — A paper trail for every driver change",
    description:
      "Trace local device inventory and Windows Update offers into a reviewable plan. Driver installation is disabled in public builds.",
    siteName: "Tortoise",
  },
  twitter: {
    card: "summary",
    title: "Tortoise — A paper trail for every driver change",
    description: "Transparent Windows driver inventory and update review.",
  },
  icons: {
    icon: "/tortoise-mark.svg",
    shortcut: "/tortoise-mark.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f2eee3",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
