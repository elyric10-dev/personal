import { configureStore } from "@reduxjs/toolkit";
import switchThemeSlice from "./features/switchThemeSlice";
import isMobileSlice from "./features/isMobileSlice";
import currentNavLinkSlice from "./features/currentNavLinkSlice";

const store = configureStore({
  reducer: {
    theme: switchThemeSlice,
    isMobile: isMobileSlice,
    currentNavLink: currentNavLinkSlice,
  },
});

export default store;
