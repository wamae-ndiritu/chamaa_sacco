import React from "react";
import { useSelector } from "react-redux";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { useGlobalContext } from "../context/context";

const TopHeader = () => {
  const { userInfo } = useSelector((state) => state.member);
  const { openMessageModal } = useGlobalContext();

  const first_name = userInfo?.fullname.split(" ")[0];

  const handleNotification = () => {
    openMessageModal();
  };
  return (
    <div className="top-header">
      <div className="topheader-wrapper">
        <div className="left">
          <h5 className="h5">Chama Sacco</h5>
        </div>
        <div className="right">
          <div className="top-header-icons">
            <div className="top-icon notification" onClick={handleNotification}>
              <NotificationsIcon />
              <span className="notification-badge">0</span>
            </div>
            <div className="top-icon">
              <SettingsIcon />
            </div>
          </div>
          <div className="profile">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
              alt="profile"
            />
            <div className="profile-text">
              <h6 className="h6">
                Hi, <span className="first_name">{first_name} &#128075;</span>
              </h6>

              {userInfo?.isOfficial ? (
                <span className="member-role official">Official</span>
              ) : (
                <span className="member-role">Member</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
