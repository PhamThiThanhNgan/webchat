import React, { Component } from "react";
import './chatBody.scss'
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import Nav from "../nav/Nav";
// import UserProfile from "../userProfile/UserProfile";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <Nav/>
        <ChatList />
        <ChatContent />
        {/* <UserProfile /> */}
      </div>
    );
  }
}
