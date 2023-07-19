import React from "react";
import SideBar from "../components/SideBar";

const Balance = () => {
  return (
    <div>
      <div className="cont">
        <div className="sidebar-wrapper">
          <SideBar />
        </div>
        <main className="main">
          <h2>Balance</h2>
        </main>
      </div>
    </div>
  );
};

export default Balance;
