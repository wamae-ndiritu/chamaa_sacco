import React from "react";
import SideBar from "../components/SideBar";

const PendingTransactions = () => {
  return (
    <div className="cont">
      <div className="sidebar-wrapper">
        <SideBar />
      </div>
      <main className="main">
        <h2>Pending Transactions</h2>
      </main>
    </div>
  );
};

export default PendingTransactions;
