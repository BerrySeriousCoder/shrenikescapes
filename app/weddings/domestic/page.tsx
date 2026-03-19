"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { weddings, Wedding } from "../../../lib/data/weddings";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DomesticWeddings() {
  const domWeddings = weddings.filter((w: Wedding) => w.region === "domestic");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="bg-[var(--color-brand-cream)] min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full pt-24 mb-12">
         <Image 
           src="/images/banners/Jaipur Desktop.jpg"
           alt="Domestic Weddings Hero"
           fill
           priority
           className="object-cover object-top"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-[#351025]/80 via-[#351025]/40 to-[var(--color-brand-cream)]"></div>
         
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 pt-20">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             className="bg-[var(--color-brand-cream)]/10 backdrop-blur-md border border-[var(--color-brand-cream)]/30 rounded-full px-6 py-2 mb-8"
           >
             <span className="text-[var(--color-brand-yellow)] font-bold tracking-widest uppercase text-sm">Royal Celebrations</span>
           </motion.div>
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[var(--color-brand-cream)] mb-6 tracking-tighter mix-blend-overlay">
             Domestic <br /> Romance
           </h1>
           <p className="text-xl md:text-3xl text-[var(--color-brand-cream)]/90 max-w-3xl font-light">
             Exchange vows against the backdrop of India&apos;s most majestic venues.
           </p>
         </div>
      </div>

      {/* Main Listing Section - Immersive Accordion/Listings */}
      <section className="pb-32 px-4 md:px-8 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col gap-4 md:gap-8">
          {domWeddings.map((wedding: Wedding, index: number) => {
            const isHovered = hoveredId === wedding.id;
            
            return (
              <Link 
                key={wedding.id} 
                href={`/weddings/domestic/${wedding.id}`} 
                className="group relative w-full rounded-[2rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex cursor-pointer shadow-xl border border-[var(--color-brand-green)]/10"
                style={{ height: isHovered ? "600px" : "250px" }}
                onMouseEnter={() => setHoveredId(wedding.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image */}
                <Image 
                  src={wedding.image} 
                  alt={wedding.title}
                  fill
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2a0c1d]/90 via-[#351025]/50 to-transparent transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Content Container */}
                <div className="relative z-10 w-full h-full p-8 md:p-14 flex flex-col justify-between">
                  
                  {/* Top Row: Index & Tags */}
                  <div className="flex justify-between items-start">
                    <span className="text-[var(--color-brand-yellow)] font-mono text-2xl md:text-4xl font-light opacity-60">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="flex gap-3 text-right">
                      {wedding.tags.map((tag: string) => (
                        <span key={tag} className="block text-white/80 text-sm font-bold tracking-widest uppercase mb-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Row / Main Data */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between w-full">
                    <div className="max-w-xl">
                      <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--color-brand-cream)] tracking-tighter mb-2 transition-transform duration-500 transform origin-left group-hover:scale-105">
                        {wedding.title}
                      </h3>
                      
                      {/* Expanded Content */}
                      <div className={`overflow-hidden transition-all duration-700 delay-100 ${isHovered ? "max-h-40 opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"}`}>
                        <p className="text-xl md:text-2xl text-[var(--color-brand-cream)]/90 font-light leading-relaxed">
                          {wedding.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 md:mt-0 flex items-center justify-between w-full md:w-auto gap-6">
                      <span className="text-[var(--color-brand-yellow)] text-xl md:text-3xl font-bold border-b-2 border-[var(--color-brand-yellow)]/30 pb-2">
                        {wedding.duration}
                      </span>
                      
                      {/* FAB Icon */}
                      <div className="w-16 h-16 rounded-full bg-[var(--color-brand-cream)] flex items-center justify-center text-[#1c305a] transform transition-transform duration-500 group-hover:rotate-45 group-hover:bg-[#F3C10A] group-hover:text-[#1c305a] shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
