/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from "react";

interface Props {
  className?: string;
  width?: number;
  height?: number;
}

const MoonIcon: React.FC<Props> = ({ className, width, height }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.2"
      viewBox="0 0 15 15"
      width={width}
      height={height}
      className={className}
    >
      <defs>
        <image
          width="150"
          height="150"
          id="img1"
          href="data:image/png;base64,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"
        />
      </defs>
      <use id="moon" href="#img1" transform="matrix(.098,0,0,.098,0,0)" />
    </svg>
  );
};

export default MoonIcon;
