import "./ProfileCard.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "../../assets/castImage2.png";
const ProfileCard = () => {
  return (
    <div className="user-profile-card">
      <div className="user-info">
        <div className="profile">
          <img src={Image} alt="User Avatar" className="user-avatar" />
          <div className="check">
            {" "}
            <DashboardIcon />{" "}
          </div>
        </div>
        <div className="user-details">
          <h2 className="user-name">Emeka Manuel</h2>
          <p className="user-email">marrnuel@example.com</p>
        </div>
      </div>
      <div className="user-icons">
        <div className="icon">
          <LocalPhoneIcon />
        </div>
        <div className="icon">
          <VideoCallIcon />
        </div>
        <div className="icon">
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
