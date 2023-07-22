import React from "react";
import SmallWidget from "../components/DashboardComponents/SmallWidget";
import DashStats from "../components/DashboardComponents/DashStats";
import NewItems from "../components/NewItems";

const Dashboard = () => {
  return (
    <div>
      <SmallWidget />
      <DashStats />
      <NewItems />
    </div>
  );
};

export default Dashboard;
