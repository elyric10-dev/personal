/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from "react";
import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";
import { useSelector, useDispatch } from "react-redux";
import BurgerIcon from "~/shared/icons/BurgerIcon";
import { type RootState } from "~/redux/types";
import getNavLinks from "~/shared/utils/getNavLinks";
import useClickOutside from "~/hooks/useClickOutside";
import useIsDark from "~/hooks/useIsDark";
import useIsClient from "~/hooks/useIsClient";
import useIsMobile from "~/hooks/useIsMobile";
import { motion } from "framer-motion";
import SlidingElement from "~/animations/SlidingElement";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";
import useMouseScroll from "~/hooks/useMouseScroll";
import { setDirectScrollCount } from "~/redux/features/mouseScrollSlice";

const HeaderNavigation: React.FC = () => {
  const dispatch = useDispatch();
  const navLinks = getNavLinks();
  const isClient = useIsClient();
  const { isMobile, isTablet } = useIsMobile();
  const currentNavLink = useSelector(
    (state: RootState) => state.currentNavLink.navLink
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useClickOutside(() => setShowDropdown(false));
  const isDark = useIsDark();
  const mouseScroll = useMouseScroll();

  const navText = `${
    isMobile
      ? "text-md font-[300] px-3 py-1 md:px-6 bg-white-100"
      : "text-md lg:text-xl font-[300] md:mx-3 lg:mx-6 border-none hover:rounded-br-2xl hover:rounded-tl-2xl"
  } ${
    isDark
      ? "hover:text-dark hover:bg-gray-600 hover:bg-opacity-20"
      : "hover:text-light hover:bg-gray-300 hover:bg-opacity-20"
  } border border-b cursor-pointer font-semibold`;
  const activeLink = `${isDark ? "text-dark" : "text-light"} font-bold`;

  const isLinkActive = (currentLink: string) =>
    (isClient && currentNavLink) === currentLink;

  const handleClick = () => setShowDropdown(!showDropdown);

  const handleNavLink = (navLink: string) => {
    const element = document.getElementById(navLink);
    dispatch(setCurrentNavLink(navLink));

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    if (navLink != "home") dispatch(setDirectScrollCount(1));
    else dispatch(setDirectScrollCount(0));
  };

  return (
    <motion.div
      animate={{
        y: mouseScroll >= 1 ? (isMobile ? -105 : -120) : 0,
      }}
      whileHover={{ y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed z-10 w-full max-w-[1920px]"
    >
      <header
        className={`relative flex justify-between p-4 backdrop-blur-[1.5px] md:p-8`}
      >
        <div className="flex w-[200px] items-center">
          <div className="flex">
            <Image
              src={`${isDark ? "/EAM Logo DARK.png" : "/EAM Logo LIGHT.png"}`}
              alt="EAM Logo"
              width={80}
              height={80}
            />
            <div
              className={`${
                isDark ? "text-dark" : "text-light"
              } flex items-center text-2xl font-semibold`}
            >
              {isTablet ? "" : "ELYRIC A. MANATAD"}
            </div>
          </div>
        </div>

        {/* BURGER ICON  */}
        {isMobile ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.0 }}
            className="flex items-center"
          >
            <div
              onClick={handleClick}
              className="cursor-pointer rounded-full border bg-gray-100 p-2 shadow-md"
            >
              <BurgerIcon className="w-7" />
            </div>
          </motion.div>
        ) : (
          ""
        )}

        {/* NAVIGATIONS  */}
        <div
          ref={ref}
          className={`${
            isMobile
              ? "absolute right-0 top-[99px] grid rounded-bl-xl shadow-lg"
              : "flex items-center gap-4"
          } `}
        >
          {isMobile && showDropdown && (
            <>
              <SlidingElement
                fromOpacity={0}
                toOpacity={1}
                fromX={150}
                toX={0}
                duration={0.2}
              >
                <div
                  className={` ${
                    isMobile
                      ? isDark
                        ? "bg-black25 text-gray-50"
                        : "rounded-tl-lg bg-gray-50 text-black25"
                      : ""
                  }`}
                >
                  <ul className="">
                    {navLinks.map((navLink, index) => (
                      <li
                        key={index}
                        onClick={() => handleNavLink(navLink.id)}
                        className={`${navText} ${
                          index === 0 && "relative rounded-tl-lg"
                        } ${isLinkActive(navLink.id) && activeLink}`}
                      >
                        <div>{navLink.label}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ThemeSwitch />
                </div>
              </SlidingElement>
            </>
          )}
          {!isMobile && (
            <>
              <div
                className={`relative flex ${
                  isDark ? "text-gray-50" : "text-black25"
                }`}
              >
                <ul className="flex items-center">
                  {navLinks.map((navLink, index) => (
                    <li
                      key={index}
                      onClick={() => handleNavLink(navLink.id)}
                      className={`${navText} group md:text-lg lg:text-2xl ${
                        isLinkActive(navLink.id) && activeLink
                      }`}
                    >
                      <div className="relative flex items-center justify-center px-4 py-2">
                        {navLink.label}
                        <div
                          className={`${
                            isDark
                              ? "bg-gray-50 hover:text-dark"
                              : "bg-gray-700"
                          } absolute bottom-0 ${
                            isLinkActive(navLink.id)
                              ? "h-full w-full"
                              : "h-[2px] w-0"
                          } -z-10 rounded-br-2xl rounded-tl-2xl transition-all duration-300 hover:shadow-md group-hover:w-full`}
                        ></div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ThemeSwitch className="relative flex cursor-pointer justify-center rounded-xl" />
              </div>
            </>
          )}
        </div>
      </header>
    </motion.div>
  );
};

export default HeaderNavigation;
