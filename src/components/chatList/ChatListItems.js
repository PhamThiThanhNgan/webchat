import React from "react";
import Avatar from "./Avatar";

const ChatListItems = ({
  user,
  animationDelay,
  active, isOnline,
  handleSelectedChat,
  chat
}) => {

    return (
      <div
        style={{ animationDelay: `0.${animationDelay}s` }}
        onClick={handleSelectedChat}
        className={`chatlist__item ${
          active
        } `}
      >
        <Avatar
          image={ user?.avatar }
          isOnline={isOnline}
        />

        <div className="userMeta">
          <p>{!chat.isGroupChat ? user?.username : chat.chatName}</p>
          <span className="activeTime">32 phút trước</span>
        </div>
      </div>
    );
}

export default ChatListItems;