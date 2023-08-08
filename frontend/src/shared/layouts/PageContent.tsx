import React, { type ReactNode } from "react";
import HeaderNavigation from "~/components/HeaderNavigation";
import SectionPages from "~/sections";

interface PageContentLayoutProps {
  children: ReactNode;
}
const PageContentLayout: React.FC<PageContentLayoutProps> = ({ children }) => {
  return (
    <div className="relative">
      <HeaderNavigation />
      <SectionPages />
    </div>
  );
};

export default PageContentLayout;
