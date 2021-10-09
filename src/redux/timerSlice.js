import { createSlice } from "@reduxjs/toolkit";
import { POMODORO, LONG_BREAK, SHORT_BREAK } from "../constants";

const initialState = {
  mode: POMODORO,
  round: 1,
  modes: {
    [POMODORO]: {
      id: POMODORO,
      label: "Pomodoro",
      time: 25,
    },
    [SHORT_BREAK]: {
      id: SHORT_BREAK,
      label: "Short Break",
      time: 5,
    },
    [LONG_BREAK]: {
      id: LONG_BREAK,
      label: "Long Break",
      time: 15,
    },
  },
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
    nextRound: (state) => {
      state.round += 1;
    },
  },
});

export const { setMode, nextRound } = timerSlice.actions;

export default timerSlice.reducer;
