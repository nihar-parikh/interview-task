import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./window1.css";

const Tasks = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/task/${id}`);
  };

  return (
    <>
      <div className="row">
        {tasks.map((task) => (
          <div className="col" key={task._id}>
            <h1>{task.title}</h1>
            <p style={{ margin: "5px" }}>{task.description}</p>

            <div className="">
              <button
                className="btn btn-primary"
                onClick={() => handleClick(task._id)}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tasks;
