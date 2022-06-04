import React from 'react'
import "./Sidebar.css";
import { LineStyle, Timeline, TrendingUp } from '@mui/icons-material';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">DashBoard</h3>
          <ul className="sidebarList">
            <li className="sidebarLisItem">
              <LineStyle />
              Home
            </li>

            <li className="sidebarLisItem">
              <Timeline />
              Analytics
            </li>

            <li className="sidebarLisItem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
