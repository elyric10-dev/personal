import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface isCarouselState {
  isCarousel: boolean;
  selectedCardId: number;
}

const initialState: isCarouselState = {
  isCarousel: false,
  selectedCardId: 0,
};
const IsCarouselSlice = createSlice({
  name: "isCarousel",
  initialState,
  reducers: {
    setIsCarousel: (state, action: PayloadAction<boolean>) => {
      state.isCarousel = action.payload;
    },
    setSelectedCardId: (state, action: PayloadAction<number>) => {
      state.selectedCardId = action.payload;
    },
  },
});

export const { setIsCarousel, setSelectedCardId } = IsCarouselSlice.actions;
export default IsCarouselSlice.reducer;
