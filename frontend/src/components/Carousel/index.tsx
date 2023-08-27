import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setIsCarousel } from "~/redux/features/isCarouselSlice";
import { setIsVisible } from "~/redux/features/portfolioBottomSheetSlice";
import ChevronDarkIcon from "~/shared/icons/ChevronDarkIcon";
import getPortfolioData from "~/shared/utils/getPortfolioData";
import useSwipe from "~/hooks/useSwipe";
import useIsMobile from "~/hooks/useIsMobile";
import LoadingSpinner from "../LoadingSpinner";

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
  // const { isLoading, handleLoadingComplete } = useIsLoading();
  const [isLoading, setIsLoading] = useState<boolean[]>(
    Array(carouselImages?.length).fill(true)
  );

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

  const handleLoadingComplete = (index: number) => {
    const updatedIsLoading = [...isLoading];
    updatedIsLoading[index] = true;
    setIsLoading(updatedIsLoading);
  };
  return (
    <div className="fixed top-0 z-10 grid h-full w-screen place-items-center bg-black25">
      <div className="absolute left-0 top-0 z-10 flex h-14 w-full items-center">
        <div
          onClick={handleClose}
          className="trans group flex cursor-default items-center rounded-full bg-opacity-50 px-2 pb-2 text-5xl font-extrabold text-dark hover:bg-black25"
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
                className="trans rotate-90 rounded-full bg-gray-300"
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
                    } trans rounded-full border bg-dark`}
                  ></div>
                )
              )}
            </div>
            <div className="h-full w-9">
              <div
                onClick={() => handleNext()}
                className="trans -rotate-90 rounded-full bg-gray-300"
              >
                <ChevronDarkIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
