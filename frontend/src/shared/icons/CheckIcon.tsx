import React from "react";
import { type IconProp } from "~/shared/utils/types";

const CheckIcon = ({ className, width, height }: IconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 32 32"
    >
      <defs></defs>
      <title />
      <g data-name="Layer 2" id="Layer_2">
        <path d="M15,21a1,1,0,0,1-.71-.29l-4-4a1,1,0,0,1,1.42-1.42L15,18.59l6.29-6.3a1,1,0,0,1,1.42,1.42l-7,7A1,1,0,0,1,15,21Z" />
        <path d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z" />
      </g>
    </svg>
  );
};

export default CheckIcon;
