import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import useIsDark from "~/hooks/useIsDark";
import ArrowIcon from "~/shared/icons/ArrowIcon";
import { useDispatch } from "react-redux";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";
import { motion } from "framer-motion";
import { setDirectScrollCount } from "~/redux/features/mouseScrollSlice";

const Footer = () => {
  const dispatch = useDispatch();

  const verseRef = useRef(null);
  const verseIsInView = useInView(verseRef, { once: true });
  const handleNav = (currentNavLink: string): void => {
    const element = document.getElementById(currentNavLink);
    dispatch(setCurrentNavLink(currentNavLink));

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    dispatch(setDirectScrollCount(0));
  };
  const isDark = useIsDark();
  return (
    <footer className="flex flex-col items-center gap-4">
      <div className="flex w-[200px] pt-10">
        <div className="flex">
          <Image
            src={`${isDark ? "/EAM Logo DARK.png" : "/EAM Logo LIGHT.png"}`}
            alt="EAM Logo"
            width={70}
            height={70}
          />
          <div
            className={`${
              isDark ? "text-dark" : "text-light"
            } flex items-center text-xl font-semibold`}
          >
            {"ELYRIC A. MANATAD"}
          </div>
        </div>
      </div>
      <motion.div
        ref={verseRef}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: verseIsInView ? 1 : 0, y: verseIsInView ? 0 : 200 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center"
      >
        <Image src="/paper.jpg" alt="paper" fill />
        <div className="relative flex flex-col items-center gap-4 p-4">
          <i className="text-center text-xl">
            &quot;For I know the plans I have for you,&quot; declares the
            <span className="font-bold"> LORD</span>, &quot;plans to prosper you
            and not to harm you, plans to give you hope and a future.&quot;
          </i>
          <i>Jeremiah 29:11</i>
        </div>
      </motion.div>
      <div className="relative grid h-20 w-full place-items-center bg-gradient-to-t from-[#3a4658] to-[#212832] text-gray-300">
        <p>Made with ❤ by Elyric Manatad</p>
        {/* BACK TO TOP BOTTON  */}
        <div
          onClick={() => handleNav("home")}
          className="absolute bottom-2 right-2 grid place-items-center"
        >
          <ArrowIcon
            className={`${
              isDark ? "bg-dark" : "bg-light"
            } cursor-pointer rounded rounded-br-[1.7rem] shadow-md`}
            width={40}
            height={40}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
