import { configureStore } from "@reduxjs/toolkit";
import switchThemeSlice from "./features/switchThemeSlice";
import isMobileSlice from "./features/isMobileSlice";

const store = configureStore({
  reducer: {
    theme: switchThemeSlice,
    isMobile: isMobileSlice,
  },
});

export default store;
