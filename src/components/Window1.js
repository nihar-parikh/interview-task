import React from "react";
import { useSelector } from "react-redux";
// import "./window1.css";

const Window1 = () => {
  const numberOfTasks = useSelector((state) => state.task.addCounts);
  const numberOfUpdates = useSelector((state) => state.task.updateCounts);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "green",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Added</h1>
        <button style={{ width: "100px" }}>{numberOfTasks}</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>Updated</h1>

        <button style={{ width: "100px" }}>{numberOfUpdates}</button>
      </div>
    </div>
  );
};

export default Window1;
