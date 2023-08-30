import { motion } from "framer-motion";
import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";
import { setScrollCount } from "~/redux/features/mouseScrollSlice";
import Typewriter from "typewriter-effect";

type WelcomeSectionProp = {
  isDark: boolean;
  isDesktop: boolean;
};

const WelcomeSection = ({ isDark, isDesktop }: WelcomeSectionProp) => {
  const dispatch = useDispatch();

  const handleClick = (navLink: string) => {
    dispatch(setCurrentNavLink(navLink));
    const element = document.getElementById(navLink);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    dispatch(setScrollCount(1));
  };

  return (
    <div
      className={`relative flex h-full w-full flex-1 justify-center ${
        isDesktop ? "pt-24" : "pt=0"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex h-full w-full min-w-[420px] flex-1 items-center justify-center"
      >
        <div
          className={`${
            isDark
              ? "bg-black25 bg-opacity-50 p-4 shadow-gray-500 backdrop-blur-[5px]"
              : "bg-gray-50 bg-opacity-40 p-4 shadow-gray-600 backdrop-blur-[5px]"
          } mx-6 grid max-w-[436px] gap-1 rounded-xl border shadow-md md:max-w-[600px] md:gap-2 lg:max-w-[720px] lg:gap-4 xl:max-w-[920px]`}
        >
          <h3
            className={`text-lg ${
              isDark ? "text-gray-200" : "text-gray-500"
            } md:text-xl`}
          >
            Welcome to my Portfolio!
          </h3>
          <h1
            className={`${
              isDark ? "text-dark" : "text-light"
            }  relative overflow-hidden pl-2 text-3xl font-semibold md:text-4xl`}
          >
            <Typewriter
              options={{
                strings: ["I'M ELYRIC MANATAD", "I'M A WEB DEVELOPER"],
                autoStart: true,
                loop: true,
                deleteSpeed: -1000,
              }}
            />
          </h1>
          <h2
            className={`${
              isDark ? "text-gray-200" : "text-black25"
            } text-md lg:text-lg`}
          >
            A{" "}
            <span
              className={`${
                isDark ? "text-dark" : "text-light"
              } text-lg font-semibold opacity-90`}
            >
              Web Developer
            </span>{" "}
            with a passion for creating stunning and user-friendly websites.
            Through code, I turn ideas into reality and bring digital
            experiences to life. Take a journey through my projects and
            let&apos;s connect to build something awesome together!
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0 }}
            className="flex justify-center"
          >
            <input
              onClick={() => handleClick("portfolio")}
              type="button"
              className={`text-md mt-12 cursor-pointer rounded-md transition-all duration-300 ${
                isDark
                  ? "bg-dark text-black25 shadow-gray-400 hover:shadow-gray-300"
                  : "bg-light text-gray-50 shadow-gray-600 hover:shadow-gray-700"
              }  px-8 py-3 shadow-md hover:shadow-md lg:text-lg`}
              value="SEE MY WORKS"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WelcomeSection;
