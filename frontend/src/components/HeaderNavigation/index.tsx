/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import BurgerIcon from "~/shared/icons/Burger";
import { type RootState } from "~/redux/types";

const HeaderNavigation: React.FC = () => {
  const currentTheme = useSelector((state: RootState) => state.theme.isDark);
  const [isClient, setIsClient] = useState(false);
  const isDark = isClient && currentTheme;
  const navLinks = [
    {
      label: "HOME",
      link: "/",
    },
    {
      label: "ABOUT",
      link: "/about",
    },
    {
      label: "PORTFOLIO",
      link: "/portfolio",
    },
    {
      label: "CONTACT",
      link: "/contact",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);
  const navText = `text-md font-[300] px-3 py-1 md:px-6 bg-white-100 ${
    isDark
      ? "hover:bg-gray-600 hover:text-gray-200"
      : "hover:bg-gray-200 hover:text-black25"
  } px-3 border`;
  const activeLink = `${isDark ? "text-dark" : "text-light"} font-[400]`;

  const router = useRouter();
  const isLinkActive = (href: string) => router.pathname === href;

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <header
        className={`relative flex justify-between  p-4 ${
          isDark ? "bg-black25" : "bg-white"
        }  md:p-8`}
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
              ELYRIC A. MANATAD
            </div>
          </div>
        </div>

        {/* BURGER ICON  */}
        <div className="flex items-center">
          <div
            onClick={handleClick}
            className="cursor-pointer rounded-full border bg-gray-100 p-2 shadow-md"
          >
            <BurgerIcon classname="w-7" />
          </div>
        </div>

        {/* NAVIGATIONS  */}
        {showDropdown && (
          <>
            <div className="absolute right-0 top-[99px] grid rounded-bl-xl shadow-lg">
              <div
                className={`${
                  isDark ? "bg-black25 text-gray-50" : "bg-gray-50 text-black25"
                } rounded-tl-lg`}
              >
                <ul className="">
                  {navLinks.map((navLink, index) => (
                    <li
                      key={index}
                      className={`${navText} ${
                        index === 0 && "rounded-tl-lg"
                      } ${isLinkActive(navLink.link) && activeLink}`}
                    >
                      <Link href={navLink.link}>{navLink.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                {/* <Image src="/" alt={""} /> */}
                <ThemeSwitch />
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default HeaderNavigation;
