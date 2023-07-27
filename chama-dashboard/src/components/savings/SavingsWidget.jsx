import React from "react";

const SavingsWidget = () => {
  return (
    <div className="container" style={{ backgroundColor: "balck" }}>
      <div className="row d-flex">
        <div className="col-lg-4 col-md-4 shadow-sm">
          <h6 className="h6">Current Savings</h6>
        </div>
        <div className="col-lg-4 col-md-4">
          <h6>Add Savings</h6>
        </div>
      </div>
    </div>
  );
};

export default SavingsWidget;
