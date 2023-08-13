import React from "react";
import SavingsWidget from "../components/savings/SavingsWidget";
import SmallWidget from "../components/DashboardComponents/SmallWidget";
import AddFundModal from "../modal/AddFundModal";

const Savings = () => {
  return (
    <>
      <AddFundModal />
      <SmallWidget />
      <SavingsWidget />
    </>
  );
};

export default Savings;
