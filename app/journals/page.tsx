import Image from "next/image";
import Link from "next/link";
import { JOURNALS } from "@/lib/data/journals";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export const metadata = {
  title: "Travel Journals | Shrenik Escapes",
  description: "Read our curated collection of travel journals, tips, and inspiration from around the world.",
};

export default function JournalsIndexPage() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[var(--color-brand-cream)] pt-32 pb-32">
      {/* Hero Header */}
      <div className="max-w-[1600px] mx-auto px-6 mb-24 text-center">
        <span className="text-[var(--color-brand-green)] tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-6 block border border-[var(--color-brand-green)]/20 rounded-full px-6 py-2 w-fit mx-auto">
          The Collection
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[var(--color-brand-green)] tracking-tight flex flex-wrap justify-center items-center gap-3 md:gap-5 mb-8">
             Travel
             <span className="font-fancy text-[var(--color-brand-yellow)] text-4xl md:text-6xl lg:text-7xl lowercase block font-normal mt-1 md:mt-2">journals</span>
        </h1>
        <p className="text-[var(--color-brand-green)]/70 text-lg md:text-2xl font-light leading-relaxed max-w-2xl mx-auto">
          Immersive stories, practical guides, and visual inspiration to help you dream up your next great escape.
        </p>
      </div>

      {/* Masonry/Column Grid */}
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-24 gap-x-12">
          {JOURNALS.map((journal, index) => (
             <Link 
               key={index}
               href={`/journals/${journal.slug}`}
               className="flex flex-col group relative"
             >
                {/* Magazine Cover */}
                <div className="w-full aspect-[3/4] relative overflow-hidden bg-black/5 mb-8">
                   <Image 
                     src={journal.image}
                     alt={journal.title}
                     fill
                     className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                   />
                   <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                {/* Typography Below */}
                <div className="flex flex-col items-start px-2">
                   <div className="flex items-center gap-3 mb-4">
                     <span className="text-[var(--color-brand-green)]/60 text-[10px] tracking-widest uppercase">{journal.date}</span>
                     <span className="text-[var(--color-brand-green)] text-[10px] font-bold uppercase tracking-[0.2em]">{journal.destination}</span>
                   </div>
                   
                   <h4 className="text-3xl font-light text-[var(--color-brand-green)] mb-6 leading-tight group-hover:text-[var(--color-brand-yellow)] transition-colors">
                     {journal.title}
                   </h4>
                   
                   <p className="text-[var(--color-brand-green)]/70 text-sm line-clamp-3 font-light leading-relaxed mb-8">
                     {journal.intro}
                   </p>
                   
                   <span className="uppercase tracking-[0.2em] text-xs font-bold text-[var(--color-brand-green)] border-b border-[var(--color-brand-green)]/30 pb-1 group-hover:border-[var(--color-brand-yellow)] group-hover:text-[var(--color-brand-yellow)] transition-all mt-auto">
                     Read Story
                   </span>
                </div>
             </Link>
          ))}
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
