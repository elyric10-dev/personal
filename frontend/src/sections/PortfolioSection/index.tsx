import React, { useRef } from "react";
import DetectCurrentPage from "~/components/DetectCurrentPage";
import { motion, useInView } from "framer-motion";
import PortfolioCard from "~/components/PortfolioCard";
import { useDispatch, useSelector } from "react-redux";
import { setIsVisible } from "~/redux/features/portfolioBottomSheetSlice";
import getPortfolioData from "~/shared/utils/getPortfolioData";
import PortfolioBottomSheet from "./PortfolioBottomSheet";
import Carousel from "~/components/Carousel";
import { type RootState } from "~/redux/types";
import { setSelectedCardId } from "~/redux/features/isCarouselSlice";
import useIsDark from "~/hooks/useIsDark";
import useIsMobile from "~/hooks/useIsMobile";
import MarqueeTechStacksIcon from "./MarqueeTechStacksIcon";

const portfolioCards = getPortfolioData();

const PortfolioSection = () => {
  const dispatch = useDispatch();
  const isCarousel = useSelector(
    (state: RootState) => state.isCarousel.isCarousel
  );
  const selectedCardId = useSelector(
    (state: RootState) => state.isCarousel.selectedCardId
  );
  const titleRef = useRef(null);
  const portfolioCardRef = useRef(null);
  const isInTitle = useInView(titleRef);
  const isInPortfolioCardRef = useInView(portfolioCardRef, { once: true });
  const isDark = useIsDark();

  const { isMobile } = useIsMobile();

  const handleCardClick = (id: number) => {
    dispatch(setIsVisible(true));
    dispatch(setSelectedCardId(id));
  };
  return (
    <div id="portfolio" className="relative h-auto w-full">
      <DetectCurrentPage topPageId="portfolio" currentPageId="portfolio" />
      {/* <DetectCurrentPage topPageId="portfolio" currentPageId="portfolio" /> */}
      <motion.h1
        ref={titleRef}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: isInTitle ? 0 : -200, opacity: isInTitle ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`${
          isDark ? "text-gray-100" : "text-black25"
        } py-6 pl-6 text-5xl font-bold`}
      >
        MY PROJECTS
      </motion.h1>
      <div
        className={`${
          isDark ? "bg-gray-800 bg-opacity-70" : "bg-[#e0d6c8] bg-opacity-70"
        } p border-b border-t border-b-slate-400 border-t-slate-400`}
      >
        <div className="relative grid w-full items-center justify-center overflow-x-scroll py-28 scrollbar-hide md:flex md:flex-wrap md:items-start md:justify-center md:gap-x-0 md:gap-y-16 md:py-20">
          {portfolioCards.map((portfolioCard, index) => (
            <motion.div
              ref={portfolioCardRef}
              key={portfolioCard.id}
              initial={{ x: isMobile ? 0 : -100, scale: 1.3, opacity: 0 }}
              animate={{
                x: isMobile ? 0 : isInPortfolioCardRef ? 0 : -100,
                scale: isMobile ? 1 : isInPortfolioCardRef ? 1 : 1.3,
                opacity: isMobile ? 1 : isInPortfolioCardRef ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.2 * index }}
            >
              <PortfolioCard
                id={portfolioCard.id}
                title={portfolioCard.title}
                image={portfolioCard.image}
                description={portfolioCard.description}
                onCardClick={() => handleCardClick(portfolioCard.id)}
                techStackIcon={portfolioCard.techStacks}
                projectGithubLink={portfolioCard.projectGithubLink}
              />
            </motion.div>
          ))}
          <PortfolioBottomSheet selectedCardId={selectedCardId} />
          {isCarousel && <Carousel selectedCardId={selectedCardId} />}
        </div>
        <MarqueeTechStacksIcon />
      </div>
    </div>
  );
};

export default PortfolioSection;
