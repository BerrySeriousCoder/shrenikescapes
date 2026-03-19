"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WeddingsHub() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);

  // Width calculations based on hover state
  const leftWidth = hoveredSide === "left" ? "w-[70vw]" : hoveredSide === "right" ? "w-[30vw]" : "w-[50vw]";
  const rightWidth = hoveredSide === "right" ? "w-[70vw]" : hoveredSide === "left" ? "w-[30vw]" : "w-[50vw]";

  return (
    <div className="flex w-full h-screen overflow-hidden bg-[var(--color-brand-cream)] font-sans">
      
      <div className="absolute top-8 left-8 z-50">
        <Link href="/" className="flex items-center text-white bg-black/20 hover:bg-black/40 backdrop-blur-md px-4 py-2 rounded-full transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Home
        </Link>
      </div>

      <div className="absolute top-12 left-0 right-0 z-40 text-center pointer-events-none">
         <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-xl tracking-widest uppercase">The Celebration</h1>
      </div>

      {/* Left Side: International Weddings */}
      <motion.div 
        layout
        className={`${leftWidth} relative h-full transition-all duration-700 ease-in-out cursor-pointer overflow-hidden group`}
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <Image 
          src="/images/banners/Greece Desktop.jpg" // A romantic international backdrop
          alt="International Weddings"
          fill
          className="object-cover transform transition-transform duration-[2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
           <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F7F0DE] mb-6 text-center whitespace-nowrap drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter mix-blend-overlay">
              International
           </h2>
           <div className={`overflow-hidden transition-all duration-700 ${hoveredSide === "left" ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
             <Link 
               href="/weddings/international" 
               className="inline-block bg-[#F7F0DE] text-[#215D2D] border border-[#F7F0DE] px-10 py-4 rounded-full font-bold text-lg hover:bg-transparent hover:text-[#F7F0DE] transition-all shadow-2xl"
             >
               Global Romance
             </Link>
           </div>
        </div>
      </motion.div>

      {/* Right Side: Domestic Weddings */}
      <motion.div 
        layout
        className={`${rightWidth} relative h-full transition-all duration-700 ease-in-out cursor-pointer overflow-hidden group`}
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <Image 
          src="/images/packages/domestic.jpg" // A royal domestic backdrop
          alt="Domestic Weddings"
          fill
          className="object-cover transform transition-transform duration-[2s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-[#351025]/40 group-hover:bg-[#351025]/20 mix-blend-multiply transition-colors duration-700"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
           <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#F7F0DE] mb-6 text-center whitespace-nowrap drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] tracking-tighter mix-blend-overlay">
              Domestic
           </h2>
           <div className={`overflow-hidden transition-all duration-700 ${hoveredSide === "right" ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}>
             <Link 
               href="/weddings/domestic" 
               className="inline-block bg-[#F3C10A] text-[#215D2D] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F7F0DE] transition-all shadow-2xl"
             >
               Royal Heritage
             </Link>
           </div>
        </div>
      </motion.div>

    </div>
  );
}
