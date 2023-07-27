import "./membersList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function MembersList({ data }) {
  const handleDelete = (id) => {
    console.log("deleting soon...");
  };

  const columns = [
    {
      field: "id",
      headerName: "S/NO",
      width: 250,
    },
    {
      field: "fullname",
      headerName: "Member",
      width: 250,
    },
    { field: "phone", headerName: "Phone", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/members/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
