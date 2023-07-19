import React from "react";
import SideBar from "../components/SideBar";

const Settings = () => {
  return (
    <div className="cont">
      <div className="sidebar-wrapper">
        <SideBar />
      </div>
      <main className="main">
        <h2>Settings</h2>
      </main>
    </div>
  );
};

export default Settings;
