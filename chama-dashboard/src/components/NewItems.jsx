import React from "react";
import NewMembers from "./NewMembers";
import NewTransactions from "./NewTransactions";

const NewItems = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <NewMembers />
        </div>
        <div className="col-lg-8 col-md-8">
          <NewTransactions />
        </div>
      </div>
    </div>
  );
};

export default NewItems;
