import React from "react";
import SideBar from "../components/SideBar";
import TopHeader from "../components/TopHeader";
import MembersList from "../components/members/MembersList";

const Members = () => {
  return (
    <div>
      <div className="cont">
        <div className="sidebar-wrapper">
          <SideBar />
        </div>
        <main className="main">
          <TopHeader />
          <div className="main-cont">
            <MembersList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Members;
