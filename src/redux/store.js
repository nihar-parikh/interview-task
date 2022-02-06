import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskRedux";

export const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});
