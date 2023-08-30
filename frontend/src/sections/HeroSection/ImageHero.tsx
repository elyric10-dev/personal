import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ImageHeroProp = {
  isDark: boolean;
};

const ImageHero = ({ isDark }: ImageHeroProp) => {
  return (
    <div className="relative flex h-full w-full flex-1 justify-center py-52">
      <motion.div className="relative h-full w-full justify-center">
        <Image
          src={`${isDark ? "/elyricHeroDark.png" : "/elyricHeroLight.png"}`}
          alt="profile"
          width={800}
          height={800}
          className="absolute-center trans"
        />
      </motion.div>
    </div>
  );
};

export default ImageHero;
