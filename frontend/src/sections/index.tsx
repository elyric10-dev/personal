import { useSelector } from "react-redux";
import { type RootState } from "~/redux/types";
import HeroSection from "./HeroSection";
import ParticlesBackground from "~/components/Particles/ParticlesBackground";
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";
import FloatingNavigation from "~/components/FloatingNavigation";
import useIsClient from "~/hooks/useIsClient";
import { AnimatePresence } from "framer-motion";

const SectionPages = () => {
  const isClient = useIsClient();
  const currentTheme = useSelector((state: RootState) => state.theme.isDark);
  const isDark = isClient && currentTheme;

  return (
    <main
      className={`absolute top-0 h-screen w-screen ${
        isDark ? "bg-black25" : "bg-gray-50"
      }`}
    >
      <AnimatePresence>
        <div className="relative">
          <FloatingNavigation />
          <ParticlesBackground />
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ContactSection isDark={isDark} />
        </div>
      </AnimatePresence>
    </main>
  );
};

export default SectionPages;
