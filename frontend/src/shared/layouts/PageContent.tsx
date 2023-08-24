import React, { type ReactNode } from "react";

interface PageContentLayoutProps {
  children: ReactNode;
}
const PageContentLayout: React.FC<PageContentLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen justify-center">{children}</div>
  );
};

export default PageContentLayout;
