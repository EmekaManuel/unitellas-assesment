import "./Input.scss";
import { AttachFile, EmojiEmotions, Mic } from "@mui/icons-material";

const MessageInput = () => {
  return (
    <div className="message-input">
      <div className="inputs">
        <div className="attachment-icon">
          <AttachFile />
        </div>
        <input type="text" placeholder="Write your message" />
        <div className="emoji-icon">
          <EmojiEmotions />
        </div>
        <div className="microphone-icon">
          <Mic />
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
