import React from "react";
import SideBar from "../components/SideBar";

const Management = () => {
  return (
    <div>
      <div className="cont">
        <div className="sidebar-wrapper">
          <SideBar />
        </div>
        <main className="main">
          <h2>Management</h2>
        </main>
      </div>
    </div>
  );
};

export default Management;
