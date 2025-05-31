import React from "react";
import Topo from "./Components/Topo";
import Story from "./Components/Story";
import Sidebar from "./Components/SideBar";
import Posts from "./Components/Posts";

function App() {
  return (
    <>
      <Topo />
      <div className="corpo">
        <div className="esquerda">
          <Story />
          <Posts />
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
