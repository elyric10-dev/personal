import React from "react";
import { type IconProp } from "~/shared/utils/types";

const ChevronPlainIcon = ({ className, width, height }: IconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 100 100"
    >
      <g>
        <path d="M25.1,97.7L25.1,97.7c-1-1-1-2.6,0-3.5L69.3,50L25.1,5.8c-1-1-1-2.6,0-3.5l0,0c1-1,2.6-1,3.5,0L75,48.6   c0.8,0.8,0.8,2,0,2.8L28.7,97.7C27.7,98.7,26.1,98.7,25.1,97.7z" />
      </g>
    </svg>
  );
};

export default ChevronPlainIcon;
