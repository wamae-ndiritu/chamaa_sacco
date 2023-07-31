import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import CallIcon from "@mui/icons-material/Call";
import KeyIcon from "@mui/icons-material/Key";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { login } from "../redux/actions/memberActions";
import { useDispatch, useSelector } from "react-redux";
import LinearDotted from "../utilComponents/spinners/LinearDotted";
import Message from "../utilComponents/Message";
import { validateInputsError } from "../InputValidation";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isInputError, setIsInputError] = useState(false);

  const { success, loading, error } = useSelector((state) => state.member);
  const [loginDetails, setLoginDetails] = useState({
    group_name: "",
    phone_no: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateInputsError(loginDetails);
    setIsInputError(error);
    if (error === false) {
      login(loginDetails, dispatch);
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [navigate, success]);

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
          {isInputError ? (
            <Message variant="alert-danger">All inputs required!</Message>
          ) : loading ? (
            <LinearDotted />
          ) : (
            error && <Message variant="alert-danger">{error}</Message>
          )}
          <div className="input">
            <div className="input-icon">
              <Diversity2Icon />
            </div>
            <input
              type="text"
              placeholder="Group Name"
              name="group_name"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <div className="input-icon">
              <CallIcon />
            </div>
            <input
              type="text"
              placeholder="Phone"
              name="phone_no"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <div className="input-icon">
              <KeyIcon />
            </div>
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button className="login-btn" onClick={handleSubmit}>
            Log In
          </button>
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
