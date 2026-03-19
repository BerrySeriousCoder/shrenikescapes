import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroCarousel from "./components/ui/HeroCarousel";
import Pillars from "./components/ui/Pillars";
import FeaturedTours from "./components/ui/FeaturedTours";
import WeddingStoryboard from "./components/ui/WeddingStoryboard";
import JournalsGrid from "./components/ui/JournalsGrid";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Pillars />
      <FeaturedTours />
      <WeddingStoryboard />
      <JournalsGrid />
      <Footer />
    </>
  );
}
