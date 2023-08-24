import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setIsCarousel } from "~/redux/features/isCarouselSlice";
import { setIsVisible } from "~/redux/features/portfolioBottomSheetSlice";
import ChevronDarkIcon from "~/shared/icons/ChevronDarkIcon";
import getPortfolioData from "~/shared/utils/getPortfolioData";
import useSwipe from "~/hooks/useSwipe";
import useIsMobile from "~/hooks/useIsMobile";

type CarouselProp = {
  selectedCardId: number;
};
const Carousel = ({ selectedCardId }: CarouselProp) => {
  const dispatch = useDispatch();
  const portfolioCards = getPortfolioData();
  const [currentId, setCurrentId] = useState(1);
  const carouselImages = portfolioCards[selectedCardId - 1]?.projectImagesLink;
  const { isMobile, isTablet } = useIsMobile();
  const isDesktop = !isMobile && !isTablet;

  const handleClose = () => {
    dispatch(setIsCarousel(false));
    dispatch(setIsVisible(true));
  };

  const handleGotoImage = (id?: number, imageLink?: string) => {
    const element = document.getElementById(imageLink || "");
    element?.scrollIntoView({ behavior: "smooth" });
    setCurrentId(id || 0);
  };

  useEffect(() => {
    if (currentId <= 0) {
      setCurrentId(carouselImages?.length ?? 0);

      handleGotoImage(
        carouselImages?.length,
        `image${carouselImages?.length || 0}`
      );
    } else if (carouselImages && currentId > carouselImages.length) {
      setCurrentId(1);
      handleGotoImage(1, `image${1}`);
    }
  }, [carouselImages, currentId]);

  const handleNext = () => {
    handleGotoImage(currentId + 1, `image${currentId + 1}`);
  };

  const handlePrevious = () => {
    handleGotoImage(currentId - 1, `image${currentId - 1}`);
  };

  useSwipe({ onSwipeRight: handleNext, onSwipeLeft: handlePrevious });

  return (
    <div className="fixed top-0 z-10 grid h-full w-screen place-items-center bg-black25">
      <div className="absolute left-0 top-0 flex h-14 w-full items-center">
        <div
          onClick={handleClose}
          className="trans group cursor-default rounded-full px-2 pb-2 text-5xl font-extrabold text-gray-100 hover:bg-gray-500"
        >
          <span className="trans group-hover:text-gray-100">←</span>
        </div>
      </div>

      <div
        className={`${
          isDesktop ? "h-[720px]" : "h-[480px]"
        } relative flex w-full overflow-x-hidden scrollbar-hide`}
      >
        {/* IMAGES  */}
        {carouselImages?.map((imageLink, index) => (
          <div
            key={index}
            id={`image${imageLink.id}`}
            className={`${
              isDesktop ? "h-[720px]" : "h-[480px]"
            } relative w-full flex-shrink-0`}
          >
            <Image
              src={imageLink.link}
              alt="portfolio"
              fill
              objectFit="cover"
            />
          </div>
        ))}

        {/* NAVIGATION  */}
        <div className="fixed bottom-0 flex h-16 w-full items-center justify-center">
          <div className="absolute bottom-1/2 left-2 h-full w-9 translate-y-3/4">
            <div
              onClick={() => handlePrevious()}
              className="trans rotate-90 rounded-full bg-gray-400 hover:bg-gray-200"
            >
              <ChevronDarkIcon />
            </div>
          </div>
          <div className="flex h-full items-center gap-2">
            {portfolioCards[selectedCardId - 1]?.projectImagesLink.map(
              (imageLink, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleGotoImage(imageLink.id, `image${imageLink.id}`)
                  }
                  className={`${
                    currentId === imageLink.id ? "h-4 w-4" : "h-2 w-2"
                  } trans rounded-full border border-black25 bg-dark`}
                ></div>
              )
            )}
          </div>
          <div className="absolute bottom-1/2 right-2 h-full w-9 translate-y-3/4">
            <div
              onClick={() => handleNext()}
              className="trans -rotate-90 rounded-full bg-gray-400 hover:bg-gray-200"
            >
              <ChevronDarkIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
