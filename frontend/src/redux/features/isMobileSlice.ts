import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IsMobileState {
  value: boolean;
}

const initialState: IsMobileState = {
  value: true,
};

const isMobileSlice = createSlice({
  name: "isMobile",
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setIsMobile } = isMobileSlice.actions;
export default isMobileSlice.reducer;
