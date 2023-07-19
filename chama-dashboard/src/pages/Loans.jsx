import React from "react";
import SideBar from "../components/SideBar";

const Loans = () => {
  return (
    <div>
      <div className="cont">
        <div className="sidebar-wrapper">
          <SideBar />
        </div>
        <main className="main">
          <h2>Loans</h2>
        </main>
      </div>
    </div>
  );
};

export default Loans;
