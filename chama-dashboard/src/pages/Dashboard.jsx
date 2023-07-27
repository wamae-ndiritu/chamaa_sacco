import React from "react";
import SmallWidget from "../components/DashboardComponents/SmallWidget";
import DashStats from "../components/DashboardComponents/DashStats";
import NewItems from "../components/NewItems";
import MessageModal from "../modal/MessageModal";

const Dashboard = () => {
  return (
    <div>
      <MessageModal />
      <SmallWidget />
      <DashStats />
      <NewItems />
    </div>
  );
};

export default Dashboard;
