import React, { useEffect } from "react";
import MembersList from "../components/members/MembersList";
import Modal from "../modal/Modal";
import { useGlobalContext } from "../context/context";

const Members = () => {
  const { members, getMembers } = useGlobalContext();

  const formattedData = members?.map((member) => {
    return {
      ...member,
      id: member._id,
    };
  });

  useEffect(() => {
    getMembers();
  }, [getMembers]);

  return (
    <div className="w-mobile">
      <Modal />
      <MembersList data={formattedData} />
    </div>
  );
};

export default Members;
