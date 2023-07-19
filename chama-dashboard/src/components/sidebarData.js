import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import EuroIcon from "@mui/icons-material/Euro";
import VerifiedIcon from "@mui/icons-material/Verified";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
export const navs = [
  {
    _id: 0,
    title: "Main",
    items: [
      {
        name: "Dashboard",
        path: "/",
        icon: <HomeIcon className="link-icon" />,
      },
      {
        name: "Analytics",
        path: "/analytics",
        icon: <AnalyticsIcon className="link-icon" />,
      },
    ],
  },
  {
    _id: 1,
    title: "Members",
    items: [
      {
        name: "Management",
        path: "/management",
        icon: <AdminPanelSettingsIcon className="link-icon" />,
      },
      {
        name: "Members",
        path: "/members",
        icon: <GroupAddIcon className="link-icon" />,
      },
    ],
  },
  {
    _id: 2,
    title: "Contributions",
    items: [
      {
        name: "Balance",
        path: "/balance",
        icon: <MonetizationOnIcon className="link-icon" />,
      },
      {
        name: "Savings",
        path: "/savings",
        icon: <LocalAtmIcon className="link-icon" />,
      },
      {
        name: "Loans",
        path: "/loans",
        icon: <EuroIcon className="link-icon" />,
      },
    ],
  },
  {
    _id: 3,
    title: "Transactions",
    items: [
      {
        name: "Approved",
        path: "/transactions/approved",
        icon: <VerifiedIcon className="link-icon" />,
      },
      {
        name: "Pending",
        path: "/transactions/pending",
        icon: <UnpublishedIcon className="link-icon" />,
      },
    ],
  },
  {
    _id: 3,
    title: "General",
    items: [
      {
        name: "Notifications",
        path: "/notifications",
        icon: <NotificationsIcon className="link-icon" />,
      },
      {
        name: "Settings",
        path: "/settings",
        icon: <SettingsIcon className="link-icon" />,
      },
    ],
  },
];
