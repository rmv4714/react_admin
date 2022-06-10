import React from "react";
import "./Topbar.css";
import {NotificationsNone} from "@mui/icons-material";
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
          <NotificationsNone/>
          <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
          <LanguageIcon/>
          <span className="topIconBadge">2</span>
          </div>
          
          <div className="topbarIconsContainer">
          <SettingsIcon/>
          </div>

          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F1089519334823516388%2F&psig=AOvVaw2Bx3sLn1Sw-qeWgZ3No6Qs&ust=1654437096140000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDb_834k_gCFQAAAAAdAAAAABAD" alt = "" className="topAvatar"/>
        </div>
      </div>
    </div>
  );
}
