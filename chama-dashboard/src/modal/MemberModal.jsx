import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Modal.css";
import { useGlobalContext } from "../context/context";
import { validateInputsError } from "../InputValidation";
import { listMembers, registerMember } from "../redux/actions/memberActions";
import Message from "../utilComponents/Message";
import LinearDotted from "../utilComponents/spinners/LinearDotted";

function MemberModal() {
  const dispatch = useDispatch();

  const { loading, error, register_success, userInfo } = useSelector(
    (state) => state.member
  );
  const { isModalOpen, closeMemberModal } = useGlobalContext();

  const [details, setDetails] = useState({
    fullname: "",
    phone: "",
  });
  const [isInputError, setIsInputError] = useState(false);

  const groupId = userInfo?.group_id;

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateInputsError(details);
    setIsInputError(error);
    if (error === false) {
      registerMember(
        {
          fullname: details.fullname,
          phone_no: details.phone,
          group_id: groupId,
        },
        dispatch
      );
    }
  };

  const handleCloseModal = () => {
    closeMemberModal();
    document.body.style.overflow = "auto"; // Allow scrolling on the body
  };

  useEffect(() => {
    if (register_success) {
      closeMemberModal();
      listMembers(groupId, dispatch);
    }
  }, [dispatch, groupId, register_success, closeMemberModal]);

  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="h3 text-success text-center">Add Member</h3>
            {isInputError ? (
              <Message variant="alert-danger">All inputs required!</Message>
            ) : loading ? (
              <LinearDotted />
            ) : (
              error && <Message variant="alert-danger">{error}</Message>
            )}
            <div class="mb-3">
              <label for="name" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="fullname"
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">
                Phone Number
              </label>
              <input
                type="text"
                class="form-control"
                id="phone"
                name="phone"
                onChange={handleChange}
                placeholder="254740924507"
              />
            </div>
            <div className="modal-btns">
              <button className="bg-success " onClick={handleSubmit}>
                Submit
              </button>
              <button onClick={handleCloseModal} className="bg-danger ">
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemberModal;
