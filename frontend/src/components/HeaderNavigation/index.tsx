/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState, useEffect } from "react";
import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";
import { useSelector, useDispatch } from "react-redux";
import BurgerIcon from "~/shared/icons/Burger";
import { type RootState } from "~/redux/types";
import { setIsMobile, setIsTablet } from "~/redux/features/isMobileSlice";
import getNavLinks from "~/shared/utils/getNavLinks";
import { setCurrentNavLink } from "~/redux/features/currentNavLinkSlice";
import useClickOutside from "~/hooks/useClickOutside";

const HeaderNavigation: React.FC = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.isDark);
  const isMobile = useSelector((state: RootState) => state.isMobile.value);
  const isTablet = useSelector((state: RootState) => state.isMobile.isTablet);
  const currentNavLink = useSelector(
    (state: RootState) => state.currentNavLink.navLink
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const isDark = isClient && currentTheme;
  const dispatch = useDispatch();
  const navLinks = getNavLinks();
  const ref = useClickOutside(() => setShowDropdown(false));

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const mobileSize = window.innerWidth <= 768;
      const tabletSize = window.innerWidth <= 1024;

      if (mobileSize) {
        dispatch(setIsMobile(mobileSize));
        dispatch(setIsTablet(false));
      } else if (tabletSize) {
        dispatch(setIsMobile(false));
        dispatch(setIsTablet(tabletSize));
      } else {
        dispatch(setIsMobile(false));
        dispatch(setIsTablet(false));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

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

  const handleNavLink = (navLink: string) =>
    dispatch(setCurrentNavLink(navLink));

  return (
    <div className="absolute z-10 w-screen">
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
          <div className="flex items-center">
            <div
              onClick={handleClick}
              className="cursor-pointer rounded-full border bg-gray-100 p-2 shadow-md"
            >
              <BurgerIcon classname="w-7" />
            </div>
          </div>
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
              <div className="">
                <ThemeSwitch className="relative flex cursor-pointer justify-center rounded-xl" />
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default HeaderNavigation;
