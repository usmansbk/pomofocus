import { createSlice } from "@reduxjs/toolkit";
import { POMODORO } from "../constants";

const initialState = {
  mode: POMODORO,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { setMode } = timerSlice.actions;

export default timerSlice.reducer;
