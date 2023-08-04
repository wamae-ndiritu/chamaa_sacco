import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MembersList from "../components/members/MembersList";
import Modal from "../modal/Modal";
import { listMembers } from "../redux/actions/memberActions";

const Members = () => {
  const dispatch = useDispatch();
  const { members } = useSelector((state) => state.member);

  const formattedData = members?.map((member) => {
    return {
      ...member,
      id: member._id,
    };
  });

  console.log(members);

  useEffect(() => {
    listMembers(dispatch);
  }, [dispatch]);

  return (
    <div className="w-mobile">
      <Modal />
      <MembersList data={formattedData} />
    </div>
  );
};

export default Members;
