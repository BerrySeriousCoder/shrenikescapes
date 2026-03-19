"use client";

import Image from "next/image";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import StorytellingItinerary from "../../../components/ui/StorytellingItinerary";
import { tours, Tour } from "../../../../lib/data/tours";
import { notFound } from "next/navigation";
import itinerariesData from "../../../../lib/data/domestic_itineraries.json";
import { use } from "react";

export default function DomesticTourDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const tour = tours.find((t: Tour) => t.id === resolvedParams.id && t.region === "domestic");
  
  if (!tour) return notFound();

  // Try to get actual parsed itinerary from the json, otherwise fallback
  const itinerary = itinerariesData[tour.id as keyof typeof itinerariesData] || [];

  return (
    <div className="bg-black min-h-screen relative font-sans">
      <Navbar />

      {/* Floating Action Button (FAB) for Booking */}
      <div className="fixed bottom-8 right-8 z-50">
         <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg shadow-2xl transition-all hover:bg-white hover:text-black hover:scale-105 flex items-center group">
           <span>Reserve Your Journey</span>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
           </svg>
         </button>
      </div>

      {/* Hero Parallax Area */}
      <div className="relative h-[90vh] w-full mt-0 bg-black">
         <Image 
           src={tour.image}
           alt={tour.title}
           fill
           priority
           className="object-cover opacity-80"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30"></div>
         
         <div className="absolute bottom-32 left-0 right-0 p-6 max-w-[1400px] mx-auto md:px-12 text-center md:text-left">
           <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              {tour.tags.map((tag: string) => (
                 <span key={tag} className="bg-white/10 backdrop-blur-md rounded-full px-5 py-2 text-white text-xs md:text-sm font-light border border-white/20 tracking-[0.2em] uppercase">
                   {tag}
                 </span>
              ))}
              <span className="bg-[var(--color-brand-yellow)] rounded-full px-5 py-2 text-black text-xs md:text-sm font-bold shadow-lg tracking-[0.2em] uppercase">
                {tour.duration}
              </span>
           </div>
           <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold text-white mb-6 drop-shadow-2xl tracking-tighter" style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 300 }}>
             {tour.title}
           </h1>
           <p className="text-xl md:text-3xl text-white/80 max-w-3xl font-light drop-shadow-lg leading-relaxed mix-blend-screen bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10">
             {tour.description}
           </p>
         </div>
      </div>

      {/* Overview Intro Area Overlapping the Hero */}
      <div className="relative bg-black z-10 w-full pt-24 pb-12 border-t border-white/10 overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
               <h2 className="text-sm font-light tracking-[0.3em] text-[var(--color-brand-yellow)] uppercase mb-4">The Experience</h2>
               <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight" style={{ fontFamily: "Georgia, serif" }}>Unveiling {tour.title}</h3>
               <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8">
                 Experience {tour.duration} of unforgettable moments tailored to perfection. From historic wonders to cultural immersions, every step of this journey has been meticulously crafted to provide a cinematic travel experience like no other.
               </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="border border-white/20 p-8 rounded-3xl bg-white/5 backdrop-blur-sm max-w-md w-full">
                <div className="mb-6 pb-6 border-b border-white/10 flex justify-between items-center">
                  <span className="text-white/60 text-sm tracking-widest uppercase">Start Point</span>
                  <span className="text-white uppercase tracking-widest text-sm font-bold">{tour.title} Airport</span>
                </div>
                <div className="mb-6 pb-6 border-b border-white/10 flex justify-between items-center">
                  <span className="text-white/60 text-sm tracking-widest uppercase">Group Size</span>
                  <span className="text-white uppercase tracking-widest text-sm font-bold">2-10 Guests</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/60 text-sm tracking-widest uppercase">Pace</span>
                  <span className="text-white uppercase tracking-widest text-sm font-bold">Balanced</span>
                </div>
              </div>
            </div>
         </div>
      </div>

      {/* The Cinematic Storytelling Itinerary */}
      <div className="relative z-10 bg-black">
        {itinerary && itinerary.length > 0 ? (
           <StorytellingItinerary days={itinerary} />
        ) : (
           <div className="max-w-4xl mx-auto px-6 py-32 text-center">
             <div className="p-12 border border-white/20 bg-white/5 rounded-[3rem] backdrop-blur-lg">
               <h4 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "Georgia, serif" }}>Curating Your Story</h4>
               <p className="text-white/60 text-xl font-light">Our experience designers are meticulously crafting the perfect day-by-day itinerary for your escape to {tour.title}.</p>
             </div>
           </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
