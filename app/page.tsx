import HeroSection from "@/components/market/hero-section";
import Projects from "@/components/market/projects";
import Note from "@/components/market/Note";
import Numbers from "@/components/market/Numbers";
import Help from "@/components/market/Help";
import ContentSection from "@/components/market/content";
export default function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Note />
      <ContentSection />
      <Help />
      <Numbers />
     
    </>
  );
}
