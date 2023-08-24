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
      className={`absolute top-0 h-screen w-full max-w-[1920px] overflow-auto scrollbar-hide ${
        isDark ? "bg-black25" : "bg-gray-50"
      }`}
    >
      <AnimatePresence>
        <section className="relative h-full w-full overflow-auto scroll-smooth scrollbar-hide">
          <FloatingNavigation />
          <ParticlesBackground />
          <HeroSection />
          <AboutSection />
          <PortfolioSection />
          <ContactSection isDark={isDark} />
        </section>
      </AnimatePresence>
    </main>
  );
};

export default SectionPages;
