import React from "react";
import { type IconProp } from "~/shared/utils/types";

const FramerMotionIcon = ({ className, width, height }: IconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="3.7 3.7 43.6 43.6"
      className={className}
      width={width}
      height={height}
    >
      <path d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z" />
      <path d="m47.3 25.5v21.8l-10.9-10.9z" />
      <path d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z" />
    </svg>
  );
};

export default FramerMotionIcon;
