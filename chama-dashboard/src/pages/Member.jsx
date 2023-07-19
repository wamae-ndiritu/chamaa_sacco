import React from "react";
import SideBar from "../components/SideBar";
import TopHeader from "../components/TopHeader";
import MemberInfo from "../components/member/MemberInfo";

const Member = () => {
  return (
    <div>
      <div className="cont">
        <div className="sidebar-wrapper">
          <SideBar />
        </div>
        <main className="main">
          <TopHeader />
          <div className="main-cont">
            <MemberInfo />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Member;
