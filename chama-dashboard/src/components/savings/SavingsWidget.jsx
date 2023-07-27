import React from "react";
import { useGlobalContext } from "../../context/context";

const SavingsWidget = () => {
  const { openFundModal } = useGlobalContext();

  const handleModal = () => {
    openFundModal();
  };
  return (
    <div className="container">
      <button className="btn-add" onClick={handleModal}>
        Add Fund
      </button>
    </div>
  );
};

export default SavingsWidget;
