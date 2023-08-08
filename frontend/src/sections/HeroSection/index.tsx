import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { type RootState } from "~/redux/types";
import SocialSection from "./SocialSection";

const HeroSection = () => {
  const title1 = `I'M&nbsp;ELYRIC&nbsp;MANATAD`;
  const title2 = `I&apos;M&nbsp;A&nbsp;WEB&nbsp;DEVELOPER`;
  const currentTheme = useSelector((state: RootState) => state.theme.isDark);
  const [isClient, setIsClient] = useState(false);
  const isDark = isClient && currentTheme;
  const [currentTitle, setCurrentTitle] = useState(title1);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle === title1 ? title2 : title1));
    }, 3000);

    return () => clearInterval(interval);
  }, [title1, title2]);

  return (
    <>
      <div className="relative flex h-full w-full items-center">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
          <Image
            src={`${isDark ? "/hexaProfileDark.png" : "/hexaProfileLight.png"}`}
            alt="profile"
            width={700}
            height={700}
            layout="fixed"
          />
        </div>

        <div className="flex h-screen items-center">
          <div
            className={`${
              isDark
                ? "bg-black25 bg-opacity-60 p-4 shadow-gray-500 backdrop-blur-[5px]"
                : "bg-gray-50 bg-opacity-40 p-4 shadow-gray-600 backdrop-blur-[5px]"
            } mx-8 grid max-w-[436px] gap-1 rounded-xl border shadow-md md:max-w-[600px] md:gap-2 lg:max-w-[720px] lg:gap-4 xl:max-w-[920px]`}
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
              }  typing relative overflow-hidden pl-2 text-3xl font-semibold md:text-4xl`}
            >
              <div dangerouslySetInnerHTML={{ __html: currentTitle }} />
              <div className="blinking absolute right-0 top-0 h-full w-[2px] border-2 border-gray-50"></div>
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
            <div className="flex justify-center">
              <input
                type="button"
                className={`text-md mt-12 cursor-pointer rounded-md transition-all duration-300 ${
                  isDark
                    ? "bg-dark text-black25 shadow-gray-400 hover:shadow-gray-300"
                    : "bg-light text-gray-50 shadow-gray-600 hover:shadow-gray-700"
                }  px-8 py-3 shadow-md hover:shadow-md lg:text-lg`}
                value="SEE MY WORKS"
              />
            </div>
          </div>
        </div>
      </div>
      <SocialSection />
    </>
  );
};

export default HeroSection;
