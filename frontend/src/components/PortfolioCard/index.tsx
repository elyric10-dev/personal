import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import useIsMobile from "~/hooks/useIsMobile";
import GithubIcon from "~/shared/icons/techStacks/GithubIcon";
import getPortfolioIcon from "~/hooks/useGetPortfolioIcon";
import ArrowIcon from "~/shared/icons/ArrowIcon";
import Link from "next/link";
import { type portfolioCardProps } from "~/shared/utils/types";
import ShimmerLoading from "../ShimmerLoading";
import useIsLoading from "~/hooks/useIsLoading";

const PortfolioCard = ({
  id,
  title,
  image,
  description,
  onCardClick,
  techStackIcon,
  projectGithubLink,
}: portfolioCardProps) => {
  const { isMobile } = useIsMobile();
  const controls = useAnimation();
  const { isLoading, handleLoadingComplete } = useIsLoading();

  const handleMobileHoverStart = async () => {
    await controls.start({
      x: 0,
      y: -80,
      transition: { duration: 0.2 },
    });
    await controls.start({
      x: 0,
      y: 0,
      scale: 1.3,
      transition: { duration: 0.2 },
    });
  };

  const handleMobileHoverEnd = async () => {
    await controls.start({
      x: 0,
      y: -100,
      transition: { duration: 0.2 },
    });
    await controls.start({
      x: 0,
      y: -100,
      scale: 1.25,
      transition: { duration: 0.2 },
    });
    controls.stop();
    void controls.start({ x: 0, y: 0, scale: 1.15 });
  };

  const handleDesktopHoverStart = async () => {
    await controls.start({
      y: 0,
      x: -50,
      transition: { duration: 0.2 },
    });
    await controls.start({
      x: 0,
      y: -20,
      scale: 1.3,
      transition: { duration: 0.2 },
    });
  };

  const handleDesktopHoverEnd = async () => {
    await controls.start({
      scale: 1.3,
      y: -20,
      x: -100,
      transition: { duration: 0.2 },
    });
    await controls.start({
      y: -20,
      x: -120,
      transition: { duration: 0.2 },
    });
    controls.stop();
    void controls.start({ x: 0, y: 0, scale: 1.15 });
  };

  return (
    <motion.div
      className="relative flex h-full w-64 flex-shrink-0 cursor-default flex-col rounded-lg border border-[rgba(0,0,0,0.1)] bg-gray-200 p-2 text-center shadow-[-5px_5px_10px_0px_rgb(0,0,0,0.5)] transition-shadow duration-200 hover:z-10 hover:shadow-[0px_40px_25px_-20px_rgb(0,0,0,0.25)]"
      onMouseEnter={() => {
        if (isMobile) void handleMobileHoverStart();
        else void handleDesktopHoverStart();
      }}
      onMouseLeave={() => {
        if (isMobile) void handleMobileHoverEnd();
        else void handleDesktopHoverEnd();
      }}
      initial={{ scale: 1.15 }}
      animate={controls}
    >
      <div className="relative mb-4 h-36 w-full overflow-hidden rounded shadow-inner shadow-black25">
        <Image
          fill
          src={image}
          alt={title}
          className="w-full object-cover"
          onLoadingComplete={handleLoadingComplete}
        />

        {isLoading && <ShimmerLoading />}
      </div>
      <h2 className="pb-2 text-xl font-semibold">
        {title.length > 20 ? title.substring(0, 20) + "..." : title}
      </h2>
      <p className="text-xs text-gray-600">
        {description.length > 100
          ? description.substring(0, 100) + "..."
          : description}
      </p>
      <ul className="mt-5 flex items-center justify-center gap-2">
        {techStackIcon.map((techStack) => (
          <li
            key={techStack.id}
            className="grid h-8 w-8 place-items-center rounded-full bg-cyan-900 bg-opacity-30"
          >
            {getPortfolioIcon({ icon: techStack.icon, className: "p-1" })}
          </li>
        ))}
      </ul>
      <div className="mt-6 grid gap-2">
        <Link
          href={projectGithubLink}
          onClick={
            projectGithubLink === ""
              ? () =>
                  alert(
                    "Sorry, but I don't have a backup on the practice project on my previous company laptop 😥. Please just see the images of my project that was left and installed in my phone."
                  )
              : () => void 0
          }
          target={`${projectGithubLink === "" ? "" : "_blank"}`}
        >
          <div className="trans flex cursor-pointer justify-center gap-2 rounded bg-gradient-to-tl from-[#3a4658] to-[#212832] px-3 py-2 text-gray-100 shadow-sm hover:shadow-md">
            <GithubIcon className="h-5 w-5 fill-gray-200" />
            <span className="text-sm font-semibold">Source code</span>
          </div>
        </Link>
        <div
          onClick={() => onCardClick(id)}
          className="trans flex cursor-pointer justify-center gap-2 rounded bg-gradient-to-tr from-[#b3b4b7] to-[#d8d9dd] px-3 py-2 text-black25 shadow-sm hover:shadow-md"
        >
          <ArrowIcon className="h-5 w-5 fill-black25" />
          <span className="text-sm font-semibold">Show more</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
