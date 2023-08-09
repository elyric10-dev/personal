import React, { type ReactNode } from "react";

interface PageContentLayoutProps {
  children: ReactNode;
}
const PageContentLayout: React.FC<PageContentLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default PageContentLayout;
