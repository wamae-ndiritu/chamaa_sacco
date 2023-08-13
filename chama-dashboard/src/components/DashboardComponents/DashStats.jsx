import React from "react";
import LineChart from "../Analytics/SavingsStats";
import UsageStats from "../Analytics/UsageStats";

const DashStats = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-7">
          <div className="shadow-lg savings-chart line-chart-cont">
            <LineChart />
          </div>
        </div>
        <div className="col-lg-5 col-md-5">
          <div className="shadow-lg savings-chart">
            <h5 className="h5 text-center text-info">Usage Statistics</h5>
            <UsageStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashStats;
