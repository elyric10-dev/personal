import { createSlice } from "@reduxjs/toolkit";

export interface themeState {
  isDark: boolean;
}

const getInitialThemeState = (): themeState => {
  let isDark = true; // Default to dark mode

  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      isDark = false;
    }
  }

  return {
    isDark: isDark,
  };
};

export const initialTheme = getInitialThemeState();

const switchThemeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    toogleTheme(state) {
      state.isDark = !state.isDark;

      localStorage.setItem("theme", state.isDark ? "dark" : "light");

      if (state.isDark) {
        document.documentElement.style.setProperty("--text-color", "#f8be6a");
      } else {
        document.documentElement.style.setProperty("--text-color", "#558ec3");
      }
    },
  },
});

export const { toogleTheme } = switchThemeSlice.actions;
export default switchThemeSlice.reducer;
