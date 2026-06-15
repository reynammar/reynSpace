import Navbar from '@/shared/Navbar';
import FloatingCV from '@/shared/FloatingCV';
import HeroSection from '@/feature/HeroSection';
import AboutSection from '@/feature/AboutSection';
import TechStackSection from '@/feature/TechStackSection';
import ExperienceSection from '@/feature/ExperienceSection';
import ProjectSection from '@/feature/ProjectSection';
import ContactSection from '@/feature/ContactSection';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
      
      <FloatingCV />
    </div>
  );
}