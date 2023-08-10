import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface mouseScrollState {
  scrollCount: number;
}

const initialState: mouseScrollState = {
  scrollCount: 0,
};

const mouseScrollSlice = createSlice({
  name: "mouseScroll",
  initialState,
  reducers: {
    setScrollCount: (state, action: PayloadAction<number>) => {
      state.scrollCount = Math.max(
        0,
        Math.min(6, state.scrollCount + action.payload)
      );
    },
    setDirectScrollCount: (state, action: PayloadAction<number>) => {
      state.scrollCount = action.payload;
    },
  },
});

export const { setScrollCount, setDirectScrollCount } =
  mouseScrollSlice.actions;
export default mouseScrollSlice.reducer;
