import Category from "@/components/Category";
import Dairy from "@/components/Dairy";
import HeroSection from "@/components/HeroSection";
import Hookah from "@/components/Hookah";

export default function Home() {
  return (
    <div className="max-w-[1351px] mx-auto">
      
      <HeroSection />
      <Category/>
      <Dairy/>
      <Hookah/>
    </div>
  );
}
