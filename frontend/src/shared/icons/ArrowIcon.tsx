import React from "react";
import { type IconProp } from "~/shared/utils/types";

const ArrowIcon = ({ className, width, height }: IconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M13 18v-6h5l-6-7-6 7h5v6z"></path>
    </svg>
  );
};

export default ArrowIcon;
