import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import { setDirectScrollCount } from "~/redux/features/mouseScrollSlice";

interface AboutMeSectionProp {
  isMobile: boolean;
}

const AboutMeSection = ({ isMobile }: AboutMeSectionProp) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    const element = document.getElementById("portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
    dispatch(setDirectScrollCount(1));
  };

  return (
    <div
      className={`${
        isMobile ? "h-full" : "h-full"
      } flex w-full flex-col items-center justify-center p-8`}
    >
      <h1 className="pb-6 text-4xl font-bold text-white">ABOUT ME</h1>
      <h2 className="text-xl font-semibold">
        Here&apos;s who I am & what I do
      </h2>
      <p className="text-md rounded-xl bg-gray-200 bg-opacity-75 p-6 shadow-lg">
        It all start with my childhood friend when I was in high school. Showing
        me his very simple website that has a clickable image and when he clicks
        that it will redirect to the other page that a lot of images of his own.
        That was so simple but for me that time it is so cool and even ask
        myself if I could make it too. So, I give it a try and search on google
        to how to make a website. So I discovered codecademy and from there I
        learned a lot of basics for building a simple website with HTML and CSS.
        I level up my basic skills and started to search about the javascript to
        make an interactive website. The day comes I stopped practicing on my
        own and started to work and experienced various of jobs like washer on
        fast food chain, receiving checker, inventory clerk and stock clerk that
        was not aligned on my passion. When I was working I realized that my
        life is not changing or improving and even I&apos;m not happy on my jobs
        anymore. So I decided to enroll at CITE as a Computer Engineering to
        continue pursuing my passion on web development. After a lot of
        sacrifices and being patient to life I was so happy when I became a
        Junior Web Developer at Sun Asterisk Philippines as an internship or OJT
        that I believed it would be the stepping stone to become a web developer
        as what I really wanted to pursue way back then. I already accomplished
        my OJT and I am currently looking for a job opportunities to work in the
        field of web development and I still learning a lot of stuff that
        currently that I was amazed for.
      </p>
      <div className="flex w-full justify-evenly pt-14">
        <Link
          href="https://github.com/elyric10-dev/Files/blob/main/elyric-resume.docx"
          target="_blank"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            className="cursor-pointer rounded-lg border bg-black25 bg-opacity-80 px-8 py-2 text-white hover:bg-opacity-100"
          >
            RESUME
          </motion.div>
        </Link>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
          onTap={handleClick}
          className="cursor-pointer rounded-lg border bg-black25 bg-opacity-80 px-8 py-2 text-white hover:bg-opacity-100"
        >
          PROJECTS
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeSection;
