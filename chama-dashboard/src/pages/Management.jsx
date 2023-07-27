import React, { useEffect } from "react";
import { useGlobalContext } from "../context/context";
import MembersList from "../components/members/MembersList";

const Management = () => {
  const { admins, getAdmins } = useGlobalContext();
  const formattedData = admins?.map((admin) => {
    return {
      ...admin,
      id: admin._id,
    };
  });

  useEffect(() => {
    getAdmins();
  }, [getAdmins]);
  return (
    <div>
      <MembersList data={formattedData} />
    </div>
  );
};

export default Management;
