"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Day = {
  day: number;
  title: string;
  activities: string[];
  imagePath: string;
};

export default function StorytellingItinerary({ days }: { days: Day[] }) {
  if (!days || days.length === 0) {
    return (
      <div className="py-32 text-center text-white/50 font-light">
        Itinerary details are currently being curated.
      </div>
    );
  }

  return (
    <div className="w-full bg-black py-24 relative">
      {/* Central Guide Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-32 md:gap-48 relative z-10">
        {days.map((item, index) => {
          // Alternate left and right
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.day}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative h-[50vh] md:h-[80vh] group overflow-hidden">
                <Image
                  src={item.imagePath}
                  alt={`Day ${item.day}: ${item.title}`}
                  fill
                  className="object-cover transition-transform duration-[3s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
                
                {/* Mobile Day Indicator */}
                <div className="absolute top-6 left-6 md:hidden bg-black/60 backdrop-blur-md px-4 py-2 text-white font-mono text-sm tracking-widest border border-white/20">
                  DAY {item.day.toString().padStart(2, "0")}
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="hidden md:block text-[var(--color-brand-yellow)] font-mono text-xl md:text-2xl font-light tracking-widest mb-6 opacity-80">
                  DAY {item.day.toString().padStart(2, "0")}
                </div>
                
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tighter" style={{ fontFamily: "Georgia, serif" }}>
                  {item.title}
                </h3>
                
                <div className="space-y-6">
                  {item.activities.map((activity, i) => (
                    <p key={i} className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
                      {activity}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
