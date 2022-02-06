import {
  addTaskFailure,
  addTaskStart,
  addTaskSuccess,
  getTasksFailure,
  getTasksStart,
  getTasksSuccess,
  updateTaskFailure,
  updateTaskStart,
  updateTaskSuccess,
} from "./taskRedux";
import axios from "axios";

//Get all tasks
export const getTasks = async (dispatch) => {
  dispatch(getTasksStart());

  try {
    const res = await axios.get("http://localhost:8000/api/tasks");
    if (res.data) {
      dispatch(getTasksSuccess(res.data));
    } else {
      dispatch(getTasksFailure());
    }
  } catch (error) {
    console.log("error:", error);
    dispatch(getTasksFailure());
  }
};

//add a task
export const addTask = async (task, dispatch) => {
  dispatch(addTaskStart());

  try {
    const res = await axios.post("http://localhost:8000/api/tasks", task);

    if (res.data) {
      dispatch(addTaskSuccess(res.data));
    } else {
      dispatch(addTaskFailure());
    }
  } catch (error) {
    console.log("error:", error);
    dispatch(addTaskFailure());
  }
};

//update a task
export const updateTask = async (task, id, dispatch) => {
  dispatch(updateTaskStart());

  try {
    const res = await axios.put(
      `http://localhost:8000/api/tasks/updatetask/${id}`,
      task
    );

    if (res.data) {
      dispatch(updateTaskSuccess(res.data));
    } else {
      dispatch(updateTaskFailure());
    }
  } catch (error) {
    console.log("error:", error);
    dispatch(updateTaskFailure());
  }
};
