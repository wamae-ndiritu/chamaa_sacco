import React, { useState } from "react";
import axios from "axios";
import "./Modal.css"; // Import your modal styles
import { useGlobalContext } from "../context/context";
import { URL } from "../Url";

function AddFundModal() {
  const { isFundModalOpen, closeFundModal } = useGlobalContext();

  const [details, setDetails] = useState({
    contributionAmount: "",
    phoneNo: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/api/payment/stk/push`, details)
      .then(({ data }) => {
        console.log(data);
        closeFundModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCloseModal = () => {
    closeFundModal();
    document.body.style.overflow = "auto"; // Allow scrolling on the body
  };

  return (
    <div>
      {isFundModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3 className="h3 text-success text-center">
              Add Your Contribution
            </h3>
            <div class="mb-3">
              <label for="name" class="form-label">
                Number
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                name="phoneNo"
                onChange={handleChange}
                placeholder="2547********"
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">
                Contribution Amount
              </label>
              <input
                type="text"
                class="form-control"
                id="phone"
                name="contributionAmount"
                onChange={handleChange}
                placeholder="KES"
              />
            </div>
            <div className="modal-btns">
              <button className="bg-success" onClick={handleSubmit}>
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

export default AddFundModal;
