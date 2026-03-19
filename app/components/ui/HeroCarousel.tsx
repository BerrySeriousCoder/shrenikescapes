"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const NEW_SUBTITLE = "Discover extraordinary destinations and breathtaking landscapes curated for the discerning traveler.\nLet us guide you to the world's best-kept secrets and elevate your next adventure.";

const HIGHLIGHTS = [
  {
    image: "/images/packages/Azerbaijan.jpg",
    subtitle: NEW_SUBTITLE,
  },
  {
    image: "/images/packages/domestic.jpg",
    subtitle: NEW_SUBTITLE,
  },
  {
    image: "/images/packages/Peru.jpg",
    subtitle: NEW_SUBTITLE,
  },
  {
    image: "/images/packages/Turkey.jpg",
    subtitle: NEW_SUBTITLE,
  }
];

const containerVariant = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const letterVariant = {
  initial: { opacity: 0, y: 100, rotate: 45 },
  animate: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] as const },
  },
};

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HIGHLIGHTS.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-sans">
      {HIGHLIGHTS.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            <Image
              src={slide.image}
              alt="Highlight Image"
              fill
              priority={index === 0}
              className={`object-cover object-center scale-105 transition-transform duration-[10000ms] ease-linear ${isActive ? "scale-100" : ""}`}
            />
            {/* Very Subtle Gradient Overlay for text readability at top and bottom */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-8">
              {/* Scroll indicator bars */}
              <div className="flex space-x-3 mb-8">
                {HIGHLIGHTS.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => setCurrentIndex(dotIndex)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${currentIndex === dotIndex ? "w-12 bg-white" : "w-4 bg-white/40"
                      }`}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}

      {/* Center Cinematic Title */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
        <motion.div
          variants={containerVariant}
          initial="initial"
          animate="animate"
          className="z-10 text-white flex flex-col items-center drop-shadow-2xl font-sans"
        >
          <div className="overflow-hidden px-2">
            <motion.div className="flex tracking-tight font-extrabold text-7xl md:text-9xl lg:text-[11rem] leading-none">
              {"Shrenik".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariant}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <div className="overflow-hidden px-2 pb-4 pt-2 -mt-2 md:-mt-4 lg:-mt-6">
            <motion.div className="flex tracking-wider font-light text-4xl md:text-6xl lg:text-[5rem] leading-none">
              {"Escapes".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariant}
                  style={{ display: "inline-block" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Content Area */}
      <div className="absolute bottom-20 md:bottom-24 left-0 right-0 z-30 px-8 md:px-16 flex flex-col md:flex-row justify-between items-center text-white font-medium text-sm drop-shadow-lg">
        <div className="hidden md:block text-lg tracking-widest font-mono drop-shadow-md">
          2026
        </div>

        <div className="max-w-5xl lg:max-w-6xl text-center leading-relaxed text-sm md:text-base tracking-wider md:mb-0 whitespace-pre-line px-4 drop-shadow-md pb-4 md:pb-0">
          {HIGHLIGHTS[currentIndex].subtitle}
        </div>

        <div className="hidden md:block text-lg tracking-[0.2em] uppercase">
          Explore
        </div>
      </div>
    </div>
  );
}
