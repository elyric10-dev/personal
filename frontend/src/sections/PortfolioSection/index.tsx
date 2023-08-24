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

  const handleCardClick = (id: number) => {
    dispatch(setIsVisible(true));
    dispatch(setSelectedCardId(id));
  };
  return (
    <div id="portfolio" className="relative h-auto w-full">
      <DetectCurrentPage topPageId="about" currentPageId="portfolio" />
      <motion.h1
        ref={titleRef}
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: isInTitle ? 0 : -200, opacity: isInTitle ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="py-6 pl-6 text-5xl font-bold text-gray-100"
      >
        MY PROJECTS
      </motion.h1>
      <div className="grid w-full items-center justify-center overflow-x-scroll border-b border-t border-b-slate-400 border-t-slate-400 bg-gray-800 bg-opacity-70 py-28 scrollbar-hide md:flex md:flex-wrap md:items-start md:justify-center md:gap-x-0 md:gap-y-16 md:py-20">
        {portfolioCards.map((portfolioCard, index) => (
          <motion.div
            ref={portfolioCardRef}
            key={portfolioCard.id}
            initial={{ x: -100, scale: 1.3, opacity: 0 }}
            animate={{
              x: isInPortfolioCardRef ? 0 : -100,
              scale: isInPortfolioCardRef ? 1 : 1.3,
              opacity: isInPortfolioCardRef ? 1 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.2 * index }}
          >
            <PortfolioCard
              id={portfolioCard.id}
              title={portfolioCard.title}
              image={portfolioCard.image}
              description={portfolioCard.description}
              onCardClick={() => handleCardClick(portfolioCard.id)}
            />
          </motion.div>
        ))}
        <PortfolioBottomSheet selectedCardId={selectedCardId} />
        {isCarousel && <Carousel selectedCardId={selectedCardId} />}
      </div>
      <div></div>
    </div>
  );
};

export default PortfolioSection;
