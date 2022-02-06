import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    addCounts: 0,
    updateCounts: 0,
    tasks: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getTasksStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getTasksSuccess: (state, action) => {
      state.isFetching = false;
      state.tasks = action.payload;
      state.addCounts = state.tasks.length;
    },
    getTasksFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    addTaskStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addTaskSuccess: (state, action) => {
      state.isFetching = false;
      state.tasks.push(action.payload);
      state.addCounts = state.tasks.length;
    },
    addTaskFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    updateTaskStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateTaskSuccess: (state, action) => {
      state.isFetching = false;
      state.tasks[
        state.tasks.findIndex((item) => item._id === action.payload._id)
      ] = action.payload;
      state.updateCounts = state.updateCounts + 1;
    },
    updateTaskFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getTasksStart,
  getTasksSuccess,
  getTasksFailure,

  updateTaskStart,
  updateTaskSuccess,
  updateTaskFailure,
  addTaskStart,
  addTaskSuccess,
  addTaskFailure,
} = taskSlice.actions;

const taskReducer = taskSlice.reducer;
export default taskReducer;
