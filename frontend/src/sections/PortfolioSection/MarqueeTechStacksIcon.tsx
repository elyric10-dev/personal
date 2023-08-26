import React from "react";
import Marquee from "react-fast-marquee";
import getTechStacksIcon from "~/shared/utils/getTechStacksIcon";
import useIsDark from "~/hooks/useIsDark";
const MarqueeTechStacksIcon = () => {
  const isDark = useIsDark();

  const techStacksIcon = getTechStacksIcon({ isDark });
  return (
    <div
      className={`${
        isDark ? "text-gray-100" : "text-black25"
      } mt-20 h-48 w-screen`}
    >
      <h1 className={`mb-6 flex justify-center text-3xl font-bold`}>
        Tech stacks and tools:
      </h1>
      <ul className="flex w-full">
        <Marquee
          gradient
          gradientColor={isDark ? [31, 41, 55] : [231, 225, 215]}
          gradientWidth={"40vw"}
        >
          {techStacksIcon.map((techStack, index) => (
            <>
              <li
                key={index}
                className={`${
                  isDark ? "bg-gray-200" : "bg-[#1a1814]"
                } border-1 relative mx-2 grid h-24 w-24 flex-shrink-0 place-items-center rounded-xl border-black25 p-4 shadow-dark`}
              >
                {techStack.techStack}
              </li>
              <p className="py-2 text-center text-sm">{techStack.name}</p>
            </>
          ))}
        </Marquee>
      </ul>
    </div>
  );
};

export default MarqueeTechStacksIcon;
