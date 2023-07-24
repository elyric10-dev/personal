/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";
import { useRouter } from "next/router";
import BurgerIcon from "~/shared/icons/Burger";

const HeaderNavigation: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(true);
  const navText =
    "text-xl font-[300] text-black25 sm:px-3 md:px-6 bg-white-100 hover:bg-gray-200 px-3 border";
  const activeLink = "text-theme bg-gray-300 font-[400]";

  const router = useRouter();
  const isLinkActive = (href: string) => router.pathname === href;

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <header
        className={`relative flex justify-between  p-4 md:bg-blue-800 md:p-8 lg:bg-violet-500`}
      >
        <div className="flex w-[200px] items-center">
          <div className="flex">
            <Image
              src="/EAM Logo LIGHT.png"
              alt="EAM Logo"
              width={80}
              height={80}
            />
            <div className="flex items-center text-2xl font-semibold text-theme">
              ELYRIC A. MANATAD
            </div>
          </div>
        </div>

        {/* BURGER ICON  */}
        <div className="flex items-center">
          <div
            onClick={handleClick}
            className="cursor-pointer rounded-full bg-gray-100 p-2 shadow-md"
          >
            <BurgerIcon classname="w-7" />
          </div>
        </div>

        {/* NAVIGATIONS  */}
        {showDropdown && (
          <>
            <div className="absolute right-0 top-[99px] grid rounded-bl-xl shadow-lg">
              <div className="white bg-gray-50">
                <ul className="">
                  <li
                    className={`${navText} rounded-tl-lg ${
                      isLinkActive("/") && activeLink
                    }`}
                  >
                    <Link href={"/"}>HOME</Link>
                  </li>
                  <li
                    className={`${navText} ${
                      isLinkActive("/about") && activeLink
                    }`}
                  >
                    <Link href={"/about"}>ABOUT</Link>
                  </li>
                  <li
                    className={`${navText} ${
                      isLinkActive("/portfolio") && activeLink
                    }`}
                  >
                    <Link href={"/portfolio"}>PORTFOLIO</Link>
                  </li>
                  <li
                    className={`${navText} ${
                      isLinkActive("/contact") && activeLink
                    }`}
                  >
                    <Link href={"/contact"}>CONTACT</Link>
                  </li>
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
