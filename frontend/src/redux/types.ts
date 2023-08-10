import { type themeState } from "./features/switchThemeSlice";
import { type IsMobileState } from "./features/isMobileSlice";
import { type currentNavLinkState } from "./features/currentNavLinkSlice";
import { type mouseScrollState } from "./features/mouseScrollSlice";

export interface RootState {
  theme: themeState;
  isMobile: IsMobileState;
  currentNavLink: currentNavLinkState;
  mouseScroll: mouseScrollState;
}
