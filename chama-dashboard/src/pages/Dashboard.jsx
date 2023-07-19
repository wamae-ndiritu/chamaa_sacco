import React from "react";
import SideBar from "../components/SideBar";
import TopHeader from "../components/TopHeader";
import SmallWidget from "../components/DashboardComponents/SmallWidget";
import DashStats from "../components/DashboardComponents/DashStats";
import NewItems from "../components/NewItems";

const Dashboard = () => {
  return (
    <div className="cont">
      <div className="sidebar-wrapper">
        <SideBar />
      </div>
      <main className="main">
        <TopHeader />
        <div className="main-cont">
          <SmallWidget />
          <DashStats />
          <NewItems />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
