import React from "react";
import { type IconProp } from "~/shared/utils/types";

const FlutterIcon = ({ className, width, height }: IconProp) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>file_type_flutter</title>
      <polyline
        points="15.383 18.316 18.744 15.042 27.093 15.042 19.697 22.438 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316 15.383 18.316"
        className="fill=[#40d0fd]"
      />
      <polygon
        points="4.907 16.125 9.106 20.424 27.093 2.287 18.744 2.287 4.907 16.125"
        className="fill=[#41d0fd] isolate"
      />
      <polygon
        points="11.176 22.479 15.435 26.675 19.697 22.438 15.383 18.316 11.176 22.479"
        className="fill=[#1fbcfd]"
      />
      <polygon
        points="15.435 26.675 19.697 22.438 26.989 29.813 18.593 29.813 15.435 26.675"
        className="fill=[#095a9d]"
      />
      <polygon
        points="15.435 26.675 19.406 25.354 18.068 24.057 15.435 26.675"
        className="fill=[#0e5199]"
      />
    </svg>
  );
};

export default FlutterIcon;
