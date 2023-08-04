import ProfileCard from "../card/ProfileCard";
import Comment from "../comments/Comment";
import "./Menubar.scss";

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

import image from "../../assets/castImage2.png";
import Input from "../inputs/Input";
const Menubar = () => {
  return (
    <div className="menubar">
      <div className="profile-card">
        <ProfileCard />
      </div>

      <div className="profile-card">
        <span className="title">activity</span>
        <Comment
          name="Gideon Dev"
          image={image}
          comment="This is the comment text. Lorem ipsum dolor sit ames, consectetur Nipissing elia."
          postname="Stark Project"
          icon={<ThumbUpAltIcon />}
        />
        <Comment
          name="Manuel Dev"
          image={image}
          comment="Hello World Hello World Hello World Hello World Hello World Hello World Hello World"
          postname="Unitellas Project"
          icon={<InsertEmoticonIcon />}
        />
        <Input />
      </div>
    </div>
  );
};

export default Menubar;
