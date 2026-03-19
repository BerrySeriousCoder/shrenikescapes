"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type DayProps = {
  day: string;
  title: string;
  description: string;
};

export default function Timeline({ days }: { days: DayProps[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto py-12 px-6 md:px-0">
      
      {/* Central Line */}
      <div className="absolute left-10 md:left-1/2 top-12 bottom-12 w-1 bg-[var(--color-brand-green)]/10 md:-translate-x-1/2 rounded-full overflow-hidden">
        <motion.div 
          style={{ scaleY, transformOrigin: "top" }} 
          className="w-full h-full bg-[var(--color-brand-yellow)]"
        ></motion.div>
      </div>

      {days.map((item, i) => {
        const isLeft = i % 2 === 0;
        
        return (
          <div key={i} className={`relative flex items-start md:items-center justify-between mb-20 md:mb-32 w-full ${isLeft ? "flex-row" : "flex-row md:flex-row-reverse"}`}>
            
            {/* Empty space for alternating layout on desktop */}
            <div className="hidden md:block w-5/12"></div>

            {/* Glowing Dot on the line */}
            <div className="absolute left-10 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[var(--color-brand-cream)] border-4 border-[var(--color-brand-green)] flex items-center justify-center z-10 mt-2 md:mt-0 shadow-lg transform -translate-x-1/2">
                <div className="w-2 h-2 rounded-full bg-[var(--color-brand-blue)]"></div>
            </div>

            {/* Content Card */}
            <motion.div 
              initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`w-full md:w-5/12 ml-20 md:ml-0 bg-white p-8 rounded-3xl shadow-xl border-t-4 border-[var(--color-brand-yellow)] relative
                         ${isLeft ? "md:text-right md:pr-10" : "md:text-left md:pl-10"}`}
            >
              <h4 className="text-[var(--color-brand-blue)] font-bold text-sm uppercase tracking-widest mb-2">{item.day}</h4>
              <h3 className="text-2xl font-bold text-[var(--color-brand-green)] mb-4 leading-tight">{item.title}</h3>
              <p className="text-[var(--color-brand-green)]/70 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
            
          </div>
        );
      })}
    </div>
  );
}
