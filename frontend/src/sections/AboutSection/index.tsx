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
        className={`${isMobile || isTablet ? "flex-col" : "flex-row"} ${
          isDesktop ? "h-full max-h-[1440px] min-h-[1080px]" : ""
        } relative flex w-full`}
      >
        <DetectCurrentPage topPageId="about" currentPageId="about" />
        <ProfileCard isDark={isDark} />
        <div
          className={`${
            isDark
              ? "from-[rgba(254,162,0,0.8)] to-[rgba(255,179,0,0.8)]"
              : "from-[rgba(0,146,255,0.8)] to-[rgba(0,146,255,0.8)]"
          } ${
            isMobile ? "" : "flex-2 grid place-items-center"
          } relative h-full w-full min-w-[300px] max-w-[940px] bg-opacity-80 bg-gradient-to-tr`}
        >
          <AboutMeSection isMobile={isMobile} />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
