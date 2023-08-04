import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface currentNavLinkState {
  navLink: string;
}

const initialState: currentNavLinkState = {
  navLink: "home",
};

const currentNavLinkSlice = createSlice({
  name: "currentNavLink",
  initialState,
  reducers: {
    setCurrentNavLink: (state, action: PayloadAction<string>) => {
      state.navLink = action.payload;
    },
  },
});

export const { setCurrentNavLink } = currentNavLinkSlice.actions;
export default currentNavLinkSlice.reducer;
