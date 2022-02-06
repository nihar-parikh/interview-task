import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/apiCalls";
import "./window2.css";

const Window2 = () => {
  const dispatch = useDispatch();
  const [taskInfo, setTaskInfo] = useState({});
  const handleChange = (e) => {
    setTaskInfo({ ...taskInfo, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    addTask(taskInfo, dispatch);
    setTaskInfo({ title: "", description: "" });
  };

  return (
    <>
      <div className="newTask">
        <h1 className="newTaskTitle">New Task</h1>
        <form className="newTaskForm">
          <div className="newTaskItem">
            <label className="headings">Title</label>
            <input
              className="input"
              type="text"
              name="title"
              value={taskInfo.title}
              onChange={handleChange}
            />
          </div>
          <div className="newTaskItem">
            <label className="headings">Description</label>
            <input
              className="input"
              type="text"
              name="description"
              value={taskInfo.description}
              onChange={handleChange}
            />
          </div>

          <button className="newTaskButton" onClick={handleClick}>
            Create
          </button>
        </form>
      </div>
    </>
  );
};

export default Window2;
