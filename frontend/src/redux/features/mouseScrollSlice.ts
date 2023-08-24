import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface mouseScrollState {
  scrollCount: number;
  scrollCountX: number;
}

const initialState: mouseScrollState = {
  scrollCount: 0,
  scrollCountX: 0,
};

const mouseScrollSlice = createSlice({
  name: "mouseScroll",
  initialState,
  reducers: {
    setScrollCount: (state, action: PayloadAction<number>) => {
      state.scrollCount = Math.max(
        0,
        Math.min(1, state.scrollCount + action.payload)
      );
    },
    setScrollCountX: (state, action: PayloadAction<number>) => {
      state.scrollCountX = state.scrollCountX + action.payload;
    },

    setDirectScrollCount: (state, action: PayloadAction<number>) => {
      state.scrollCount = action.payload;
    },
  },
});

export const { setScrollCount, setScrollCountX, setDirectScrollCount } =
  mouseScrollSlice.actions;
export default mouseScrollSlice.reducer;
