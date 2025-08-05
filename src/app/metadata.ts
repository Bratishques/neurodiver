import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://neurodivergent.com'),
  title: "NEURODIVERGENT",
  openGraph: {
    title: "NEURODIVERGENT",
    siteName: "NEURODIVERGENT",
    images: [
      {
        url: "/images/opengraph.png",
        width: 1200,
        height: 630,
        alt: "NEURODIVERGENT Platform",
      },
    ],
    locale: "en_EN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEURODIVERGENT",
    images: ["/images/opengraph.png"],
  },
  icons: {
    icon: [
      { url: "/favs/favicon-16.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favs/favicon-32.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favs/favicon-48.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favs/favicon-64.ico", sizes: "64x64", type: "image/x-icon" },
      { url: "/favs/favicon-96.ico", sizes: "96x96", type: "image/x-icon" },
      { url: "/favs/favicon-196.ico", sizes: "196x196", type: "image/x-icon" },
      { url: "/favs/favicon-256.ico", sizes: "256x256", type: "image/x-icon" },
    ],
    shortcut: "/favs/favicon-256.ico",
    apple: "/favs/favicon-256.ico",
  },
}; 