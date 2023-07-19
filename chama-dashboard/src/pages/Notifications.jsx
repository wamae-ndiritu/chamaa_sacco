import React from "react";
import SideBar from "../components/SideBar";

const Notifications = () => {
  return (
    <div className="cont">
      <div className="sidebar-wrapper">
        <SideBar />
      </div>
      <main className="main">
        <h2>Notifications</h2>
      </main>
    </div>
  );
};

export default Notifications;
