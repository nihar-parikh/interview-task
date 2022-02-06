import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateTask } from "../redux/apiCalls";

const UpdateTask = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [taskInfo, setTaskInfo] = useState({});

  useEffect(() => {
    const getTask = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/tasks/${id}`);
        setTaskInfo(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTask();
  }, [id]);

  const handleChange = (e) => {
    setTaskInfo({ ...taskInfo, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    updateTask(taskInfo, id, dispatch);
    setTaskInfo({ title: "", description: "" });
    navigate("/");
  };

  return (
    <div>
      <div className="newTask">
        <h1 className="newTaskTitle">Update Task</h1>
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
