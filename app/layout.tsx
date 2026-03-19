import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/app/components/providers/LenisProvider";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shrenik Escapes | Journeys Crafted For You",
  description:
    "Shrenik Escapes curates extraordinary travel experiences and destination weddings across the globe. From the temples of Japan to the beaches of Bali — let us craft your perfect escape.",
  icons: {
    icon: "/images/favicon-light.png",
    apple: "/images/favicon-light.png",
  },
  openGraph: {
    title: "Shrenik Escapes | Journeys Crafted For You",
    description:
      "Curated luxury travel experiences and destination weddings across the globe. Discover extraordinary escapes designed for the discerning traveler.",
    siteName: "Shrenik Escapes",
    images: [
      {
        url: "/images/favicon-light.png",
        width: 512,
        height: 512,
        alt: "Shrenik Escapes",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Shrenik Escapes | Journeys Crafted For You",
    description:
      "Curated luxury travel experiences and destination weddings across the globe.",
    images: ["/images/favicon-light.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakartaSans.variable} antialiased min-h-screen flex flex-col`}
      >
        <LenisProvider>
          <main className="flex-grow">
            {children}
          </main>
        </LenisProvider>
      </body>
    </html>
  );
}
