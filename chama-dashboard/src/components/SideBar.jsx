import React from "react";
import { useDispatch } from "react-redux";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import LogoutIcon from "@mui/icons-material/Logout";
import { navs } from "./sidebarData";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../redux/actions/memberActions";

const SideBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <div className="logo-icon">
          <Diversity3Icon />
        </div>
        <h5 className="h5">Chama Portal</h5>
      </div>
      <div className="sidebar-menu">
        {navs.map((navItem) => {
          const { _id, title, items } = navItem;
          return (
            <div className="sidebar-item" key={_id}>
              <h5 className="h5">{title}</h5>
              <ul>
                {items.map((item, index) => {
                  const { name, path, icon } = item;
                  return (
                    <li key={index}>
                      <Link
                        to={path}
                        className={
                          currentPath === path ? `link active` : "link"
                        }
                      >
                        {icon}
                        <h6 className="h6">{name}</h6>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="logout-btn" onClick={handleLogout}>
        <LogoutIcon className="link-icon" />
        <h6 className="h6">Logout</h6>
      </div>
    </div>
  );
};

export default SideBar;
