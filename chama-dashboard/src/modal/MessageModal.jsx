import React, { useState } from "react";
import axios from "axios";
import "./Modal.css"; // Import your modal styles
import { useGlobalContext } from "../context/context";

function MessageModal() {
  const { members, isMessageModalOpen, closeMessageModal } = useGlobalContext();

  const [message, setMessage] = useState("");

  let phoneNo = [];

  members?.map((member) => {
    return phoneNo.push(`+${member.phone}`);
  });

  const handleSubmit = (e) => {
    axios
      .post(`https://ats-sms-api.onrender.com/sms`, {
        message,
        recipients: phoneNo,
      })
      .then(({ data }) => {
        console.log(data);
        closeMessageModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCloseModal = () => {
    closeMessageModal();
    document.body.style.overflow = "auto"; // Allow scrolling on the body
  };

  return (
    <div>
      {isMessageModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="h3 text-success text-center">
              Send Message to members
            </h3>
            <div class="mb-3">
              <label for="phone" class="form-label">
                Message
              </label>
              <textarea
                type="text"
                class="form-control"
                id="phone"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
              ></textarea>
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

export default MessageModal;
