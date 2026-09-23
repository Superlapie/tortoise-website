import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Fraunces } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-dm-sans", display: "swap" });
const serif = Fraunces({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-dm-serif", display: "swap" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono", display: "swap" });
const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.CF_PAGES_URL ??
    "https://tortoise-website.pages.dev",
);

export const metadata: Metadata = {
  metadataBase,
  title: "Tortoise — Driver updates, with the why included",
  description:
    "A transparent, safety-first Windows driver inventory and update utility. Know what is installed, understand what Windows recommends, and review the risk before you decide.",
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
    title: "Tortoise — Driver updates, with the why included",
    description:
      "Transparent Windows driver management. Built with care. Local by default.",
    siteName: "Tortoise",
    images: [
      {
        url: "/images/tortoise-hero.webp",
        width: 1254,
        height: 1254,
        alt: "A sculpted forest green Tortoise mascot with a connected-device shell.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tortoise — Driver updates, with the why included",
    description:
      "A transparent, safety-first Windows driver inventory and update utility.",
    images: ["/images/tortoise-hero.webp"],
  },
  icons: {
    icon: "/tortoise-mark.svg",
    shortcut: "/tortoise-mark.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f6ef",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-paper font-sans text-ink antialiased ${sans.variable} ${serif.variable} ${mono.variable}`}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="pointer-glow" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
