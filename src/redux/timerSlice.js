import { createSlice } from "@reduxjs/toolkit";
import { POMODORO, LONG_BREAK, SHORT_BREAK } from "../constants";

const initialState = {
  mode: POMODORO,
  round: 1,
  autoBreaks: false,
  autoPomodoros: false,
  longBreakInterval: 4,
  alarmSound: "bird",
  alarmVolume: 50,
  alarmRepeat: 1,
  tickingSound: "none",
  tickingVolume: 50,
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
    incrementRound: (state) => {
      state.round += 1;
    },
    updateModeTime: (state, action) => {
      const { mode, time } = action.payload;
      state.modes[mode].time = time;
    },
    toggleAutoBreaks: (state) => {
      state.autoBreaks = !state.autoBreaks;
    },
    toggleAutoPomodoros: (state) => {
      state.autoPomodoros = !state.autoPomodoros;
    },
  },
});

export const {
  setMode,
  incrementRound,
  updateModeTime,
  toggleAutoBreaks,
  toggleAutoPomodoros,
} = timerSlice.actions;

export default timerSlice.reducer;
