import React, { useEffect, useRef } from "react";
import SideBar from "../components/SideBar";
import TopHeader from "../components/TopHeader";
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
    <div className="cont">
      <div className="sidebar-wrapper">
        <SideBar />
      </div>
      <main
        className="main"
        style={{ width: `${deviceWidth}` }}
        ref={refContainer}
      >
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
