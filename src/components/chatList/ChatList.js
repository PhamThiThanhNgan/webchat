import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import tham from '../../asset/image/tham.jpg'
import khoa from '../../asset/image/khoa.jpg'
import phuc from '../../asset/image/phuc.jpg'
import duyen from '../../asset/image/duyen.jpg'
import nhi from '../../asset/image/nhi.jpg'
import duy from '../../asset/image/duy.jpg'
import cew from '../../asset/image/cew.jpg'
import neyun from '../../asset/image/neyun.jpg'
import neyun2 from '../../asset/image/neyun2.jpg'
import yang from '../../asset/image/yang.jpg'
export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
      tham,
      id: 1,
      name: "Tô Tồ Nhai Rớp Rớp",
      active: true,
      isOnline: true,
    },
    {
      image:
        phuc,
      id: 2,
      name: " Phúc Megas ",
      active: false,
      isOnline: false,
    },
    {
      image:
        khoa,
      id: 3,
      name: " Trịnh Đăng Khoa ",
      active: false,
      isOnline: false,
    },
    {
      image:
        nhi,
      id: 4,
      name: " Bảo Nhi",
      active: false,
      isOnline: true,
    },
    {
      image:
       duy,
      id: 5,
      name: " Hồ Phước Duy",
      active: false,
      isOnline: false,
    },
    {
      image:
        duyen,
      id: 6,
      name: " Mỹ Duyên ",
      active: false,
      isOnline: true,
    },
    {
      image:
        cew,
      id: 7,
      name: " Phạm Văn CEW ",
      active: false,
      isOnline: true,
    },
    {
      image:
        yang,
      id: 8,
      name: " My love ",
      active: false,
      isOnline: false,
    },
    {
      image:
        neyun,
      id: 9,
      name: " Trịnh Thị Nhện",
      active: false,
      isOnline: true,
    },
    {
      image: neyun2,
      id: 10,
      name: " Tô Thị Em Đã Xa Rời",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn-conversation ">
          <i className="fa fa-plus"></i>
          <span>Thêm cuộc trò chuyện</span>
        </button>
        <div className="chatlist__heading">
          <h4>Tin Nhắn</h4>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder=" Tìm kiếm cuộc trò chuyện" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
