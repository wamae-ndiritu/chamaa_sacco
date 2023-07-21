import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGlobalContext } from "../context/context";

const rows = [
  {
    id: 1,
    col1: "Wamae Ndiritu",
    col2: 2000,
    col3: "Savings",
    col4: "Submitted",
    col5: "11th July 2023",
  },
  {
    id: 2,
    col1: "Mark Zuckerberg",
    col2: 100000,
    col3: "Donation",
    col4: "Submitted",
    col5: "10th July 2023",
  },
  {
    id: 3,
    col1: "Tonny Mmeber",
    col2: 5000,
    col3: "Loan",
    col4: "Waiting Approval",
    col5: "9th July 2023",
  },
];

const columns = [
  { field: "col1", headerName: "Name", width: 200 },
  { field: "col2", headerName: "Amount", width: 150 },
  { field: "col3", headerName: "Transaction type", width: 200 },
  {
    field: "col4",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      const transactionStatus = params.value;
      let backgroundColorClass = "";

      if (transactionStatus === "Submitted") {
        backgroundColorClass = "bg-success";
      } else if (transactionStatus === "Waiting Approval") {
        backgroundColorClass = "bg-info";
      } else if (transactionStatus === "Rejected") {
        backgroundColorClass = "bg-danger";
      }

      return (
        <span
          className={`p-1 ${backgroundColorClass}`}
          style={{ borderRadius: "3px" }}
        >
          {transactionStatus}
        </span>
      );
    },
  },
  { field: "col5", headerName: "Date", width: 200 },
];

const NewTransactions = () => {
  //   const getRowClassName = (params) => {
  //     const transactionType = params.row.col3;
  //     const transactionStatus = params.row.col4;

  //     if (transactionType === "Savings") {
  //       return "bg-warning";
  //     } else if (transactionType === "Donation") {
  //       return "bg-info";
  //     } else if (transactionType === "Loan") {
  //       return "bg-success";
  //     }
  //     return "";
  //   };
  const { scrollContext } = useGlobalContext();
  return (
    <div
      className="new-transactions-cont mt-3 shadow-lg"
      style={{ width: `${scrollContext.deviceWidth}` }}
    >
      <h5 className="h5 text-success">New Transactions</h5>
      <div className="table-cont">
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default NewTransactions;
