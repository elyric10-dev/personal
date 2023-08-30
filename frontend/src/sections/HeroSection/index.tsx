import SocialSection from "./SocialSection";
import useIsMobile from "~/hooks/useIsMobile";
import WelcomeSection from "./WelcomeSection";
import ImageHero from "./ImageHero";
import useIsDark from "~/hooks/useIsDark";
import DetectCurrentPage from "~/components/DetectCurrentPage";

const HeroSection = () => {
  const isDark = useIsDark();
  const { isMobile, isTablet } = useIsMobile();
  const isDesktop = !isMobile && !isTablet;

  return (
    <>
      <div id="home" className={`relative h-full max-h-[1440px] w-full`}>
        <DetectCurrentPage topPageId={"home"} currentPageId={"home"} />
        <div
          className={`${
            isDesktop ? "flex-row" : "flex-col"
          } relative flex h-[90%] w-full`}
        >
          <WelcomeSection isDark={isDark} />
          <ImageHero isDark={isDark} isDesktop={isDesktop} />
        </div>
        <SocialSection />
      </div>
    </>
  );
};

export default HeroSection;
