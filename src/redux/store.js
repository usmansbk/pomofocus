import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./timerSlice";

const store = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export default store;
