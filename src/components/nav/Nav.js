import React, { useEffect, useState } from "react";
import '../nav/Nav.scss'

import { Button, Form, Modal } from "react-bootstrap";
import { useUserStore } from "../../store/store";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { getAllUser, selectChat } from "../../service/ChatService";
import UserItem from "../userItem/userItem";

export default function Nav(props) {

    const [show, setShow] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);
    const User = useUserStore(state => state.user);
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const setSelectedChat = useUserStore(state => state.setSelectedChat);
    const updateChats = useUserStore(state => state.updateChats);
    const chats = useUserStore(state => state.chats);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const accessChat = (userId) => {

        selectChat(userId)
            .then((response) => {
                setSelectedChat(response?.data);
                if (!chats.find((item) => item._id === response?.data._id)) {
                  updateChats([...chats, response?.data]);
                }
                setShowDrawer(false);
            })
            .catch((error) => {
                console.log('error: ', error);
            });
    }

    console.log('chatts: ', chats);

    const SingOut = () => {
        window.localStorage.removeItem('accessToken');
        window.location.reload();
    };

    useEffect(() => {
        getAllUser(searchTerm)
            .then((response) => {
                setUsers(response?.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [searchTerm])

    return (
        <>
            <div className='containerr'>
                <section className='seting'>
                    <div className='avatar' style={{ marginLeft: '20px', cursor: 'pointer' }}>
                        <div className='avatar-img' onClick={handleShow}>
                            <img src={User?.avatar} alt="avt" />
                        </div>
                    </div>
                    <div className='chatgroup '><i className="fa fa-comment-dots"></i></div>
                    <div className='list' onClick={() => setShowDrawer(true)}><i className="fa fa-address-book"></i></div>
                    <div className='add'><i className="fa fa-user-plus"></i></div>
                    <div className='cloud'><i className="fa fa-cloud"></i></div>
                    <div className='bussiness'><i className="fa fa-suitcase"></i></div>
                    <div className='cofig'><i className="fa fa-cog"></i></div>
                    <div className='singout' onClick={SingOut}><i className="fa fa-sign-out-alt"></i>

                    </div>
                </section>
            </div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}
            >
                <Modal.Header>
                    <Modal.Title>Thông tin tài khoản</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="avatar">
                            <div style={{
                                width: '100px',
                                height: '100px',
                                margin: '0px auto'
                            }}>
                                <div className='avatar-img'>
                                    <img src={User?.avatar} alt="avt" />
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                                value={User?.email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Tên hiển thị</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nguyen Van A"
                                autoFocus
                                value={User?.username}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Xác Nhận Thay Đổi
                    </Button>
                </Modal.Footer>
            </Modal>
            <Offcanvas show={showDrawer} onHide={() => setShowDrawer(false)} backdrop="static">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cuộc trò chuyện mới</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="chatList__search">
                        <div className="search_wrap">
                            <input
                                value={searchTerm}
                                type="text"
                                placeholder=" Tìm kiếm cuộc trò chuyện"
                                onChange={(e) => { setSearchTerm(e.target.value) }}
                            />
                            <button className="search-btn">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="chatlist__items">
                        {users.map((item, index) => {
                            return (
                                <UserItem
                                    key={index}
                                    name={item?.username}
                                    animationDelay={index + 1}
                                    active={item?.active ? "active" : ""}
                                    isOnline={item?.isOnline ? "active" : ""}
                                    image={item?.avatar}
                                    handleSelectedChat={() => accessChat(item?._id)}
                                />
                            );
                        })}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );

}
