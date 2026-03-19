"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const FEATURED_TOURS = [
  {
    title: "Egypt",
    duration: "10 Days",
    image: "/images/packages/Egypt.jpg",
    link: "/tours/international/egypt",
    tag: "History & Wonder",
    description: "Witness the enduring monumental works from the ancient world, perfectly preserved in the desert sands along the life-giving Nile."
  },
  {
    title: "Norway",
    duration: "14 Days",
    image: "/images/itineraries/tour/Norway/day-4.jpg",
    link: "/tours/international/norway",
    tag: "Arctic Wilderness",
    description: "Chase the northern lights and sail through dramatic ancient fjords carved by ice."
  },
  {
    title: "Jaipur",
    duration: "6 Days",
    image: "/images/itineraries/tour/Jaipur/jaipur.jpg",
    link: "/tours/domestic/jaipur",
    tag: "Royal Heritage",
    description: "Lose yourself in the vibrant colors, opulent palaces, and historic forts of the Pink City."
  },
  {
    title: "Ladakh",
    duration: "8 Days",
    image: "/images/itineraries/tour/Ladakh/day-5.jpg",
    link: "/tours/domestic/ladakh",
    tag: "Himalayan Expedition",
    description: "Traverse high altitude passes, serene monasteries, and crystal clear mountain lakes."
  },
  {
    title: "Japan",
    duration: "12 Days",
    image: "/images/packages/Japan.jpg",
    link: "/tours/international/japan",
    tag: "Culture & Tech",
    description: "Experience the harmonious blend of ancient traditions and ultra-modern cities."
  }
];

export default function FeaturedTours() {
  return (
    <section className="relative w-full bg-[var(--color-brand-cream)] pt-24 md:pt-48 pb-32 border-t border-[var(--color-brand-green)]/10">
      <div className="max-w-[1600px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <span className="text-[var(--color-brand-green)] tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-6 block border border-[var(--color-brand-green)]/20 rounded-full px-6 py-2">
            Exclusive Journeys
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-green)] tracking-tight flex flex-wrap justify-center items-center gap-4 md:gap-6">
             Featured
             <span className="font-fancy text-[var(--color-brand-yellow)] text-4xl md:text-6xl lg:text-7xl lowercase block font-normal mt-1 md:mt-2">itineraries</span>
          </h2>
        </motion.div>

        {/* Sprawling Editorial Grid Component */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-32 md:gap-y-48 w-full">
          
          {/* Main Hero Itinerary: Egypt */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-12 lg:col-span-9 block group relative"
          >
            <Link href={FEATURED_TOURS[0].link} className="block w-full overflow-hidden relative h-[60vh] md:h-[80vh]">
               <Image 
                 src={FEATURED_TOURS[0].image} 
                 alt={FEATURED_TOURS[0].title}
                 fill
                 className="object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
            </Link>
            <div className="mt-8 flex flex-col items-start w-full lg:w-3/4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[var(--color-brand-green)] font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">01 &mdash; {FEATURED_TOURS[0].tag}</span>
                <span className="text-[var(--color-brand-green)]/60 text-xs tracking-widest uppercase">{FEATURED_TOURS[0].duration}</span>
              </div>
              <Link href={FEATURED_TOURS[0].link} className="group-hover:text-[var(--color-brand-blue)] transition-colors inline-block w-full mb-6">
                <h3 className="text-5xl md:text-7xl text-[var(--color-brand-green)] font-light leading-none">
                  <span className="font-fancy text-6xl md:text-[6rem] text-[var(--color-brand-yellow)] lowercase mr-4 md:mr-6 inline-block transform translate-y-2">{FEATURED_TOURS[0].title}</span>
                  <span className="tracking-tight italic font-serif">Escape</span>
                </h3>
              </Link>
              <p className="text-[var(--color-brand-green)]/80 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8">
                {FEATURED_TOURS[0].description}
              </p>
              <Link href={FEATURED_TOURS[0].link} className="uppercase tracking-[0.2em] text-sm md:text-base font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-2 hover:border-[var(--color-brand-green)] transition-all">
                Discover The Journey
              </Link>
            </div>
          </motion.div>

          {/* Itinerary 2: Norway */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="md:col-span-6 lg:col-span-5 lg:col-start-1 block group relative"
          >
            <Link href={FEATURED_TOURS[1].link} className="block w-full overflow-hidden relative h-[50vh] md:h-[70vh]">
               <Image 
                 src={FEATURED_TOURS[1].image} 
                 alt={FEATURED_TOURS[1].title}
                 fill
                 className="object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
            </Link>
            <div className="mt-8 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[var(--color-brand-green)] font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">02 &mdash; {FEATURED_TOURS[1].tag}</span>
                <span className="text-[var(--color-brand-green)]/60 text-xs tracking-widest uppercase">{FEATURED_TOURS[1].duration}</span>
              </div>
              <Link href={FEATURED_TOURS[1].link} className="group-hover:text-[var(--color-brand-blue)] transition-colors inline-block w-full mb-6">
                <h3 className="text-4xl md:text-5xl text-[var(--color-brand-green)] font-light leading-none">
                  <span className="font-fancy text-5xl md:text-7xl text-[var(--color-brand-yellow)] lowercase mr-3 inline-block transform translate-y-2">{FEATURED_TOURS[1].title}</span>
                  <span className="tracking-tight italic font-serif">Escape</span>
                </h3>
              </Link>
              <p className="text-[var(--color-brand-green)]/80 text-lg font-light leading-relaxed mb-8">
                {FEATURED_TOURS[1].description}
              </p>
              <Link href={FEATURED_TOURS[1].link} className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-1 hover:border-[var(--color-brand-green)] transition-all">
                Discover
              </Link>
            </div>
          </motion.div>

          {/* Itinerary 3: Jaipur */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="md:col-span-6 lg:col-span-4 lg:col-start-8 block group relative md:-mt-24 lg:-mt-64"
          >
            <Link href={FEATURED_TOURS[2].link} className="block w-full overflow-hidden relative h-[60vh] md:h-[80vh]">
               <Image 
                 src={FEATURED_TOURS[2].image} 
                 alt={FEATURED_TOURS[2].title}
                 fill
                 className="object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
            </Link>
            <div className="mt-8 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[var(--color-brand-green)] font-semibold tracking-[0.2em] uppercase text-xs">03 &mdash; {FEATURED_TOURS[2].tag}</span>
                <span className="text-[var(--color-brand-green)]/60 text-xs tracking-widest uppercase">{FEATURED_TOURS[2].duration}</span>
              </div>
              <Link href={FEATURED_TOURS[2].link} className="group-hover:text-[var(--color-brand-blue)] transition-colors inline-block w-full mb-6">
                <h3 className="text-4xl md:text-5xl text-[var(--color-brand-green)] font-light leading-none">
                  <span className="font-fancy text-5xl md:text-7xl text-[var(--color-brand-yellow)] lowercase mr-3 inline-block transform translate-y-2">{FEATURED_TOURS[2].title}</span>
                  <span className="tracking-tight italic font-serif">Escape</span>
                </h3>
              </Link>
              <p className="text-[var(--color-brand-green)]/80 text-lg font-light leading-relaxed mb-8">
                {FEATURED_TOURS[2].description}
              </p>
              <Link href={FEATURED_TOURS[2].link} className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-1 hover:border-[var(--color-brand-green)] transition-all">
                Discover
              </Link>
            </div>
          </motion.div>

          {/* Itinerary 4: Ladakh */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="md:col-span-6 lg:col-span-6 lg:col-start-2 block group relative"
          >
            <Link href={FEATURED_TOURS[3].link} className="block w-full overflow-hidden relative h-[50vh] md:h-[60vh]">
               <Image 
                 src={FEATURED_TOURS[3].image} 
                 alt={FEATURED_TOURS[3].title}
                 fill
                 className="object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
            </Link>
            <div className="mt-8 flex flex-col items-start w-full lg:w-3/4 mx-auto lg:mx-0 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-4 w-full">
                <span className="text-[var(--color-brand-green)] font-semibold tracking-[0.2em] uppercase text-xs">04 &mdash; {FEATURED_TOURS[3].tag}</span>
                <span className="text-[var(--color-brand-green)]/60 text-xs tracking-widest uppercase">{FEATURED_TOURS[3].duration}</span>
              </div>
              <Link href={FEATURED_TOURS[3].link} className="group-hover:text-[var(--color-brand-blue)] transition-colors inline-block w-full mb-6">
                <h3 className="text-4xl md:text-5xl text-[var(--color-brand-green)] font-light leading-none">
                  <span className="font-fancy text-5xl md:text-7xl text-[var(--color-brand-yellow)] lowercase mr-3 inline-block transform translate-y-2">{FEATURED_TOURS[3].title}</span>
                  <span className="tracking-tight italic font-serif">Escape</span>
                </h3>
              </Link>
              <p className="text-[var(--color-brand-green)]/80 text-lg font-light leading-relaxed mb-8 mx-auto lg:mx-0">
                {FEATURED_TOURS[3].description}
              </p>
              <Link href={FEATURED_TOURS[3].link} className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-1 hover:border-[var(--color-brand-green)] transition-all">
                Discover
              </Link>
            </div>
          </motion.div>

          {/* Itinerary 5: Japan */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="md:col-span-6 lg:col-span-4 lg:col-start-9 block group relative md:-mt-32 lg:-mt-48"
          >
            <Link href={FEATURED_TOURS[4].link} className="block w-full overflow-hidden relative h-[60vh] md:h-[70vh]">
               <Image 
                 src={FEATURED_TOURS[4].image} 
                 alt={FEATURED_TOURS[4].title}
                 fill
                 className="object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
            </Link>
            <div className="mt-8 flex flex-col items-start w-full">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[var(--color-brand-green)] font-semibold tracking-[0.2em] uppercase text-xs">05 &mdash; {FEATURED_TOURS[4].tag}</span>
                <span className="text-[var(--color-brand-green)]/60 text-xs tracking-widest uppercase">{FEATURED_TOURS[4].duration}</span>
              </div>
              <Link href={FEATURED_TOURS[4].link} className="group-hover:text-[var(--color-brand-blue)] transition-colors inline-block w-full mb-6">
                <h3 className="text-4xl md:text-5xl text-[var(--color-brand-green)] font-light leading-none">
                  <span className="font-fancy text-5xl md:text-7xl text-[var(--color-brand-yellow)] lowercase mr-3 inline-block transform translate-y-2">{FEATURED_TOURS[4].title}</span>
                  <span className="tracking-tight italic font-serif">Escape</span>
                </h3>
              </Link>
              <p className="text-[var(--color-brand-green)]/80 text-lg font-light leading-relaxed mb-8">
                {FEATURED_TOURS[4].description}
              </p>
              <Link href={FEATURED_TOURS[4].link} className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-1 hover:border-[var(--color-brand-green)] transition-all">
                Discover
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Global CTA - Editorial Layout */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.8 }}
           className="mt-32 md:mt-48 pt-24 md:pt-48 border-t border-[var(--color-brand-green)]/20 text-center max-w-[1600px] mx-auto flex flex-col items-center"
        >
           <span className="text-[var(--color-brand-green)]/60 tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-10 block">Continue the Journey</span>
           
           <h4 className="text-5xl md:text-7xl lg:text-[8rem] font-light text-[var(--color-brand-green)] mb-12 tracking-tight leading-none">
             Looking for something <br className="hidden md:block" />
             <span className="font-fancy text-[var(--color-brand-yellow)] text-7xl md:text-[9rem] lg:text-[11rem] lowercase block mt-2 md:mt-4 ml-[-0.1em]">different?</span>
           </h4>
           
           <p className="text-xl md:text-2xl text-[var(--color-brand-green)]/80 font-light max-w-2xl mx-auto mb-16 md:mb-24 leading-relaxed px-4">
             We curate dozens of unique itineraries spanning the world's most stunning landscapes and most exclusive global events.
           </p>
           
           <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-center justify-center">
             <Link href="/tours" className="group flex items-center text-[var(--color-brand-green)] hover:text-[var(--color-brand-yellow)] transition-colors">
               <span className="uppercase tracking-[0.2em] text-sm md:text-base font-bold border-b border-[var(--color-brand-green)] group-hover:border-[var(--color-brand-yellow)] pb-2 transition-colors">
                 Discover All Tours
               </span>
             </Link>
             
             <span className="hidden sm:block text-[var(--color-brand-green)]/20 text-2xl font-light">/</span>
             
             <Link href="/weddings" className="group flex items-center text-[var(--color-brand-green)] hover:text-[var(--color-brand-yellow)] transition-colors">
               <span className="uppercase tracking-[0.2em] text-sm md:text-base font-bold border-b border-[var(--color-brand-green)] group-hover:border-[var(--color-brand-yellow)] pb-2 transition-colors">
                 Discover Weddings
               </span>
             </Link>
           </div>
        </motion.div>

      </div>
    </section>
  );
}
