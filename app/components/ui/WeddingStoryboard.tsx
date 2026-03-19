"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const WEDDING_LOCATIONS = [
  {
    title: "Mauritius",
    image: "/images/itineraries/wedding/Mauritius/day-2.jpg",
    type: "International",
    desc: "Exchange vows on pristine white sands where endless turquoise waters meet the sky.",
    link: "/weddings/international/mauritius-wedding"
  },
  {
    title: "Phuket",
    image: "/images/itineraries/wedding/Phuket/day-2.jpg",
    type: "International",
    desc: "A serene coastal ceremony backed by dramatic cliffs and warm ocean breezes.",
    link: "/weddings/international/phuket-wedding"
  },
  {
    title: "Corbett",
    image: "/images/itineraries/wedding/Corbett/day-3.jpg",
    type: "Domestic",
    desc: "Wild, untamed romance nestled deep within India's lush emerald jungles.",
    link: "/weddings/domestic/corbett-wedding"
  },
  {
    title: "Rishikesh",
    image: "/images/itineraries/wedding/Rishikesh/day-2.jpg",
    type: "Domestic",
    desc: "Spiritual and timeless unions blessed intimately by the holy Ganges.",
    link: "/weddings/domestic/rishikesh-wedding"
  }
];

export default function WeddingStoryboard() {
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
          <span className="text-[var(--color-brand-yellow)] tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-6 block border border-[var(--color-brand-yellow)]/20 rounded-full px-6 py-2">
            Spectacular Venues
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-green)] tracking-tight flex flex-wrap justify-center items-center gap-3 md:gap-5">
             Vows Exchanged,
             <span className="font-fancy text-[var(--color-brand-yellow)] text-4xl md:text-6xl lg:text-7xl lowercase block font-normal mt-1 md:mt-2">worlds discovered</span>
          </h2>
          <p className="text-[var(--color-brand-green)]/70 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mx-auto mt-8 px-4">
             From palace lawns to private islands, our event architects craft bespoke destination weddings that are as stunning as the love they celebrate.
          </p>
        </motion.div>

        {/* Sprawling Editorial Grid Component */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-32 md:gap-y-48 w-full">
          
          {/* Main Hero Wedding: Mauritius */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-12 lg:col-span-9 block group relative"
          >
            <Link href={WEDDING_LOCATIONS[0].link} className="block w-full overflow-hidden relative h-[60vh] md:h-[80vh]">
               <Image 
                 src={WEDDING_LOCATIONS[0].image} 
                 alt={WEDDING_LOCATIONS[0].title}
                 fill
                 className="object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
            </Link>
            <div className="mt-8 flex flex-col items-start w-full lg:w-3/4">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[var(--color-brand-green)] font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">01 &mdash; {WEDDING_LOCATIONS[0].type}</span>
              </div>
              <Link href={WEDDING_LOCATIONS[0].link} className="group-hover:text-[var(--color-brand-blue)] transition-colors inline-block w-full mb-6">
                <h3 className="text-5xl md:text-7xl text-[var(--color-brand-green)] font-light leading-none">
                  <span className="font-fancy text-6xl md:text-[6rem] text-[var(--color-brand-yellow)] lowercase mr-4 md:mr-6 inline-block transform translate-y-2">{WEDDING_LOCATIONS[0].title}</span>
                  <span className="tracking-tight italic font-serif">Nuptials</span>
                </h3>
              </Link>
              <p className="text-[var(--color-brand-green)]/80 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8">
                {WEDDING_LOCATIONS[0].desc}
              </p>
              <Link href={WEDDING_LOCATIONS[0].link} className="uppercase tracking-[0.2em] text-sm md:text-base font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-2 hover:border-[var(--color-brand-green)] transition-all">
                Plan This Wedding
              </Link>
            </div>
          </motion.div>

          {/* Wedding 2: Phuket */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="md:col-span-6 lg:col-span-5 lg:col-start-1 block group relative"
          >
            <Link href={WEDDING_LOCATIONS[1].link} className="block w-full overflow-hidden relative h-[50vh] md:h-[70vh]">
               <Image 
                 src={WEDDING_LOCATIONS[1].image} 
                 alt={WEDDING_LOCATIONS[1].title}
                 fill
                 className="object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
            </Link>
            <div className="mt-8 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[var(--color-brand-green)] font-semibold tracking-[0.2em] uppercase text-xs md:text-sm">02 &mdash; {WEDDING_LOCATIONS[1].type}</span>
              </div>
              <Link href={WEDDING_LOCATIONS[1].link} className="group-hover:text-[var(--color-brand-blue)] transition-colors inline-block w-full mb-6">
                <h3 className="text-4xl md:text-5xl text-[var(--color-brand-green)] font-light leading-none">
                  <span className="font-fancy text-5xl md:text-7xl text-[var(--color-brand-yellow)] lowercase mr-3 inline-block transform translate-y-2">{WEDDING_LOCATIONS[1].title}</span>
                  <span className="tracking-tight italic font-serif">Nuptials</span>
                </h3>
              </Link>
              <p className="text-[var(--color-brand-green)]/80 text-lg font-light leading-relaxed mb-8">
                {WEDDING_LOCATIONS[1].desc}
              </p>
              <Link href={WEDDING_LOCATIONS[1].link} className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-1 hover:border-[var(--color-brand-green)] transition-all">
                Plan
              </Link>
            </div>
          </motion.div>

          {/* Wedding 3: Corbett */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="md:col-span-6 lg:col-span-6 lg:col-start-7 block group relative md:-mt-24 lg:-mt-48"
          >
            <Link href={WEDDING_LOCATIONS[2].link} className="block w-full overflow-hidden relative h-[60vh] md:h-[80vh]">
               <Image 
                 src={WEDDING_LOCATIONS[2].image} 
                 alt={WEDDING_LOCATIONS[2].title}
                 fill
                 className="object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
            </Link>
            <div className="mt-8 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[var(--color-brand-green)] font-semibold tracking-[0.2em] uppercase text-xs">03 &mdash; {WEDDING_LOCATIONS[2].type}</span>
              </div>
              <Link href={WEDDING_LOCATIONS[2].link} className="group-hover:text-[var(--color-brand-blue)] transition-colors inline-block w-full mb-6">
                <h3 className="text-4xl md:text-5xl text-[var(--color-brand-green)] font-light leading-none">
                  <span className="font-fancy text-5xl md:text-7xl text-[var(--color-brand-yellow)] lowercase mr-3 inline-block transform translate-y-2">{WEDDING_LOCATIONS[2].title}</span>
                  <span className="tracking-tight italic font-serif">Nuptials</span>
                </h3>
              </Link>
              <p className="text-[var(--color-brand-green)]/80 text-lg font-light leading-relaxed mb-8">
                {WEDDING_LOCATIONS[2].desc}
              </p>
              <Link href={WEDDING_LOCATIONS[2].link} className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-1 hover:border-[var(--color-brand-green)] transition-all">
                Plan
              </Link>
            </div>
          </motion.div>

          {/* Wedding 4: Rishikesh (Central Landscape) */}
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="md:col-span-12 lg:col-span-10 lg:col-start-2 block group relative mt-16"
          >
            <Link href={WEDDING_LOCATIONS[3].link} className="block w-full overflow-hidden relative h-[50vh] md:h-[60vh]">
               <Image 
                 src={WEDDING_LOCATIONS[3].image} 
                 alt={WEDDING_LOCATIONS[3].title}
                 fill
                 className="object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105"
               />
            </Link>
            <div className="mt-12 flex flex-col items-center w-full lg:w-3/4 mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-4 w-full">
                <span className="text-[var(--color-brand-green)] font-semibold tracking-[0.2em] uppercase text-xs">04 &mdash; {WEDDING_LOCATIONS[3].type}</span>
              </div>
              <Link href={WEDDING_LOCATIONS[3].link} className="group-hover:text-[var(--color-brand-blue)] transition-colors inline-block w-full mb-6">
                <h3 className="text-4xl md:text-5xl text-[var(--color-brand-green)] font-light leading-none">
                  <span className="font-fancy text-5xl md:text-7xl text-[var(--color-brand-yellow)] lowercase mr-3 inline-block transform translate-y-2">{WEDDING_LOCATIONS[3].title}</span>
                  <span className="tracking-tight italic font-serif">Nuptials</span>
                </h3>
              </Link>
              <p className="text-[var(--color-brand-green)]/80 text-xl md:text-2xl font-light leading-relaxed mb-10 mx-auto">
                {WEDDING_LOCATIONS[3].desc}
              </p>
              <Link href={WEDDING_LOCATIONS[3].link} className="uppercase tracking-[0.2em] text-sm font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-2 hover:border-[var(--color-brand-green)] transition-all">
                Plan This Wedding
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
           <span className="text-[var(--color-brand-green)]/60 tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-10 block">Bring Your Vision To Life</span>
           
           <h4 className="text-5xl md:text-7xl lg:text-[8rem] font-light text-[var(--color-brand-green)] mb-12 tracking-tight leading-none">
             Begin planning your <br className="hidden md:block" />
             <span className="font-fancy text-[var(--color-brand-yellow)] text-7xl md:text-[9rem] lg:text-[11rem] lowercase block mt-2 md:mt-4 ml-[-0.1em]">masterpiece</span>
           </h4>
           
           <p className="text-xl md:text-2xl text-[var(--color-brand-green)]/80 font-light max-w-2xl mx-auto mb-16 md:mb-24 leading-relaxed px-4">
             Our dedicated team of architects and curators will handle every detail of your luxury destination wedding.
           </p>
           
           <Link href="/weddings" className="group flex items-center text-[var(--color-brand-green)] hover:text-[var(--color-brand-yellow)] transition-colors">
              <span className="uppercase tracking-[0.2em] text-sm md:text-base font-bold border-b border-[var(--color-brand-green)] group-hover:border-[var(--color-brand-yellow)] pb-2 transition-colors">
                Enquire Now
              </span>
           </Link>
        </motion.div>

      </div>
    </section>
  );
}
