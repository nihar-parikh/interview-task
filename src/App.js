import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Window1 from "./components/Window1";
import Window2 from "./components/Window2";
import Window3 from "./components/Window3";
import { getTasks } from "./redux/apiCalls";

import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks(dispatch);
  }, [dispatch]);

  return (
    <>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div className="top-container" style={{ display: "flex" }}>
          <Draggable>
            <Resizable
            // defaultSize={{
            //   width: 320,
            //   height: 200,
            // }}
            >
              <div
                className="window1"
                style={{
                  flexGrow: "2",
                  border: "1px solid red",
                  height: "400px",
                  margin: "10px",
                }}
              >
                <Window1 />
              </div>
            </Resizable>
          </Draggable>

          <Draggable>
            <Resizable
              defaultSize={{
                width: 1020,
                // height: 200,
              }}
            >
              <div
                className="window2"
                style={{
                  flexGrow: "3",
                  border: "1px solid red",
                  height: "400px",
                  margin: "10px",
                }}
              >
                <Window2 />
              </div>
            </Resizable>
          </Draggable>
        </div>

        <Draggable>
          <Resizable
          // defaultSize={{
          //   width: 1000,
          //   height: 2000,
          // }}
          >
            <div
              className="window3"
              style={{
                border: "1px solid red",
                height: "400px",
                width: "1200px",
                marginTop: "50px",
                // marginTop: "250px",
              }}
            >
              <Window3 />
            </div>
          </Resizable>
        </Draggable>
      </div>
    </>
  );
}

export default App;
