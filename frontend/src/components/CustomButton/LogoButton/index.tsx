import Link from "next/link";
import React, { Fragment } from "react";

type LogoButton1Prop = {
  label: string;
  text: string;
  className?: string;
  svgIcon: React.JSX.Element;
  onClick?: () => void;
  href?: string;
};
const LogoButton1 = ({
  label,
  text,
  svgIcon,
  className,
  onClick,
  href,
}: LogoButton1Prop) => {
  return (
    <Fragment>
      <button
        onClick={onClick}
        type="button"
        className={`peer/item trans group relative flex w-1 items-center justify-between rounded-full bg-red text-white shadow-[2px_2px_6px_rgba(0,0,0,0.5)] ${
          className || ""
        }`}
      >
        <Link
          href={href || ""}
          target={href ? "_blank" : ""}
          className="trans overflow-hidden whitespace-nowrap pl-2"
        >
          <span>{text}</span>
        </Link>
        <span
          className={`trans rounded-full shadow-[2px_2px_6px_rgba(0,0,0,0.5)] group-hover:shadow-none`}
        >
          {svgIcon}
        </span>
      </button>
      <div className="trans absolute -right-14 top-4 w-full overflow-hidden whitespace-nowrap peer-hover/item:w-0">
        <span>{label}</span>
      </div>
    </Fragment>
  );
};

export default LogoButton1;
