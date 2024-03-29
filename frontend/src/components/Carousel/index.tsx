import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setIsCarousel } from "~/redux/features/isCarouselSlice";
import { setIsVisible } from "~/redux/features/portfolioBottomSheetSlice";
import getPortfolioData from "~/shared/utils/getPortfolioData";
import useSwipe from "~/hooks/useSwipe";
import useIsMobile from "~/hooks/useIsMobile";
import LoadingSpinner from "../LoadingSpinner";
import useMultipleIsLoading from "~/hooks/useMultipleIsLoading";
import useIsDark from "~/hooks/useIsDark";
import ChevronPlainIcon from "~/shared/icons/ChevronPlain";

type CarouselProp = {
  selectedCardId: number;
};
const Carousel = ({ selectedCardId }: CarouselProp) => {
  const isDark = useIsDark();
  const dispatch = useDispatch();
  const portfolioCards = getPortfolioData();
  const [currentId, setCurrentId] = useState(1);
  const { isMobile, isTablet } = useIsMobile();
  const isDesktop = !isMobile && !isTablet;
  const carouselImages = portfolioCards[selectedCardId - 1]?.projectImagesLink;
  const { isLoading, handleLoadingComplete } =
    useMultipleIsLoading(carouselImages);

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
      <div className="absolute left-0 top-0 z-10 flex h-14 w-full items-center">
        <div
          onClick={handleClose}
          className={`${
            isDark ? "hover:text-[#fea200]" : "hover:text-[#0092ff]"
          } trans group flex cursor-default items-center rounded-full bg-opacity-50 px-2 pb-2 text-5xl font-extrabold text-gray-200 hover:bg-black25`}
        >
          <span className="">←</span>
        </div>
      </div>

      <div
        className={`${
          isDesktop ? "h-[90%]" : "h-full"
        } relative flex w-full overflow-x-hidden scrollbar-hide`}
      >
        {/* IMAGES  */}
        {carouselImages?.map((imageLink, index) => (
          <div
            key={index}
            id={`image${imageLink.id}`}
            className={`${isDesktop ? "" : ""} relative w-full flex-shrink-0`}
          >
            {isLoading && <LoadingSpinner />}
            <Image
              src={imageLink.link}
              alt="portfolio"
              fill
              objectFit="contain"
              onLoadingComplete={() => handleLoadingComplete(index)}
            />
          </div>
        ))}

        {/* NAVIGATION  */}
        <div className="fixed bottom-0 flex h-[5%] w-full items-center justify-center">
          <div className="relative flex h-full w-full items-center justify-center gap-3">
            <div className="relative h-full w-9">
              <div
                onClick={() => handlePrevious()}
                className="trans grid h-full rotate-180 place-items-center"
              >
                <ChevronPlainIcon className="fill-gray-300" />
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
                    } ${
                      isDark ? "bg-[#fea200]" : "bg-[#0092ff]"
                    } trans rounded-full border`}
                  ></div>
                )
              )}
            </div>
            <div className="h-full w-9">
              <div
                onClick={() => handleNext()}
                className="trans grid h-full rotate-0 place-items-center"
              >
                <ChevronPlainIcon className="fill-gray-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
