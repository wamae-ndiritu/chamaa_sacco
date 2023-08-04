import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MembersList from "../components/members/MembersList";
import Modal from "../modal/Modal";
import { listMembers } from "../redux/actions/memberActions";

const Members = () => {
  const dispatch = useDispatch();
  const { members, userInfo } = useSelector((state) => state.member);

  const formattedData = members?.map((member) => {
    return {
      ...member,
      id: member.member_id,
    };
  });

  const groupId = userInfo?.group_id;

  useEffect(() => {
    listMembers(groupId, dispatch);
  }, [groupId, dispatch]);

  return (
    <div className="w-mobile">
      <Modal />
      <MembersList data={formattedData} />
    </div>
  );
};

export default Members;
