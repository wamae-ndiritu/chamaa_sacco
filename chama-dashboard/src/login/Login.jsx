import React from "react";
import "./login.scss";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import CallIcon from "@mui/icons-material/Call";
import KeyIcon from "@mui/icons-material/Key";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Login = () => {
  return (
    <div className="login-cont">
      <div className="login-left">
        <h3 className="h3 header-logo-text">Nelite Chamaa</h3>
        <div className="left-logo">
          <img src="/Images/chamaa.png" alt="logo" />
        </div>
        <div className="info">
          <h5 className="h5">Chamaa Sacco Portal</h5>
          <p>
            Our Chamaa portal helps you manage all your activities from
            admitting members, deposit/widthraw funds, make communications to
            members, undertake management elections etc.
          </p>
          <ul>
            <li>Manage your chamaa</li>
            <li>Get access to services</li>
            <li>24/7 Support</li>
          </ul>
        </div>
        <p className="left-footer">Let's take our chamaa digital!</p>
      </div>
      <div className="login-right">
        <div className="login-wrapper">
          <h6 className="h6">Login to access your chamaa</h6>
          <div className="input">
            <div className="input-icon">
              <Diversity2Icon />
            </div>
            <input type="text" placeholder="Group Name" />
          </div>
          <div className="input">
            <div className="input-icon">
              <CallIcon />
            </div>
            <input type="text" placeholder="Phone" />
          </div>
          <div className="input">
            <div className="input-icon">
              <KeyIcon />
            </div>
            <input type="password" placeholder="password" />
          </div>
          <button className="login-btn">Log In</button>
          <p className="forgot">Forgot your password?</p>
        </div>
        <div className="message-badge">
          <ChatBubbleOutlineIcon />
        </div>
      </div>
    </div>
  );
};

export default Login;
