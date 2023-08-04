import "./Comment.scss";

// eslint-disable-next-line react/prop-types
const Comment = ({ name, comment, postname, icon, image }) => {
  return (
    <div className="comment">
      <div className="user-info">
        <img src={image} alt="User Profile Image" />
        <div className="user-details">
          <span className="user-name">{name}</span>
          <span className="comment-post">
            <span>Commented On:</span>
            <span className="postname">{postname}</span>
          </span>
        </div>
      </div>
      <div className="comment-text">
        <p>{comment}</p>
        <div className="like-icon">{icon}</div>
      </div>
    </div>
  );
};

export default Comment;
