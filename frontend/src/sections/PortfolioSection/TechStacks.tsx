import React, { Fragment, useRef } from "react";

import getPortfolioData from "~/shared/utils/getPortfolioData";
import { type selectedCardIdProp } from "~/shared/utils/types";
import { motion, useInView } from "framer-motion";
import useIsMobile from "~/hooks/useIsMobile";
import useIsDark from "~/hooks/useIsDark";
import getPortfolioIcon from "~/hooks/useGetPortfolioIcon";

const TechStacks = ({ selectedCardId }: selectedCardIdProp) => {
  const { isMobile, isTablet } = useIsMobile();
  const isDesktop = !isMobile && !isTablet;
  const portfolioTechStacks = getPortfolioData();
  const techStackRef = useRef(null);
  const techStackIsInView = useInView(techStackRef, { once: true });
  const othertechStackRef = useRef(null);
  const otherTechStackIsInView = useInView(othertechStackRef, { once: true });
  const isDark = useIsDark();

  return (
    <Fragment>
      <div
        className={`${isDesktop ? "max-w-[650px]" : "w-full"} grid gap-5 py-6`}
      >
        <h2 className="text-xl font-semibold">Tech Stack: </h2>
        <ul className="flex flex-wrap items-center justify-between gap-3">
          {portfolioTechStacks[selectedCardId - 1]?.techStacks.map(
            (techStack, index) => (
              <motion.li
                key={techStack.id}
                ref={techStackRef}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{
                  y: techStackIsInView ? 0 : 100,
                  scale: techStackIsInView ? 0.9 : 1,
                  opacity: techStackIsInView ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className={` ${
                  isDark ? "bg-slate-600" : "bg-gray-200"
                } flex flex-grow flex-col items-center justify-center rounded-lg px-12 py-6 shadow-md`}
              >
                {getPortfolioIcon({
                  icon: techStack.icon,
                  className: "h-16 w-16 fill-gray-400",
                })}
                <p>{techStack.name}</p>
              </motion.li>
            )
          )}
        </ul>
        <h2 className="text-xl font-semibold">Others: </h2>
        <ul className="flex flex-wrap items-center justify-between gap-3">
          {portfolioTechStacks[selectedCardId - 1]?.otherTechStacks.map(
            (otherTechStack, index) => (
              <motion.li
                key={otherTechStack.id}
                ref={othertechStackRef}
                initial={{ opacity: 0, scale: 0.9, y: 100 }}
                animate={{
                  y: otherTechStackIsInView ? 0 : 100,
                  scale: otherTechStackIsInView ? 0.9 : 1,
                  opacity: otherTechStackIsInView ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
                className={` ${
                  isDark ? "bg-slate-600" : "bg-gray-200"
                } flex flex-grow flex-col items-center justify-center rounded-lg px-12 py-6 shadow-md`}
              >
                {getPortfolioIcon({
                  icon: otherTechStack.icon,
                  className: "h-16 w-16 fill-gray-400",
                })}
                <p>{otherTechStack.name}</p>
              </motion.li>
            )
          )}
        </ul>
      </div>
    </Fragment>
  );
};

export default TechStacks;
