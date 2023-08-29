import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "~/redux/types";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";
import getNavLinks from "~/shared/utils/getNavLinks";
import { motion } from "framer-motion";
import { setDirectScrollCount } from "~/redux/features/mouseScrollSlice";

const FloatingNavigation = () => {
  const dispatch = useDispatch();
  const navLinks = getNavLinks();
  const currentNavLink = useSelector(
    (state: RootState) => state.currentNavLink.navLink
  );
  const [hoveredNavLink, setHoveredNavLink] = useState("home");
  const [isHovered, setIsHovered] = useState(false);

  const handleNavLink = (navLink: string) => {
    const element = document.getElementById(navLink);
    if (navLink != "home") dispatch(setDirectScrollCount(1));
    else dispatch(setDirectScrollCount(0));

    dispatch(setCurrentNavLink(navLink));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isHovered) {
      const timer = setTimeout(() => {
        setIsHovered(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  const handleHover = (navLink: string) => {
    if (navLink === navLink) {
      setIsHovered(true);
      setHoveredNavLink(navLink);
    }
  };

  return (
    <div className={`fixed right-0 top-1/2 z-[1] -translate-y-1/2 transform`}>
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-black25 bg-opacity-40 px-3 py-4 shadow-md">
        {navLinks.map((navLink, index) => (
          <div
            key={index}
            onClick={() => handleNavLink(navLink.id)}
            className={`${
              currentNavLink === navLink.id ? "h-4 w-4 bg-gray-50" : "h-2 w-2"
            } rounded-full border-2 transition-all duration-300 hover:bg-gray-50`}
            onMouseEnter={() => handleHover(navLink.id)}
            onMouseLeave={() => handleHover(navLink.id)}
          >
            {hoveredNavLink === navLink.id && isHovered && (
              <motion.div
                initial={{ opacity: 0, x: -100, y: 10 }}
                animate={{ opacity: 1, x: -100, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute -right-[55px] top-10 rounded-lg bg-black25 bg-opacity-80 p-2 text-center text-xs text-gray-50`}
              >
                {navLink.label}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingNavigation;
