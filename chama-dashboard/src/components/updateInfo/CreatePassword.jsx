import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./updateinfo.scss";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { validateInputsError } from "../../InputValidation";
import { updateProfile } from "../../redux/actions/memberActions";
import LinearDotted from "../../utilComponents/spinners/LinearDotted";
import Message from "../../utilComponents/Message";

const CreatePassword = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { loading, error, updateSuccess } = useSelector(
    (state) => state.member
  );

  const [viewPass, setViewPass] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isInputError, setIsInputError] = useState(false);
  const [err, setErr] = useState("");

  const member_id = params.id;

  const handleSubmit = (e) => {
    setIsInputError(false);
    e.preventDefault();
    const error = validateInputsError({ password, confirmPassword });
    setIsInputError(error);
    if (error === false) {
      if (password === confirmPassword) {
        updateProfile(member_id, { password }, dispatch);
      } else {
        setIsInputError(true);
        setErr("Passwords do not match!");
      }
    } else {
      setErr("All fields are required!");
    }
  };

  useEffect(() => {
    if (updateSuccess) {
      navigate("/");
    }
  }, [updateSuccess, navigate]);
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
          {isInputError ? (
            <Message variant="alert-danger">{err}</Message>
          ) : loading ? (
            <LinearDotted />
          ) : (
            error && <Message variant="alert-danger">{error}</Message>
          )}
          <p className="reset-notice">
            {" "}
            You are required to reset your password before continuing...
          </p>
          <div className="reset-input">
            <input
              type={viewPass ? "text" : "password"}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="reset-input">
            <input
              type={viewPass ? "text" : "password"}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="toggle-pass" onClick={() => setViewPass(!viewPass)}>
            {viewPass ? <VisibilityOffIcon /> : <VisibilityIcon />}{" "}
            <p>Show Password</p>
          </div>
          <button className="reset-btn" onClick={handleSubmit}>
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
