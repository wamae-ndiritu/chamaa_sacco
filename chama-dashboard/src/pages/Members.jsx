import React, { useEffect } from "react";
import MembersList from "../components/members/MembersList";
import Modal from "../modal/Modal";
import { useGlobalContext } from "../context/context";

const Members = () => {
  const { openModal, members, getMembers } = useGlobalContext();

  const formattedData = members?.map((member) => {
    return {
      ...member,
      id: member._id,
    };
  });

  const handleModal = () => {
    openModal();
  };

  useEffect(() => {
    getMembers();
  }, [getMembers]);

  return (
    <div>
      <Modal />
      <button className="add-btn" onClick={handleModal}>
        Add Member
      </button>
      <MembersList data={formattedData} />
    </div>
  );
};

export default Members;
