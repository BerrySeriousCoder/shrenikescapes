import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import { JOURNALS } from "@/lib/data/journals";

export function generateStaticParams() {
  return JOURNALS.map((journal) => ({
    id: journal.slug,
  }));
}

export default async function JournalPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const journal = JOURNALS.find(j => j.slug === id);
  
  if (!journal) {
    notFound();
  }

  // Splitting the title if it contains a colon to make the first part fancy
  const titleParts = journal.title.split(':');

  return (
    <main className="bg-[#0b1d0e] min-h-screen text-[var(--color-brand-cream)] flex flex-col">
       <Navbar />

       {/* Hero Cover Image */}
       <div className="relative w-full h-[80vh] md:h-[90vh]">
         <Image 
           src={journal.image} 
           alt={journal.title} 
           fill 
           className="object-cover opacity-50" 
           priority 
         />
         {/* Deep vignette fading perfectly into the dark background */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d0e] via-[#0b1d0e]/40 to-black/30"></div>

         <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-16 md:pb-24 flex flex-col items-center text-center z-10 max-w-5xl mx-auto w-full">
           <span className="text-[var(--color-brand-yellow)] tracking-[0.4em] uppercase text-xs md:text-sm font-bold mb-8 block border border-[var(--color-brand-yellow)]/30 rounded-full px-6 py-2">
             {journal.destination} &mdash; {journal.date}
           </span>
           
           <h1 className="w-full flex flex-col items-center">
             {/* Always use destination as the big, bold, fancy word — it's always short and fits perfectly */}
             <span
               className="font-fancy text-[var(--color-brand-yellow)] block leading-none mb-6 md:mb-10"
               style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
             >
               {journal.destination}
             </span>
             {/* Full title as a clean subtitle — smaller, readable */}
             <span className="text-xl md:text-3xl lg:text-4xl font-light text-[var(--color-brand-cream)] tracking-tight leading-snug max-w-3xl">
               {journal.title}
             </span>
           </h1>
         </div>

       </div>

       {/* Super-Maximized Editorial Reading Content */}
       <article className="max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32 w-full">
          
          {/* Drop-cap Introduction */}
          <div className="mb-24 relative">
             {/* Small line decoration */}
             <div className="w-16 h-[1px] bg-[var(--color-brand-yellow)] mb-12"></div>
             
             <p className="text-xl md:text-3xl font-light leading-relaxed text-[var(--color-brand-cream)]/90 first-letter:text-8xl first-letter:font-fancy first-letter:text-[var(--color-brand-yellow)] first-letter:float-left first-letter:mr-6 first-letter:mt-[-0.1em] first-letter:leading-none">
               {journal.intro}
             </p>
          </div>

          <div className="w-full h-[1px] bg-[var(--color-brand-cream)]/10 mb-24"></div>

          {/* Sequential Journal Sections */}
          <div className="flex flex-col gap-24">
            {journal.sections.map((section, index) => (
               <section key={index} className="flex flex-col group">
                  <h2 className="text-3xl md:text-4xl font-light text-[var(--color-brand-yellow)] mb-8 tracking-tight font-serif italic">
                    {section.heading}
                  </h2>
                  <div className="text-lg md:text-xl text-[var(--color-brand-cream)]/70 font-light leading-loose whitespace-pre-line group-hover:text-[var(--color-brand-cream)]/90 transition-colors duration-500">
                    {section.content}
                  </div>
               </section>
            ))}
          </div>

          {/* End of Journal Call to Action */}
          <div className="mt-48 pt-24 border-t border-[var(--color-brand-cream)]/10 text-center flex flex-col items-center">
             <span className="text-[var(--color-brand-yellow)] tracking-[0.4em] uppercase text-xs font-bold mb-8">End of Journal</span>
             <h4 className="text-4xl md:text-6xl font-light text-[var(--color-brand-cream)] mb-12 leading-none">
                Craving your own <br />
                <span className="font-fancy text-[var(--color-brand-yellow)] text-7xl md:text-[8rem] lowercase mt-4 block">adventure?</span>
             </h4>
             <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12 w-full">
               <Link href="/tours" className="uppercase tracking-[0.2em] text-sm font-bold text-[var(--color-brand-cream)] border-b border-[var(--color-brand-cream)]/30 pb-2 hover:border-[var(--color-brand-yellow)] hover:text-[var(--color-brand-yellow)] transition-all">
                 Discover Tours
               </Link>
               <Link href="/weddings" className="uppercase tracking-[0.2em] text-sm font-bold text-[var(--color-brand-cream)] border-b border-[var(--color-brand-cream)]/30 pb-2 hover:border-[var(--color-brand-yellow)] hover:text-[var(--color-brand-yellow)] transition-all">
                 Discover Weddings
               </Link>
             </div>
          </div>

       </article>

       <Footer />
    </main>
  );
}
