import Image from "next/image";
import React, { useEffect, useState } from "react";
import useIsDark from "~/hooks/useIsDark";

type progressListProp = {
  title: string;
  description: string;
  isLastIndex: boolean;
};
const ProgressList = ({
  title,
  description,
  isLastIndex,
}: progressListProp) => {
  const [isFirst, setIsFirst] = useState(false);
  const [isSecond, setIsSecond] = useState(false);
  const [isThird, setIsThird] = useState(false);
  const [isFourth, setIsFourth] = useState(false);
  const [isFifth, setIsFifth] = useState(false);
  const isDark = useIsDark();

  const animateProgress = (
    setState: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setTimeout(() => {
      setState(true);
    }, 50);
  };

  useEffect(() => {
    animateProgress(setIsFirst);
    animateProgress(setIsSecond);
    setTimeout(() => {
      animateProgress(setIsThird);
    }, 150);
    setTimeout(() => {
      animateProgress(setIsFourth);
    }, 200);
    setTimeout(() => {
      animateProgress(setIsFifth);
    }, 250);
  }, []);
  return (
    <li>
      <div className="flex">
        <div className="relative h-auto w-14">
          <div
            className={`${isFirst ? "h-1/2" : "h-0"} ${
              isDark ? "bg-dark bg-opacity-70" : "bg-light"
            } 1 trans absolute left-1/4 w-1 -translate-x-1/2`}
          ></div>
          {isLastIndex && (
            <div
              className={`${isFifth ? "h-1/2" : "h-0"} ${
                isDark ? "bg-dark bg-opacity-70" : "bg-light"
              } 5 trans absolute left-1/4 top-1/2 w-1 -translate-x-1/2`}
            ></div>
          )}
          <div
            className={`${isThird ? "w-full" : "w-0"} ${
              isDark ? "bg-dark bg-opacity-70" : "bg-light"
            } 3 trans absolute top-1/2 h-1 -translate-y-1/2`}
          ></div>
          <div
            className={`${
              isSecond ? "h-7 w-7" : "h-0 w-0"
            } 2 trans absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-black25 bg-white`}
          >
            <Image src="/eam.ico" alt="logo" fill />
          </div>
        </div>
        <div
          className={`${isFourth ? "opacity-1" : "opacity-0"} ${
            isDark ? "border-dark bg-opacity-70" : "border-light"
          } 4 trans my-4 mr-4 flex-1 rounded-lg border-2 p-2 shadow-md transition-colors`}
        >
          <span className="text-md font-semibold">{`${title} `}</span>
          {description}
        </div>
      </div>
    </li>
  );
};

export default ProgressList;
