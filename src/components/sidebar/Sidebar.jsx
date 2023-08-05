import "./Sidebar.scss";
import HomeIcon from "@mui/icons-material/Home";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Logout } from "@mui/icons-material";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Unitellas</span>
      </div>
      <div className="start">
        <div className="top">
          <ul>
            <li>
              <HomeIcon className="icon" />
              <span>Home</span>
            </li>
            <li>
              <AccountTreeIcon className="icon" />
              <span>Projects</span>
              {/* <span className="addOnBtn">
              <DashboardIcon />
            </span> */}
            </li>
            <li>
              <AssignmentIcon className="icon" />
              <span>Tasks</span>
              {/* <span className="addOnBtn">
              <DashboardIcon />
            </span> */}
            </li>
            <li>
              <GroupsIcon className="icon" />
              <span>Teams</span>
            </li>
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </ul>
        </div>
        <div className="center">
          <span className="box-title">Upgrade to Pro</span>
          <span className="box-text">
            Get 1 month free <br />
            and unlock
          </span>
          <button className="box-btn">Upgrade</button>
        </div>
        <div className="bottom">
          <li>
            <HelpCenterIcon className="icon" />
            <span>Information</span>
          </li>
          <li>
            <Logout className="icon" />
            <span>Log Out</span>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
