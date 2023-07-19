import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

const TopHeader = () => {
  return (
    <div className="top-header bg-info">
      <div className="topheader-wrapper">
        <div className="left">
          <h5 className="h5">Chama Sacco</h5>
        </div>
        <div className="right">
          <div className="top-header-icons">
            <div className="top-icon notification">
              <NotificationsIcon />
              <span className="notification-badge">0</span>
            </div>
            <div className="top-icon">
              <SettingsIcon />
            </div>
          </div>
          <div className="profile">
            <img
              src="https://ocdn.eu/pulscms-transforms/1/mJ-k9kuTURBXy8wNGMxYWM0Mi1kN2YyLTQzZGEtYjZlYy03NTE4NzUwYTk3ODUuanBlZ5GTBc0DFs0Brt4AAaEwBQ"
              alt="profile"
            />
            <div className="profile-text">
              <h6 className="h6">Elon Musk</h6>
              <span>Admin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
