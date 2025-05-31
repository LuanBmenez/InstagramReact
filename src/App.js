import React from "react";
import Topo from "./Components/Topo";
import Story from "./Components/Story";
import Sidebar from "./Components/SideBar";

function App() {
  return (
    <>
      <Topo />
      <div className="corpo">
      <Story />
      <Sidebar/>
      </div>
    </>
  );
}

export default App;
