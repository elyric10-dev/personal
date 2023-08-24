import React from "react";
import useIsDark from "~/hooks/useIsDark";

interface PersonalCardProp {
  children: React.ReactNode;
  className?: string;
}
const PersonalCard = ({ children, className }: PersonalCardProp) => {
  const isDark = useIsDark();
  return (
    <div
      className={`${
        className ? className : ""
      } flex w-[300px] flex-col items-center rounded-xl border border-b-[rgba(255,255,255,0.2)] border-l-[rgba(255,255,255,0.15)] border-r-[rgba(255,255,255,0.15)] border-t-[rgba(255,255,255,0.2)] px-6 pb-16 pt-8 shadow-[0px_50px_25px_-24px_rgb(0,0,0,0.3)] backdrop-blur-sm ${
        isDark ? "bg-white bg-opacity-[0.001]" : "bg-black25 bg-opacity-[0.05]"
      }`}
    >
      {children}
    </div>
  );
};

export default PersonalCard;
