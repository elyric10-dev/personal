import React, { useEffect, useState } from "react";
import BottomSheet from "~/components/BottomSheet";
import ProgressList from "~/components/ProgressList";
import getPortfolioData from "~/shared/utils/getPortfolioData";
import useIsMobile from "~/hooks/useIsMobile";
import TechStacks from "./TechStacks";
import CarouselPreview from "./CarouselPreview";
import useIsDark from "~/hooks/useIsDark";
import { type selectedCardIdProp } from "~/shared/utils/types";
import { type projectDescription } from "~/shared/utils/types";
import { type portfolioDataProp } from "~/shared/utils/types";

const portfolioData: portfolioDataProp[] = getPortfolioData();

const PortfolioBottomSheet = ({ selectedCardId }: selectedCardIdProp) => {
  const { isMobile, isTablet } = useIsMobile();
  const isDesktop = !isMobile && !isTablet;

  const [descriptions, setDescriptions] = useState<projectDescription[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDark = useIsDark();

  useEffect(() => {
    const projectDescriptions =
      portfolioData[selectedCardId - 1]?.projectDescription || [];
    setDescriptions(projectDescriptions);
    setCurrentIndex(0);
  }, [selectedCardId]);

  useEffect(() => {
    if (currentIndex < descriptions.length) {
      const timeout = setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 700);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [currentIndex, descriptions]);
  return (
    <BottomSheet>
      <div className={`${isDark ? "text-gray-300" : ""} `}>
        <h1 className="pb-4 pt-2 text-3xl font-semibold">
          {portfolioData[selectedCardId - 1]?.title}
        </h1>
        <p className="text-xl font-semibold">Description:</p>
        <div className="border-b border-b-gray-400 py-3">
          <p>{portfolioData[selectedCardId - 1]?.description}</p>
        </div>

        <p className="py-3 text-xl font-semibold">What is in the project:</p>
        <div className={`${isDesktop ? "mb-6 flex gap-6" : ""} mb-6`}>
          <ul
            className={`${
              isDesktop ? "w-full" : ""
            } rounded-lg bg-gradient-to-br px-2`}
          >
            {descriptions.slice(0, currentIndex).map((description, index) => (
              <ProgressList
                key={index}
                isLastIndex={index === descriptions.length - 1 ? false : true}
                title={description.title}
                description={description.description}
              />
            ))}
          </ul>
          {isDesktop && (
            /* TECH STACKS  */
            <TechStacks selectedCardId={selectedCardId} />
          )}
        </div>

        {/* CAROUSEL Preview */}
        <p className="py-3 text-xl font-semibold">Screenshots:</p>
        <CarouselPreview selectedCardId={selectedCardId} />

        {(isMobile || isTablet) && (
          /* TECH STACKS  */
          <TechStacks selectedCardId={selectedCardId} />
        )}
      </div>
    </BottomSheet>
  );
};

export default PortfolioBottomSheet;
