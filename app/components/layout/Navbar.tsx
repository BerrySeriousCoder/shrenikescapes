"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${isScrolled ? "bg-black/40 backdrop-blur-md py-4" : "bg-transparent py-8"}`}>
      <nav className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-6 md:px-12 relative">

        {/* Left Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-light tracking-wider text-white/90">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/tours" className="hover:text-white transition-colors">Tours</Link>
          <Link href="/journals" className="hover:text-white transition-colors">Journals</Link>
          <Link href="/weddings" className="hover:text-white transition-colors">Weddings</Link>
        </div>

        {/* Center Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
          <Image src="/images/logo-light.png" alt="Shrenik Escapes Logo" width={180} height={50} className="object-contain" priority />
        </Link>

        <Link href="/" className="md:hidden flex items-center">
          <Image src="/images/logo-light.png" alt="Shrenik Escapes Logo" width={130} height={40} className="object-contain" priority />
        </Link>

        {/* Right Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-light tracking-wider text-white/90">
          <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          <Link
            href="/contact"
            className="border border-white/40 hover:border-white px-6 py-2 rounded-full transition-all text-white font-bold"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button  */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
    </div>
  );
}
