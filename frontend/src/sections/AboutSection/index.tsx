import React from "react";
import useIsDark from "~/hooks/useIsDark";
import useIsMobile from "~/hooks/useIsMobile";
import ProfileCard from "./ProfileCard";
import AboutMeSection from "./AboutMeSection";
import DetectCurrentPage from "~/components/DetectCurrentPage";

const AboutSection = () => {
  const isDark = useIsDark();
  const { isMobile, isTablet } = useIsMobile();
  const isDesktop = !isMobile && !isTablet;
  return (
    <>
      <div
        id="about"
        className={`relative flex w-full ${
          isMobile || isTablet ? "flex-col" : "flex-row"
        } ${isDesktop ? "h-full" : ""}`}
      >
        <DetectCurrentPage topPageId="home" currentPageId="about" />

        <ProfileCard isDark={isDark} />

        <div
          className={`${isDark ? "bg-dark" : "bg-light"} ${
            isMobile ? "" : "flex-2 grid place-items-center"
          } h-full min-w-[300px] max-w-[940px] bg-opacity-80`}
        >
          <AboutMeSection isMobile={isMobile} />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
