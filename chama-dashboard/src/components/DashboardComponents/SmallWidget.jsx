import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import EuroIcon from "@mui/icons-material/Euro";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SmallWidget = () => {
  const percentage = 85;
  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="shadow-sm widget-small">
            <div className="widget-small-icon">
              <AccountBalanceIcon />
              <h6 className="h6">Savings</h6>
            </div>
            <div className="widget-small-text">
              <h4 className="h4">KES 100 000</h4>
              <span className="text-success">
                10.1 <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
              </span>
            </div>
            <p>compared to last month</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="shadow-sm widget-small">
            <div className="widget-small-icon text-info">
              <EuroIcon />
              <h6 className="h6 text-info">Loans</h6>
            </div>
            <div className="widget-small-text">
              <h4 className="h4 text-info">KES 700 000</h4>
              <span className="text-danger">
                10.1{" "}
                <i className="fa fa-long-arrow-down" aria-hidden="true"></i>
              </span>
            </div>
            <p>compared to last month</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="shadow-sm user-card">
            <div className="user-icon">
              <i className="fa fa-users" aria-hidden="true"></i>
            </div>
            <h6 className="h6">10 Active Members</h6>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div className="shadow-sm target-card">
            <h6 className="target-title text-success h6">Monthly Target</h6>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              className="small-progress-bar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallWidget;
