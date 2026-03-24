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
    <section ref={containerRef} className="py-16 md:py-24 bg-[var(--color-brand-cream)] overflow-hidden relative">
      <div className="max-w-[1600px] mx-auto px-6 relative w-full flex flex-col items-center">

        {/* Header Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center w-full max-w-4xl mx-auto mb-12 md:mb-16 px-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[var(--color-brand-green)] mb-8 leading-tight tracking-tight">
            Journey Beyond the <br className="md:hidden" />
            <span className="font-fancy text-[var(--color-brand-yellow)] text-6xl md:text-8xl lg:text-[7rem] lowercase leading-none align-middle ml-2">ordinary</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-brand-green)]/70 font-light leading-relaxed max-w-2xl mx-auto">
            Whether you seek the thrill of an uncharted landscape or the romance of a global celebration, your next great story begins here.
          </p>
        </motion.div>

        {/* Side-by-Side Wrapper */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 xl:gap-20 relative mt-4 md:mt-8">

          {/* Curated Escapes Section */}
          <div className="relative w-full min-h-[min(85vh,700px)] flex flex-col items-center justify-center">

            {/* Floating Image 1 (Top Left) */}
            <motion.div style={{ y: yFastUp }} className="absolute hidden lg:block w-36 xl:w-48 h-[250px] xl:h-[350px] -left-6 xl:-left-12 top-[0%] overflow-hidden z-0">
              <Image src="/images/itineraries/tour/Greece/day-4.jpg" alt="Greece Escapes" fill className="object-cover" />
            </motion.div>

            {/* Floating Image 2 (Bottom Left) */}
            <motion.div style={{ y: ySlowUp }} className="absolute hidden lg:block w-32 xl:w-44 h-[200px] xl:h-[300px] -left-2 xl:-left-6 bottom-[5%] overflow-hidden z-0">
              <Image src="/images/itineraries/tour/Peru/peru.jpg" alt="Peru Escapes" fill className="object-cover" />
            </motion.div>

            {/* Floating Image 3 (Top Right) */}
            <motion.div style={{ y: ySlightDown }} className="absolute hidden lg:block w-36 xl:w-48 h-[220px] xl:h-[280px] -right-2 xl:-right-6 top-[10%] overflow-hidden z-0">
              <Image src="/images/itineraries/tour/Ladakh/day-5.jpg" alt="Ladakh Escapes" fill className="object-cover" />
            </motion.div>

            {/* Floating Image 4 (Bottom Right) */}
            <motion.div style={{ y: yFastDown }} className="absolute hidden lg:block w-40 xl:w-56 h-[300px] xl:h-[400px] -right-6 xl:-right-12 bottom-[10%] overflow-hidden z-0">
              <Image src="/images/itineraries/tour/Turkey/turkey.jpg" alt="Turkey Escapes" fill className="object-cover" />
            </motion.div>

            {/* Mobile/Tablet Image */}
            <div className="block lg:hidden w-full h-[60vh] relative overflow-hidden mb-12">
              <Image src="/images/itineraries/tour/Greece/day-4.jpg" alt="Greece Escapes" fill className="object-cover" />
            </div>

            <div className="relative z-10 text-center flex flex-col items-center max-w-sm xl:max-w-md px-8 py-12 bg-[var(--color-brand-cream)]/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none rounded-2xl lg:rounded-none shadow-xl lg:shadow-none">
              <span className="text-[var(--color-brand-green)] tracking-[0.4em] uppercase text-xs xl:text-sm font-bold mb-6 block">Explore the World</span>

              <h3 className="text-5xl xl:text-6xl font-medium text-[var(--color-brand-green)] mb-6 leading-none tracking-tight">
                Curated <br />
                <span className="font-fancy text-[var(--color-brand-yellow)] text-6xl xl:text-7xl font-normal leading-none -ml-2 whitespace-nowrap block mt-2">Escapes</span>
              </h3>

              <p className="text-base xl:text-lg text-[var(--color-brand-green)]/90 font-light leading-relaxed mb-10 max-w-sm mx-auto">
                Immersive journeys across the globe, from the serene backwaters of Kerala to the rugged peaks of Patagonia.
              </p>

              <Link href="/tours" className="group border border-[var(--color-brand-green)] px-8 py-3 rounded-full text-[var(--color-brand-green)] font-medium text-xs xl:text-sm uppercase tracking-[0.2em] hover:bg-[var(--color-brand-green)] hover:text-white transition-all duration-500 bg-transparent">
                Discover Tours
              </Link>
            </div>
          </div>

          {/* Destination Weddings Section */}
          <div className="relative w-full min-h-[min(85vh,700px)] flex flex-col items-center justify-center mt-16 lg:mt-0">

            {/* Floating Image 1 (Top Left) */}
            <motion.div style={{ y: ySlightDown }} className="absolute hidden lg:block w-36 xl:w-48 h-[250px] xl:h-[300px] -left-4 xl:-left-8 top-[5%] overflow-hidden z-0">
              <Image src="/images/itineraries/wedding/Mauritius/day-2.jpg" alt="Mauritius Wedding" fill className="object-cover" />
            </motion.div>

            {/* Floating Image 2 (Bottom Left) */}
            <motion.div style={{ y: yFastUp }} className="absolute hidden lg:block w-40 xl:w-56 h-[300px] xl:h-[400px] -left-6 xl:-left-12 bottom-[5%] overflow-hidden z-0">
              <Image src="/images/itineraries/wedding/Corbett/day-3.jpg" alt="Corbett Wedding" fill className="object-cover" />
            </motion.div>

            {/* Floating Image 3 (Top Right) */}
            <motion.div style={{ y: yFastDown }} className="absolute hidden lg:block w-36 xl:w-48 h-[250px] xl:h-[300px] -right-2 xl:-right-6 top-[15%] overflow-hidden z-0">
              <Image src="/images/itineraries/wedding/Phuket/day-2.jpg" alt="Phuket Wedding" fill className="object-cover" />
            </motion.div>

            {/* Floating Image 4 (Bottom Right) */}
            <motion.div style={{ y: ySlowUp }} className="absolute hidden lg:block w-32 xl:w-44 h-[200px] xl:h-[250px] -right-6 xl:-right-10 bottom-[15%] overflow-hidden z-0 opacity-90">
              <Image src="/images/itineraries/wedding/Rishikesh/day-2.jpg" alt="Rishikesh Wedding" fill className="object-cover" />
            </motion.div>

            {/* Mobile/Tablet Image */}
            <div className="block lg:hidden w-full h-[60vh] relative overflow-hidden mb-12">
              <Image src="/images/itineraries/wedding/Mauritius/day-2.jpg" alt="Mauritius Wedding" fill className="object-cover" />
            </div>

            <div className="relative z-10 text-center flex flex-col items-center max-w-sm xl:max-w-md px-8 py-12 bg-[var(--color-brand-cream)]/90 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none rounded-2xl lg:rounded-none shadow-xl lg:shadow-none">
              <span className="text-[var(--color-brand-green)] tracking-[0.4em] uppercase text-xs xl:text-sm font-bold mb-6 block">Celebrate Life</span>

              <h3 className="text-5xl xl:text-6xl font-medium text-[var(--color-brand-green)] mb-6 leading-none tracking-tight">
                Exclusive <br />
                <span className="font-fancy text-[var(--color-brand-yellow)] text-6xl xl:text-7xl font-normal leading-none -ml-2 whitespace-nowrap block mt-2">Weddings</span>
              </h3>

              <p className="text-base xl:text-lg text-[var(--color-brand-green)]/90 font-light leading-relaxed mb-10 max-w-sm mx-auto">
                Celebrate your love story with bespoke event architecture and flawless execution set against stunning global backdrops.
              </p>

              <Link href="/weddings" className="group border border-[var(--color-brand-green)] px-8 py-3 rounded-full text-[var(--color-brand-green)] font-medium text-xs xl:text-sm uppercase tracking-[0.2em] hover:bg-[var(--color-brand-green)] hover:text-white transition-all duration-500 bg-transparent">
                Discover Weddings
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
