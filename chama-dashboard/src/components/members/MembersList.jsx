import { useSelector } from "react-redux";
import "./membersList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useGlobalContext } from "../../context/context";

export default function MembersList({ data }) {
  const { userInfo } = useSelector((state) => state.member);

  const { openMemberModal } = useGlobalContext();

  const handleDelete = (id) => {
    console.log("deleting soon...");
  };

  const columns = [
    {
      field: "id",
      headerName: "S/NO",
      width: 30,
    },
    {
      field: "fullname",
      headerName: "Member",
      width: 200,
    },
    {
      field: "phone_no",
      headerName: "Phone",
      width: 150,
      renderCell: (params) => {
        const phone = params.row.phone_no.replace("254", "0");
        return <>{phone}</>;
      },
    },
    {
      field: "role",
      headerName: "Role",
      width: 100,
      renderCell: (params) => {
        return (
          <>
            {params.row.isOfficial ? (
              <h6 className="bg-success role">Official</h6>
            ) : (
              <h6 className="bg-warning role">Member</h6>
            )}
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {userInfo?.isOfficial ? (
              <DeleteIcon
                className="userListDelete"
                onClick={() => handleDelete(params.row.id)}
              />
            ) : (
              <div> </div>
            )}
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="userList">
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
      </div>
      {userInfo?.isOfficial ? (
        <div className="add-badge" onClick={() => openMemberModal()}>
          <PersonAddAltIcon className="add-icon" />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
