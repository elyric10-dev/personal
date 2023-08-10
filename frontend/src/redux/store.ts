import { configureStore } from "@reduxjs/toolkit";
import switchThemeSlice from "./features/switchThemeSlice";
import isMobileSlice from "./features/isMobileSlice";
import currentNavLinkSlice from "./features/currentNavLinkSlice";
import mouseScrollSlice from "./features/mouseScrollSlice";

const store = configureStore({
  reducer: {
    theme: switchThemeSlice,
    isMobile: isMobileSlice,
    currentNavLink: currentNavLinkSlice,
    mouseScroll: mouseScrollSlice,
  },
});

export default store;
