import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { type RootState } from "~/redux/types";
import HeroSection from "./HeroSection";
import SocialSection from "./HeroSection/SocialSection";

const SectionPages = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.isDark);
  const [isClient, setIsClient] = useState(false);
  const isDark = isClient && currentTheme;

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <main
      className={`absolute flex h-screen w-screen items-center ${
        isDark ? "bg-black25" : "bg-gray-50"
      }`}
    >
      <HeroSection />
      <SocialSection />
    </main>
  );
};

export default SectionPages;