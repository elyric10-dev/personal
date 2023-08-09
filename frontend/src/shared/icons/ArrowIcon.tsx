import React from "react";

interface ArrowIconProps {
  className?: string;
  width?: number;
  height?: number;
}

const ArrowIcon = ({ className, width, height }: ArrowIconProps) => {
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
