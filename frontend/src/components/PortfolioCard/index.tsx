import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import useIsMobile from "~/hooks/useIsMobile";

type portfolioProps = {
  id: number;
  title: string;
  image: string;
  description: string;
  onCardClick: (id: number) => void;
};

const PortfolioCard = ({
  id,
  title,
  image,
  description,
  onCardClick,
}: portfolioProps) => {
  const { isMobile } = useIsMobile();
  const controls = useAnimation();

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
      className="relative flex h-96 w-64 flex-shrink-0 cursor-pointer flex-col items-center rounded-lg border border-[rgba(0,0,0,0.1)] bg-gray-200 px-4 py-8 shadow-[-5px_5px_10px_0px_rgb(0,0,0,0.5)] transition-shadow duration-200 hover:z-10 hover:shadow-[0px_40px_25px_-20px_rgb(0,0,0,0.25)]"
      onMouseEnter={() => {
        if (isMobile) {
          void handleMobileHoverStart();
        } else {
          void handleDesktopHoverStart();
        }
      }}
      onMouseLeave={() => {
        if (isMobile) {
          void handleMobileHoverEnd();
        } else {
          void handleDesktopHoverEnd();
        }
      }}
      initial={{ scale: 1.15 }}
      animate={controls}
      onClick={() => onCardClick(id)}
    >
      <div className="relative h-44 w-full overflow-hidden rounded-lg">
        <Image fill src={image} alt={title} className="w-full object-cover" />
      </div>
      <h2 className="mt-8 text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-gray-600">
        {description.length > 100
          ? description.substring(0, 100) + "..."
          : description}
      </p>
    </motion.div>
  );
};

export default PortfolioCard;
