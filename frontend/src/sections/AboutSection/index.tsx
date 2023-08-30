import React, { useState } from "react";
import useIsDark from "~/hooks/useIsDark";
import useIsMobile from "~/hooks/useIsMobile";
import ProfileCard from "./ProfileCard";
import AboutMeSection from "./AboutMeSection";
import DetectCurrentPage from "~/components/DetectCurrentPage";
import PDFViewer from "~/components/PDFViewer";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = () => {
  const isDark = useIsDark();
  const { isMobile, isTablet } = useIsMobile();
  const isDesktop = !isMobile && !isTablet;
  const [showViewer, setShowViewer] = useState(false);

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
              ? "from-[#fea200] to-[#ffb300]"
              : "from-[#0092ff] to-[#0092ff]"
          } ${
            isMobile ? "" : "flex-2 grid place-items-center"
          } relative h-full w-full min-w-[300px] max-w-[940px] bg-opacity-80 bg-gradient-to-tr`}
        >
          <AboutMeSection
            isMobile={isMobile}
            onClick={() => setShowViewer(true)}
          />
        </div>

        <AnimatePresence>
          {showViewer && (
            <motion.div
              initial={{ y: "100vh" }}
              animate={{
                y: "0vh",
                transition: {
                  when: "beforeChildren",
                },
              }}
              exit={{
                y: "150vh",
                transition: {
                  when: "afterChildren",
                },
              }}
              transition={{ duration: 0.2 }}
              className="fixed top-0 z-10 h-full w-full overflow-hidden bg-[#323639] scrollbar-hide"
            >
              <PDFViewer
                pdfSrc="./elyric-resume.pdf"
                className="h-full w-full overflow-hidden"
                onClick={() => setShowViewer(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default AboutSection;
