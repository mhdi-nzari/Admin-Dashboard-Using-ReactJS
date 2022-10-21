import React from "react";
import "./app.css";
import Sidebar from "./components/SideBar Section/Sidebar";
import Body from "./components/Body Section/Body";
const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Body />
    </div>
  );
};

export default App;
