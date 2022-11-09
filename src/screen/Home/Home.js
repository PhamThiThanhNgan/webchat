import React, { useEffect } from 'react'
import ChatBody from '../../components/chatBody/ChatBody'
import { getMe } from '../../service/AuthService';
import { useUserStore } from '../../store/store';

const Home = () => {
  const updateUser = useUserStore(state => state.updateUser);

  useEffect(() => {
    getMe()
      .then((response) => {
        updateUser(response?.data?.data);
      })
      .catch((err) => {
        window.localStorage.removeItem('accessToken');
        window.location.reload();
      })
  }, []);
    
  return (
    <div className="main-section">
      <ChatBody />
    </div>
  )
}

export default Home