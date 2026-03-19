"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ToursHub() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  // Width calculations based on hover state (desktop only)
  const leftWidth = hoveredSide === "left" ? "md:w-[70vw]" : hoveredSide === "right" ? "md:w-[30vw]" : "md:w-[50vw]";
  const rightWidth = hoveredSide === "right" ? "md:w-[70vw]" : hoveredSide === "left" ? "md:w-[30vw]" : "md:w-[50vw]";

  return (
    <div className="relative w-full h-screen bg-[var(--color-brand-cream)]">
      
      {/* Back button */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-50">
        <Link href="/" className="flex items-center text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full transition-all text-sm md:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back
        </Link>
      </div>

      <div className="absolute top-20 md:top-12 left-0 right-0 z-40 text-center pointer-events-none px-4">
         <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl tracking-widest uppercase">Where to?</h1>
      </div>

      {/* Mobile: vertical split screen */}
      <div className="flex flex-col md:hidden w-full h-full">
        {/* International card */}
        <Link href="/tours/international" className="flex-1 w-full relative">
          <Image 
            src="/images/banners/Greece Desktop.jpg" 
            alt="International Escapes"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <h2 className="text-4xl font-bold text-[#F7F0DE] mb-3 text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter">
              International
            </h2>
            <span className="inline-block bg-[var(--color-brand-blue)] text-white px-6 py-2 rounded-full font-bold shadow-2xl">
              Explore the World
            </span>
          </div>
        </Link>

        {/* Domestic card */}
        <Link href="/tours/domestic" className="flex-1 w-full relative">
          <Image 
            src="/images/packages/domestic.jpg" 
            alt="Domestic Escapes"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <h2 className="text-4xl font-bold text-[#F7F0DE] mb-3 text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter">
              Domestic
            </h2>
            <span className="inline-block bg-[var(--color-brand-green)] text-white px-6 py-2 rounded-full font-bold shadow-2xl">
              Discover India
            </span>
          </div>
        </Link>
      </div>

      {/* Desktop: hover-expand layout (unchanged) */}
      <div className="hidden md:flex w-full h-full overflow-hidden">
        {/* Left Side: International */}
        <motion.div 
          layout
          className={`${leftWidth} relative h-full transition-all duration-700 ease-in-out cursor-pointer overflow-hidden group`}
          onMouseEnter={() => setHoveredSide("left")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <Image 
            src="/images/banners/Greece Desktop.jpg" 
            alt="International Escapes"
            fill
            className="object-cover transform transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
             <h2 className="text-7xl lg:text-8xl font-bold text-[#F7F0DE] mb-6 text-center whitespace-nowrap drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter mix-blend-overlay">
                International
             </h2>
             <div className={`overflow-hidden transition-all duration-700 ${hoveredSide === "left" ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
               <Link 
                 href="/tours/international" 
                 className="inline-block bg-[var(--color-brand-blue)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-brand-yellow)] hover:text-[var(--color-brand-green)] transition-colors shadow-2xl"
               >
                 Explore the World
               </Link>
             </div>
          </div>
        </motion.div>

        {/* Right Side: Domestic */}
        <motion.div 
          layout
          className={`${rightWidth} relative h-full transition-all duration-700 ease-in-out cursor-pointer overflow-hidden group`}
          onMouseEnter={() => setHoveredSide("right")}
          onMouseLeave={() => setHoveredSide(null)}
        >
          <Image 
            src="/images/packages/domestic.jpg" 
            alt="Domestic Escapes"
            fill
            className="object-cover transform transition-transform duration-[2s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
             <h2 className="text-7xl lg:text-8xl font-bold text-[#F7F0DE] mb-6 text-center whitespace-nowrap drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter mix-blend-overlay">
                Domestic
             </h2>
             <div className={`overflow-hidden transition-all duration-700 ${hoveredSide === "right" ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
               <Link 
                 href="/tours/domestic" 
                 className="inline-block bg-[var(--color-brand-green)] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--color-brand-yellow)] hover:text-[var(--color-brand-green)] transition-colors shadow-2xl"
               >
                 Discover India
               </Link>
             </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
