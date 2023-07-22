import React, { useEffect, useRef } from "react";
import SmallWidget from "../components/DashboardComponents/SmallWidget";
import DashStats from "../components/DashboardComponents/DashStats";
import NewItems from "../components/NewItems";
import { useGlobalContext } from "../context/context";

const Dashboard = () => {
  const refContainer = useRef();

  const { scrollContext } = useGlobalContext();
  const deviceWidth = window.innerWidth;

  // console.log(refContainer.current.getBoundingClientRect().width);

  // // useEffect(() => {
  // //   refContainer.current.style.width = deviceWidth;
  // // }, [deviceWidth]);
  return (
    <div>
      <SmallWidget />
      <DashStats />
      <NewItems />
    </div>
  );
};

export default Dashboard;
