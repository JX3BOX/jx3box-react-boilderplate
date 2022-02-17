import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DemoState {
  count: number;
}
const initialState: DemoState = {
  count: 0,
};

const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    increaseCount: (state) => {
      state.count += 1;
    },
    reduceCount: (state) => {
      state.count -= 1;
    },
    increaseCountByPayload: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increaseCount, reduceCount, increaseCountByPayload } =
  demoSlice.actions;

export default demoSlice.reducer;
