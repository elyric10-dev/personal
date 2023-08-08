import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IsMobileState {
  value: boolean;
  isTablet: boolean;
}

const initialState: IsMobileState = {
  value: true,
  isTablet: false,
};

const isMobileSlice = createSlice({
  name: "isMobile",
  initialState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
    setIsTablet: (state, action: PayloadAction<boolean>) => {
      state.isTablet = action.payload;
    },
  },
});

export const { setIsMobile, setIsTablet } = isMobileSlice.actions;
export default isMobileSlice.reducer;
