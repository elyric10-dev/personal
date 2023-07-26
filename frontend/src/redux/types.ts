import { type themeState } from "./features/switchThemeSlice";
import { type IsMobileState } from "./features/isMobileSlice";

export interface RootState {
  theme: themeState;
  isMobile: IsMobileState;
}
