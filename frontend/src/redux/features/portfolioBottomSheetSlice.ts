import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface PortfolioBottomSheetState {
  isVisible: boolean;
}

const initialState: PortfolioBottomSheetState = {
  isVisible: false,
};

const PortfolioBottomSheetSlice = createSlice({
  name: "portfolioBottomSheet",
  initialState,
  reducers: {
    setIsVisible: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

export const { setIsVisible } = PortfolioBottomSheetSlice.actions;
export default PortfolioBottomSheetSlice.reducer;
