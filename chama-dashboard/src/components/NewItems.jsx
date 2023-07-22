import React from "react";
import NewMembers from "./NewMembers";
import NewTransactions from "./NewTransactions";

const NewItems = () => {
  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-lg-4 col-md-4 col-12">
          <NewMembers />
        </div>
        <div className="col-lg-8 col-md-8 col-12">
          <NewTransactions />
        </div>
      </div>
    </div>
  );
};

export default NewItems;
