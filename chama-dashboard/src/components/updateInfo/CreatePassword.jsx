import React, { useState } from "react";
import "./updateinfo.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CreatePassword = () => {
  const [viewPass, setViewPass] = useState(false);
  return (
    <div className="reset-pass-cont">
      <div className="reset-heroe">
        <img
          src="https://netstorage-tuko.akamaized.net/images/0fgjhs34cukqa5p68g.jpg?imwidth=900"
          alt="..."
        />
      </div>
      <div className="reset-heroe-overlay">
        <h5 className="h5">Nelite Chamaa</h5>
        <div className="heroe-content">
          <p>
            Our Chamaa portal helps you manage all your activities from
            admitting members, deposit/widthraw funds, make communications to
            members, undertake management elections etc.
          </p>
          <ul>
            <h6 className="h6">Our Services</h6>
            <li>Manage your chamaa</li>
            <li>Get access to services</li>
            <li>24/7 Support</li>
          </ul>
        </div>
        <p className="heroe-note">Let's take our chamaa digital!</p>
      </div>
      <div className="reset-form">
        <div className="reset-form-wrapper shadow-sm">
          <h5 className="h5">Reset your password!</h5>
          <p className="reset-notice">
            {" "}
            You are required to reset your password before continuing...
          </p>
          <div className="reset-input">
            <input
              type={viewPass ? "text" : "password"}
              placeholder="password"
            />
          </div>
          <div className="reset-input">
            <input
              type={viewPass ? "text" : "password"}
              placeholder="Confirm Password"
            />
          </div>
          <div className="toggle-pass" onClick={() => setViewPass(!viewPass)}>
            {viewPass ? <VisibilityOffIcon /> : <VisibilityIcon />}{" "}
            <p>Show Password</p>
          </div>
          <button className="reset-btn">Reset Password</button>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
