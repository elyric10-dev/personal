import React from "react";
import Image from "next/image";

const LoadingSpinner = () => {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="h-14 w-14 animate-spin rounded-full border-l-2 border-t-2 border-gray-100"></div>
    </div>
  );
};

export default LoadingSpinner;
