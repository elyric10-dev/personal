import { configureStore } from "@reduxjs/toolkit";
import switchThemeSlice from "./features/switchThemeSlice";
import isMobileSlice from "./features/isMobileSlice";
import currentNavLinkSlice from "./features/currentNavLinkSlice";
import mouseScrollSlice from "./features/mouseScrollSlice";
import portfolioBottomSheetSlice from "./features/portfolioBottomSheetSlice";
import isCarouselSlice from "./features/isCarouselSlice";

const store = configureStore({
  reducer: {
    theme: switchThemeSlice,
    isMobile: isMobileSlice,
    currentNavLink: currentNavLinkSlice,
    mouseScroll: mouseScrollSlice,
    portfolioBottomSheet: portfolioBottomSheetSlice,
    isCarousel: isCarouselSlice,
  },
});

export default store;
