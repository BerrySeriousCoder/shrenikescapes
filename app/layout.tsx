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
  description: "Curated escapes and unforgettable destination celebrations.",
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
