"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b1d0e] pt-32 overflow-hidden text-[var(--color-brand-cream)] border-t border-[var(--color-brand-green)]/10 flex flex-col justify-between">
      
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 w-full flex-grow">
        
        {/* Top Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-32">
           {/* CTA & Contact Column */}
           <div className="md:col-span-6 flex flex-col">
              <span className="text-[var(--color-brand-yellow)] tracking-[0.4em] uppercase text-xs font-bold mb-8">Begin Your Journey</span>
              <h2 className="text-5xl md:text-7xl font-light text-[var(--color-brand-cream)] mb-12 leading-none">
                Curate the <br />
                <span className="font-fancy text-[var(--color-brand-yellow)] text-[5rem] md:text-[7rem] lg:text-[8rem] lowercase block mt-2 ml-[-0.1em]">extraordinary</span>
              </h2>
              
              {/* Contact Information */}
              <div className="flex flex-col gap-3 mt-4 text-[var(--color-brand-cream)]/70 font-light text-sm md:text-base">
                <a href="mailto:Ops@shrenikescapes.com" className="hover:text-[var(--color-brand-yellow)] transition-colors w-max">Ops@shrenikescapes.com</a>
                <a href="mailto:Info@shrenikescapes.com" className="hover:text-[var(--color-brand-yellow)] transition-colors w-max">Info@shrenikescapes.com</a>
                <a href="tel:+919625874918" className="hover:text-[var(--color-brand-yellow)] transition-colors w-max">+91 96258 74918</a>
                <p className="mt-4 max-w-sm leading-relaxed">
                  Address: G-223 HIG, Pratap Vihar, Ghaziabad, Uttar pradesh. 201001
                </p>
              </div>
           </div>

           {/* Links Columns (pushed right) */}
           <div className="md:col-span-5 md:col-start-8 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-16">
              
              <div className="flex flex-col gap-6">
                <h4 className="text-[var(--color-brand-cream)]/40 uppercase tracking-[0.2em] text-xs font-bold mb-2 md:mb-6">Escapes</h4>
                <Link href="/tours/international" className="text-sm text-[var(--color-brand-cream)]/80 hover:text-[var(--color-brand-yellow)] transition-colors">International</Link>
                <Link href="/tours/domestic" className="text-sm text-[var(--color-brand-cream)]/80 hover:text-[var(--color-brand-yellow)] transition-colors">Domestic</Link>
                <Link href="/tours" className="text-sm text-[var(--color-brand-cream)]/80 hover:text-[var(--color-brand-yellow)] transition-colors">All Itineraries</Link>
              </div>
              
              <div className="flex flex-col gap-6">
                <h4 className="text-[var(--color-brand-cream)]/40 uppercase tracking-[0.2em] text-xs font-bold mb-2 md:mb-6">Celebrations</h4>
                <Link href="/weddings/international" className="text-sm text-[var(--color-brand-cream)]/80 hover:text-[var(--color-brand-yellow)] transition-colors">Global Venues</Link>
                <Link href="/weddings/domestic" className="text-sm text-[var(--color-brand-cream)]/80 hover:text-[var(--color-brand-yellow)] transition-colors">India Venues</Link>
                <Link href="/weddings" className="text-sm text-[var(--color-brand-cream)]/80 hover:text-[var(--color-brand-yellow)] transition-colors">Plan Wedding</Link>
              </div>

              <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
                <h4 className="text-[var(--color-brand-cream)]/40 uppercase tracking-[0.2em] text-xs font-bold mb-2 md:mb-6">Company</h4>
                <Link href="/about" className="text-sm text-[var(--color-brand-cream)]/80 hover:text-[var(--color-brand-yellow)] transition-colors">Our Story</Link>
                <Link href="/journals" className="text-sm text-[var(--color-brand-cream)]/80 hover:text-[var(--color-brand-yellow)] transition-colors">Travel Journals</Link>
                <Link href="/contact" className="text-sm text-[var(--color-brand-cream)]/80 hover:text-[var(--color-brand-yellow)] transition-colors">Contact Us</Link>
              </div>

           </div>
        </div>

        {/* Legal & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center text-[var(--color-brand-cream)]/40 text-xs tracking-widest uppercase pb-12 border-t border-[var(--color-brand-cream)]/10 pt-8">
           <div className="flex gap-8 mb-6 md:mb-0">
             <Link href="/privacy" className="hover:text-[var(--color-brand-cream)] transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-[var(--color-brand-cream)] transition-colors">Terms of Service</Link>
           </div>
           
           <div className="flex gap-8 mb-6 md:mb-0">
             <a href="#" className="hover:text-[var(--color-brand-cream)] transition-colors">Instagram</a>
             <a href="#" className="hover:text-[var(--color-brand-cream)] transition-colors">Facebook</a>
             <a href="#" className="hover:text-[var(--color-brand-cream)] transition-colors">Pinterest</a>
           </div>

           <p>&copy; {new Date().getFullYear()} Shrenik Escapes.</p>
        </div>

      </div>

      {/* Massive Faded Bottom Center Text */}
      <div className="relative w-full flex justify-center items-end opacity-[0.04] pointer-events-none overflow-hidden leading-none pt-4 bg-transparent mt-[-2rem] sm:mt-[-4rem] md:mt-[-6rem] lg:mt-[-8rem]">
        <div className="flex items-center whitespace-nowrap text-[var(--color-brand-cream)] transform translate-y-[20%]">
           <span className="text-[12vw] md:text-[11vw] font-bold tracking-tight">Shrenik</span>
           <span className="font-fancy text-[14vw] md:text-[13vw] lowercase ml-[0.2em] transform translate-y-[0.1em] text-[var(--color-brand-yellow)]">escapes</span>
        </div>
      </div>

    </footer>
  );
}
