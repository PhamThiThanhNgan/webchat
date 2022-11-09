import React from "react";
import Avatar from "../chatList/Avatar";

const UserItem = ({name, animationDelay, active, isOnline, image, handleSelectedChat}) => {

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
          active ? active : ""
        } `}
      >
        <Avatar
          image={
            image ? image : "http://placehold.it/80x80"
          }
          isOnline={isOnline}
        />

        <div className="userMeta">
          <p>{name}</p>
          <span className="activeTime">32 phút trước</span>
        </div>
      </div>
    );
}

export default UserItem;