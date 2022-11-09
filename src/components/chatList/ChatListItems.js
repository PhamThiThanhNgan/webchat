import React from "react";
import Avatar from "./Avatar";

const ChatListItems = ({user, animationDelay, active, isOnline, handleSelectedChat}) => {

  // const selectChat = (e) => {
  //   for (
  //     let index = 0;
  //     index < e.currentTarget.parentNode.children.length;
  //     index++
  //   ) {
  //     e.currentTarget.parentNode.children[index].classList.remove("active");
  //   }
  //   e.currentTarget.classList.add("active");
  // };

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
          <p>{user?.username}</p>
          <span className="activeTime">32 phút trước</span>
        </div>
      </div>
    );
}

export default ChatListItems;