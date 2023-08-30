import React, { useState } from "react";

type PDFViewerProp = {
  pdfSrc: string;
  className: string;
  onClick?: () => void;
};

const PDFViewer = ({ pdfSrc, className, onClick }: PDFViewerProp) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={className}>
      <p className="absolute-center text-lg text-gray-100">
        {isLoading ? "Loading resume ..." : ""}
      </p>
      <button
        onClick={onClick}
        className="text-md flex items-center justify-end gap-3 px-6 pb-0 pt-4 text-gray-100 underline"
      >
        Back
      </button>
      <iframe
        onLoad={() => setIsLoading(false)}
        className="h-full w-full"
        src={pdfSrc}
        frameBorder={0}
      ></iframe>
    </div>
  );
};

export default PDFViewer;
