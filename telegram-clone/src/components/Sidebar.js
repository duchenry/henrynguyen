import { IconButton } from "@material-ui/core/";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Sidebar.css";
import SidebarThread from "./SidebarThread";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__search">
          <SearchIcon />
          <input type="text" className="sidebar__input" placeholder="Search" />
        </div>
        <IconButton variant="outlined" id="sidebar__button">
          <BorderColorOutlinedIcon />
        </IconButton>
      </div>
      <div className="sidebar__threads">
          <SidebarThread />
      </div>
      <div className="sidebar__bottom"></div>
    </div>
  );
};

export default Sidebar;
