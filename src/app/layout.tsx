import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.CF_PAGES_URL ??
    "https://tortoise-website.pages.dev",
);

export const metadata: Metadata = {
  metadataBase,
  title: "Tortoise — Windows driver updates, with the why included",
  description:
    "A transparent Windows driver inventory and update utility. See what is installed, what Windows recommends, and the reasoning and risk behind a plan before anything changes.",
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
    title: "Tortoise — Windows driver updates, with the why included",
    description:
      "See what is installed, what Windows recommends, and the reasoning and risk behind a plan.",
    siteName: "Tortoise",
  },
  twitter: {
    card: "summary",
    title: "Tortoise — Windows driver updates, with the why included",
    description: "Transparent Windows driver inventory and update review.",
  },
  icons: {
    icon: "/tortoise-mark.svg",
    shortcut: "/tortoise-mark.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#14251c",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
