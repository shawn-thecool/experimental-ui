import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICounterSlice {
  count: number;
}
export const counterInitialState: ICounterSlice = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    setCountByAmount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});
export const { setCountByAmount } = counterSlice.actions;
export const counter = counterSlice.reducer;
