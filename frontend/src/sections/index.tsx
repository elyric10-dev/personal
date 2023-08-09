import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { type RootState } from "~/redux/types";
import HeroSection from "./HeroSection";
import ParticlesBackground from "~/components/Particles/ParticlesBackground";
import AboutSection from "./AboutSection";
import PortfolioSection from "./PortfolioSection";
import ContactSection from "./ContactSection";

const SectionPages = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.isDark);
  const [isClient, setIsClient] = useState(false);
  const isDark = isClient && currentTheme;

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main
      className={`absolute top-0 h-screen w-screen ${
        isDark ? "bg-black25" : "bg-gray-50"
      }`}
    >
      <div className="relative">
        <ParticlesBackground />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection isDark={isDark} />
      </div>
    </main>
  );
};

export default SectionPages;
