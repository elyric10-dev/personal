import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type RootState } from "~/redux/types";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";
import { Link as ScrollLink } from "react-scroll";
import getNavLinks from "~/shared/utils/getNavLinks";
import useMouseScroll from "~/hooks/useMouseScroll";
import { setDirectScrollCount } from "~/redux/features/mouseScrollSlice";

const FloatingNavigation = () => {
  const dispatch = useDispatch();
  const navLinks = getNavLinks();
  const currentNavLink = useSelector(
    (state: RootState) => state.currentNavLink.navLink
  );
  const [hoveredNavLink, setHoveredNavLink] = useState("home");
  const [isHovered, setIsHovered] = useState(false);
  const mouseValue = useMouseScroll();

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

  const handleNav = (navLink: string): void => {
    dispatch(setCurrentNavLink(navLink));

    if (navLink === "home") {
      dispatch(setDirectScrollCount(0));
    } else if (navLink === "about") {
      dispatch(setDirectScrollCount(2));
    } else if (navLink === "portfolio") {
      dispatch(setDirectScrollCount(4));
    } else if (navLink === "contact") {
      dispatch(setDirectScrollCount(6));
    }
  };

  useEffect(() => {
    console.log(mouseValue);
  }, [mouseValue]);

  return (
    <div className={`fixed right-0 top-1/2 z-[1] -translate-y-1/2 transform`}>
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-black25 bg-opacity-40 px-3 py-4 shadow-md">
        {navLinks.map((navLink, index) => (
          <ScrollLink
            key={index}
            onClick={() => handleNav(navLink.id)}
            to={navLink.id}
            smooth={true}
            duration={500}
          >
            <div
              className={`${
                currentNavLink === navLink.id ? "h-4 w-4 bg-gray-50" : "h-2 w-2"
              } rounded-full border-2 transition-all duration-300 hover:bg-gray-50`}
              onMouseEnter={() => handleHover(navLink.id)}
              onMouseLeave={() => handleHover(navLink.id)}
            >
              {hoveredNavLink === navLink.id && isHovered && (
                <div
                  className={`absolute ${
                    index === 0
                      ? "-left-14"
                      : index === 1
                      ? "-left-[60px]"
                      : index === 2
                      ? "-left-[84px]"
                      : index === 3
                      ? "-left-[74px]"
                      : "-left-20"
                  } top-10 rounded-lg bg-black25 bg-opacity-80 p-2 text-xs text-gray-50`}
                >
                  {navLink.label}
                </div>
              )}
            </div>
          </ScrollLink>
        ))}
      </div>
    </div>
  );
};

export default FloatingNavigation;
