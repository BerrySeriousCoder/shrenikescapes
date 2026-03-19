"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Pillars() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Unique parallax speeds for images to create depth
  const yFastUp = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const ySlowUp = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const ySlightDown = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yFastDown = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section ref={containerRef} className="py-24 md:py-48 bg-[var(--color-brand-cream)] overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 relative w-full flex flex-col items-center">

        {/* Header Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-4xl mx-auto mb-24 md:mb-48 px-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-brand-green)] mb-8 leading-tight tracking-tight">
            Journey Beyond the <br className="md:hidden" />
            <span className="font-fancy text-[var(--color-brand-yellow)] text-6xl md:text-8xl lg:text-[7rem] lowercase leading-none align-middle ml-2">ordinary</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-green)]/70 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you seek the thrill of an uncharted landscape or the romance of a global celebration, your next great story begins here.
          </p>
        </motion.div>

        {/* Curated Escapes Section */}
        <div className="relative w-full min-h-[140vh] flex flex-col items-center justify-center mb-48">

          {/* Floating Image 1 (Top Left) */}
          <motion.div style={{ y: yFastUp }} className="absolute hidden md:block w-72 lg:w-80 h-[450px] lg:h-[500px] left-0 lg:left-10 top-[5%] overflow-hidden z-0">
            <Image src="/images/itineraries/tour/Greece/day-4.jpg" alt="Greece Escapes" fill className="object-cover" />
          </motion.div>

          {/* Floating Image 2 (Bottom Left) */}
          <motion.div style={{ y: ySlowUp }} className="absolute hidden md:block w-64 h-[400px] left-10 lg:left-24 bottom-[5%] overflow-hidden z-0">
            <Image src="/images/itineraries/tour/Peru/peru.jpg" alt="Peru Escapes" fill className="object-cover" />
          </motion.div>

          {/* Floating Image 3 (Top Right) */}
          <motion.div style={{ y: ySlightDown }} className="absolute hidden md:block w-64 h-[350px] right-5 lg:right-20 top-[15%] overflow-hidden z-0">
            <Image src="/images/itineraries/tour/Ladakh/day-5.jpg" alt="Ladakh Escapes" fill className="object-cover" />
          </motion.div>

          {/* Floating Image 4 (Middle Right) */}
          <motion.div style={{ y: yFastDown }} className="absolute hidden md:block w-72 lg:w-[20rem] h-[500px] lg:h-[600px] right-0 lg:-right-5 top-[45%] lg:top-[50%] overflow-hidden z-0">
            <Image src="/images/itineraries/tour/Turkey/turkey.jpg" alt="Turkey Escapes" fill className="object-cover" />
          </motion.div>

          {/* Mobile Image */}
          <div className="block md:hidden w-full h-[60vh] relative overflow-hidden mb-12">
            <Image src="/images/itineraries/tour/Greece/day-4.jpg" alt="Greece Escapes" fill className="object-cover" />
          </div>

          <div className="relative z-10 text-center flex flex-col items-center max-w-2xl px-6 py-12 md:py-16 bg-[var(--color-brand-cream)]/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
            <span className="text-[var(--color-brand-green)] tracking-[0.4em] uppercase text-sm md:text-lg lg:text-xl font-bold mb-8 block">Explore the World</span>

            <h3 className="text-5xl md:text-7xl lg:text-[8rem] font-medium text-[var(--color-brand-green)] mb-6 leading-none tracking-tight">
              Curated <br />
              <span className="font-fancy text-[var(--color-brand-yellow)] text-7xl md:text-[9rem] lg:text-[11rem] font-normal leading-none -ml-4 whitespace-nowrap block mt-2">Escapes</span>
            </h3>

            <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-brand-green)]/80 font-light leading-relaxed mb-12 max-w-lg mx-auto">
              Immersive journeys across the globe, from the serene backwaters of Kerala to the rugged peaks of Patagonia.
            </p>

            <Link href="/tours" className="group border border-[var(--color-brand-green)] px-10 py-4 rounded-full text-[var(--color-brand-green)] font-medium text-sm md:text-base uppercase tracking-widest hover:bg-[var(--color-brand-green)] hover:text-white transition-all duration-500 bg-[var(--color-brand-cream)] md:bg-transparent">
              Discover Tours
            </Link>
          </div>
        </div>

        {/* Destination Weddings Section */}
        <div className="relative w-full min-h-[140vh] flex flex-col items-center justify-center">

          {/* Floating Image 1 (Top Left) */}
          <motion.div style={{ y: ySlightDown }} className="absolute hidden md:block w-64 lg:w-72 h-[400px] lg:h-[450px] left-0 lg:-left-5 top-[5%] overflow-hidden z-0">
            <Image src="/images/itineraries/wedding/Mauritius/day-2.jpg" alt="Mauritius Wedding" fill className="object-cover" />
          </motion.div>

          {/* Floating Image 2 (Bottom Left) */}
          <motion.div style={{ y: yFastUp }} className="absolute hidden md:block w-72 lg:w-80 h-[500px] lg:h-[600px] left-0 lg:left-5 bottom-[5%] overflow-hidden z-0">
            <Image src="/images/itineraries/wedding/Corbett/day-3.jpg" alt="Corbett Wedding" fill className="object-cover" />
          </motion.div>

          {/* Floating Image 3 (Top Right) */}
          <motion.div style={{ y: yFastDown }} className="absolute hidden md:block w-64 lg:w-72 h-[400px] right-5 lg:right-10 top-[15%] overflow-hidden z-0">
            <Image src="/images/itineraries/wedding/Phuket/day-2.jpg" alt="Phuket Wedding" fill className="object-cover" />
          </motion.div>

          {/* Floating Image 4 (Bottom Right) */}
          <motion.div style={{ y: ySlowUp }} className="absolute hidden md:block w-64 h-[350px] right-20 lg:right-32 bottom-[15%] overflow-hidden z-0 opacity-90">
            <Image src="/images/itineraries/wedding/Rishikesh/day-2.jpg" alt="Rishikesh Wedding" fill className="object-cover" />
          </motion.div>

          {/* Mobile Image */}
          <div className="block md:hidden w-full h-[60vh] relative overflow-hidden mb-12">
            <Image src="/images/itineraries/wedding/Mauritius/day-2.jpg" alt="Mauritius Wedding" fill className="object-cover" />
          </div>

          <div className="relative z-10 text-center flex flex-col items-center max-w-2xl px-6 py-12 md:py-16 bg-[var(--color-brand-cream)]/70 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
            <span className="text-[var(--color-brand-green)] tracking-[0.4em] uppercase text-sm md:text-lg lg:text-xl font-bold mb-8 block">Celebrate Life</span>

            <h3 className="text-5xl md:text-7xl lg:text-[8rem] font-medium text-[var(--color-brand-green)] mb-6 leading-none tracking-tight">
              Exclusive <br />
              <span className="font-fancy text-[var(--color-brand-yellow)] text-7xl md:text-[9rem] lg:text-[11rem] font-normal leading-none -ml-4 whitespace-nowrap block mt-2">Weddings</span>
            </h3>

            <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-brand-green)]/80 font-light leading-relaxed mb-12 max-w-lg mx-auto">
              Celebrate your love story with bespoke event architecture and flawless execution set against stunning global backdrops.
            </p>

            <Link href="/weddings" className="group border border-[var(--color-brand-green)] px-10 py-4 rounded-full text-[var(--color-brand-green)] font-medium text-sm md:text-base uppercase tracking-widest hover:bg-[var(--color-brand-green)] hover:text-white transition-all duration-500 bg-[var(--color-brand-cream)] md:bg-transparent">
              Discover Weddings
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
