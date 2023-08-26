import React, { Fragment, useRef } from "react";
import getPortfolioData from "~/shared/utils/getPortfolioData";
import Image from "next/image";
import useIsMobile from "~/hooks/useIsMobile";
import { useDispatch } from "react-redux";
import { setIsCarousel } from "~/redux/features/isCarouselSlice";
import { type selectedCardIdProp } from "~/shared/utils/types";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const CarouselPreview = ({ selectedCardId }: selectedCardIdProp) => {
  const portfolioCards = getPortfolioData();

  const { isMobile, isTablet } = useIsMobile();
  const isDesktop = !isMobile && !isTablet;
  const previewImageRef = useRef(null);
  const previewImageIsIsView = useInView(previewImageRef, { once: true });

  const dispatch = useDispatch();
  const handleCarouselClick = () => {
    dispatch(setIsCarousel(true));
  };
  return (
    <Fragment>
      <motion.div
        ref={previewImageRef}
        initial={{ y: 200, opacity: 0 }}
        animate={{
          y: previewImageIsIsView ? 0 : 200,
          opacity: previewImageIsIsView ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        className={`${
          isDesktop ? "h-[480px]" : isTablet ? "h-96" : "h-80"
        } relative flex h-80 w-full flex-col overflow-hidden rounded-2xl border`}
      >
        <Image
          src={portfolioCards[selectedCardId - 1]?.image || ""}
          alt="image"
          fill
          objectFit="cover"
        />
        <div
          onClick={handleCarouselClick}
          className="trans absolute inset-0 grid flex-1 cursor-pointer place-items-center hover:bg-[rgba(0,0,0,0.4)]"
        ></div>
      </motion.div>
    </Fragment>
  );
};

export default CarouselPreview;
