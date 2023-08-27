import React from "react";

const ShimmerLoading = () => {
  return (
    <div className="relative h-full w-full bg-gray-300">
      <div className="h-full w-full animate-shimmer">
        <div className="h-full w-[10%] bg-gray-100 blur-xl"></div>
      </div>
    </div>
  );
};

export default ShimmerLoading;
