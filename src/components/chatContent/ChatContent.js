import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import tham from '../../asset/image/tham.jpg'
import ngan from '../../asset/image/ngan.jpg'
export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        ngan,
      type: "",
      msg: "Hi Thém , Tao là Ngăn nè :3",
    },
    {
      key: 2,
      image:
      tham ,
      type: "other",
      msg: " Ồ right , kệ m",
    },
    {
      key: 3,
      image:
      tham,
      type: "other",
      msg: " Rồi nhắn tin cho tao chi",
    },
    {
      key: 4,
      image:
      ngan,
      type: "",
      msg: "Tao nhắn tin để test mess thôi",
    },
    {
      key: 5,
      image:
      tham,
      type: "other",
      msg: " Waooo dữ vậy sao",
    },
    {
      key: 6,
      image:
      ngan,
      type: "",
      msg: " Chứ sao nữa bà zà",
    },
    {
      key: 7,
      image:
      tham,
      type: "other",
      msg: "Baiiii",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
            {tham},
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image= {tham}
              />
              <p> Tô Tồ Nhai Rớp Rớp</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Nhập để gửi..."
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
