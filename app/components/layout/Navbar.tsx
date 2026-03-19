"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/tours", label: "Tours" },
  { href: "/journals", label: "Journals" },
  { href: "/weddings", label: "Weddings" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 transition-all duration-700 ease-in-out ${isMenuOpen ? "z-[60]" : "z-50"} ${isScrolled ? "bg-black/40 backdrop-blur-md py-4" : "bg-transparent py-8"}`}>
        <nav className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12 relative">

          {/* Left Links (desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-light tracking-wider text-white/90">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="/tours" className="hover:text-white transition-colors">Tours</Link>
            <Link href="/journals" className="hover:text-white transition-colors">Journals</Link>
            <Link href="/weddings" className="hover:text-white transition-colors">Weddings</Link>
          </div>

          {/* Center Logo (desktop only) */}
          <Link href="/" className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
            <Image src="/images/logo-light.png" alt="Shrenik Escapes Logo" width={180} height={50} className="object-contain" priority />
          </Link>

          {/* Mobile Logo (left-aligned, mobile only) */}
          <Link href="/" className="md:hidden flex items-center">
            <Image src="/images/logo-light.png" alt="Shrenik Escapes Logo" width={130} height={40} className="object-contain" priority />
          </Link>

          {/* Right Links (desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-light tracking-wider text-white/90">
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            <Link
              href="/contact"
              className="border border-white/40 hover:border-white px-6 py-2 rounded-full transition-all text-white font-bold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white z-[60] relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-light tracking-widest text-white/80 hover:text-white transition-all duration-300 ${
                isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? `${index * 80}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className={`mt-4 border border-white/40 hover:border-white px-8 py-3 rounded-full text-white font-bold tracking-wider transition-all duration-300 ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isMenuOpen ? `${NAV_LINKS.length * 80}ms` : "0ms" }}
          >
            Book Now
          </Link>
        </nav>
      </div>
    </>
  );
}
