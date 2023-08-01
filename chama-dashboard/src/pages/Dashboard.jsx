import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SmallWidget from "../components/DashboardComponents/SmallWidget";
import DashStats from "../components/DashboardComponents/DashStats";
import NewItems from "../components/NewItems";
import MessageModal from "../modal/MessageModal";

const Dashboard = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.member);

  useEffect(() => {
    if (userInfo?.isDefaultPass) {
      navigate(`/members/${userInfo?.member_id}/set-password`);
    }
  });
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
