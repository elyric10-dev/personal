import React from "react";
import { type IconProp } from "~/shared/utils/types";

const BurgerIcon = ({ className, width, height }: IconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      width={width}
      height={height}
    >
      <path
        d="M4 7L7 7M20 7L11 7"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M20 17H17M4 17L13 17"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M4 12H7L20 12"
        stroke="#1C274C"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default BurgerIcon;
