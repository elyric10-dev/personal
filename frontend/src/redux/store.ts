import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import switchThemeSlice from "./features/switchThemeSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    theme: switchThemeSlice,
  },
});

export default store;
