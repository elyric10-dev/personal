import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";
import ChevronDarkIcon from "~/shared/icons/ChevronDarkIcon";
import { useDispatch } from "react-redux";
import { setDirectScrollCount } from "~/redux/features/mouseScrollSlice";

const AboutSection = () => {
  const dispatch = useDispatch();
  const handleNav = (currentNavLink: string): void => {
    dispatch(setCurrentNavLink(currentNavLink));
    dispatch(setDirectScrollCount(4));
  };
  return (
    <div id="about" className="relative h-screen w-full bg-green-300">
      ABOUT SECTION
      <div className="absolute bottom-0 h-20 w-full">
        <ScrollLink
          onClick={() => handleNav("portfolio")}
          to="portfolio"
          smooth={true}
          duration={500}
        >
          <ChevronDarkIcon className="absolute inset-0 m-auto h-16 w-16 animate-bounce cursor-pointer rounded-full bg-white opacity-40" />
        </ScrollLink>
      </div>
    </div>
  );
};

export default AboutSection;
