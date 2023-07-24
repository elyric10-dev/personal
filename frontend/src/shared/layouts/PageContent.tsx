import React, { type ReactNode } from "react";
import HeaderNavigation from "~/components/HeaderNavigation";

interface PageContentLayoutProps {
  children: ReactNode;
}
const PageContentLayout: React.FC<PageContentLayoutProps> = ({ children }) => {
  return (
    <>
      <HeaderNavigation />
      <main>{children}</main>
    </>
  );
};

export default PageContentLayout;
