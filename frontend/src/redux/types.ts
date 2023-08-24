import { type themeState } from "./features/switchThemeSlice";
import { type IsMobileState } from "./features/isMobileSlice";
import { type currentNavLinkState } from "./features/currentNavLinkSlice";
import { type mouseScrollState } from "./features/mouseScrollSlice";
import { type PortfolioBottomSheetState } from "./features/portfolioBottomSheetSlice";
import { type isCarouselState } from "./features/isCarouselSlice";

export interface RootState {
  theme: themeState;
  isMobile: IsMobileState;
  currentNavLink: currentNavLinkState;
  mouseScroll: mouseScrollState;
  portfolioBottomSheet: PortfolioBottomSheetState;
  isCarousel: isCarouselState;
}
