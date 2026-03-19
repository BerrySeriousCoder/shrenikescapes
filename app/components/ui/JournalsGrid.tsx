"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { JOURNALS } from "@/lib/data/journals";

export default function JournalsGrid() {
  return (
    <section className="py-24 md:py-48 bg-[var(--color-brand-cream)] relative overflow-hidden border-t border-[var(--color-brand-green)]/10">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 mb-16 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end gap-12"
        >
          <div className="max-w-2xl">
             <span className="text-[var(--color-brand-yellow)] tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-6 block">Tales from the Road</span>
             <h3 className="text-5xl md:text-7xl font-light text-[var(--color-brand-green)] tracking-tight leading-none">
               Travel <br />
               <span className="font-fancy text-[var(--color-brand-yellow)] text-7xl md:text-[9rem] lowercase block mt-2 ml-[-0.1em]">journals</span>
             </h3>
          </div>
          <Link 
            href="/journals" 
            className="flex items-center text-[var(--color-brand-green)] hover:text-[var(--color-brand-yellow)] transition-all group"
          >
             <span className="uppercase tracking-[0.2em] text-xs font-bold border-b border-[var(--color-brand-green)] group-hover:border-[var(--color-brand-yellow)] pb-1 transition-colors">
               Read The Full Collection
             </span>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-3 transform group-hover:translate-x-2 transition-transform">
               <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
             </svg>
          </Link>
        </motion.div>
      </div>

      {/* Magazine Shelf Slider */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full relative"
      >
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-6 md:pl-12 lg:pl-24 pr-24 pb-16 gap-8 md:gap-16 cursor-grab active:cursor-grabbing">
          {JOURNALS.slice(0, 10).map((journal, index) => (
             <Link 
               key={index}
               href={`/journals/${journal.slug}`}
               className="snap-center md:snap-start shrink-0 w-[85vw] md:w-[400px] lg:w-[480px] flex flex-col group relative"
             >
                {/* Magazine Cover */}
                <div className="w-full aspect-[3/4] relative overflow-hidden bg-black/5 transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
                   <Image 
                     src={journal.image}
                     alt={journal.title}
                     fill
                     className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                     sizes="(max-width: 768px) 85vw, 480px"
                   />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                {/* Typography Below */}
                <div className="mt-8 flex flex-col items-start px-2">
                   <div className="flex items-center gap-4 mb-4">
                     <span className="text-[var(--color-brand-green)]/60 text-xs tracking-widest uppercase">{journal.date}</span>
                     <span className="text-[var(--color-brand-green)] text-xs font-bold uppercase tracking-[0.2em]">{journal.destination}</span>
                   </div>
                   
                   <h4 className="text-3xl md:text-4xl font-light text-[var(--color-brand-green)] mb-6 leading-tight group-hover:text-[var(--color-brand-blue)] transition-colors">
                     {journal.title}
                   </h4>
                   
                   <p className="text-[var(--color-brand-green)]/70 line-clamp-3 font-light leading-relaxed mb-8">
                     {journal.intro}
                   </p>
                   
                   <span className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-1 group-hover:border-[var(--color-brand-green)] transition-all">
                     Read Story
                   </span>
                </div>
             </Link>
          ))}
          
          {/* View All Journals Card */}
          <Link 
            href="/journals"
            className="snap-center md:snap-start shrink-0 w-[85vw] md:w-[400px] lg:w-[480px] flex flex-col group relative"
          >
             {/* Magazine Cover */}
             <div className="w-full aspect-[3/4] relative overflow-hidden bg-black/5 transform transition-transform duration-700 ease-out group-hover:-translate-y-2">
                <Image 
                  src="/images/packages/Japan.jpg"
                  alt="Explore all journals"
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 480px"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 flex flex-col justify-center items-center">
                   <h4 className="text-4xl md:text-5xl font-light text-white leading-tight text-center drop-shadow-lg">
                      Read all <br/>
                      <span className="font-fancy text-[var(--color-brand-yellow)] text-5xl md:text-6xl lowercase block mt-2">journals</span>
                   </h4>
                </div>
             </div>
             
             {/* Typography Below */}
             <div className="mt-8 flex flex-col items-start px-2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[var(--color-brand-green)]/60 text-xs tracking-widest uppercase opacity-0">DATE</span>
                  <span className="text-[var(--color-brand-yellow)] text-xs font-bold uppercase tracking-[0.2em] bg-[var(--color-brand-green)] text-white px-3 py-1 rounded-full">Archive</span>
                </div>
                
                <h4 className="text-3xl md:text-4xl font-light text-[var(--color-brand-green)] mb-6 leading-tight group-hover:text-[var(--color-brand-blue)] transition-colors">
                  The Full Collection
                </h4>
                
                <p className="text-[var(--color-brand-green)]/70 line-clamp-3 font-light leading-relaxed mb-8">
                  Lose yourself in our expansive library of curated travel stories. From the icy fjords of the Arctic to the sun-drenched savannas of Africa.
                </p>
                
                <span className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-1 group-hover:border-[var(--color-brand-green)] transition-all">
                  Browse All
                </span>
             </div>
          </Link>
          
          {/* Empty Space at end for perfect scrolling padding */}
          <div className="shrink-0 w-6 md:w-12"></div>
        </div>
      </motion.div>
      
      {/* Global CSS for hiding scrollbars perfectly across browsers */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
