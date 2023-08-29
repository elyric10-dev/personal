import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ImageHeroProp = {
  isDark: boolean;
  isDesktop: boolean;
};

const ImageHero = ({ isDark, isDesktop }: ImageHeroProp) => {
  return (
    <div className="relative flex h-full w-full flex-1 justify-center py-52">
      <motion.div className="relative h-full w-full justify-center">
        <Image
          src={`${isDark ? "/elyricHeroDark6.png" : "/elyricHeroLight6.png"}`}
          alt="profile"
          width={isDesktop ? 800 : 500}
          height={isDesktop ? 800 : 500}
          className="absolute-center trans"
        />
      </motion.div>
    </div>
  );
};

export default ImageHero;
