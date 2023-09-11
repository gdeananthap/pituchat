import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { allChat, needToReply, replied } from '../data/chat';
import { getChatById } from '../data/chat';
import NoChat from '../component/noChat';
import ChatList from '../component/chatList';
import ChatWindow from '../component/chatWindow';

export default function Home() {
  const [tabIndex, setTabIndex] = useState(0)
  const [chats, setChats] = useState(needToReply)
  const [selectedChat, setSelectedChat] = useState(null)
  const [chatDetail, setChatDetail] = useState(null)
  const [showChatDetail, setShowChatDetail] = useState(false)
  const [userId, setUserId] = useState(null)

  const chatOptions = [needToReply, replied, allChat]

  const toggleShowChatDetail = () => {
    setShowChatDetail(!showChatDetail)
  }

  const selectChat = (id) => {
    setSelectedChat(id)
    setChatDetail(getChatById(id, chats))
    setShowChatDetail(false)
  };

  const toggleTab = (id) => {
    setTabIndex(id)
    setSelectedChat(null)
    setChatDetail(null)
    setChats(chatOptions[id])
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    if(userId) setUserId(userId)
  }, []);

  return (
    <Flex w='nextSidebar' h='full' backgroundColor='white'>
      <ChatList 
        chats={chats}
        tabIndex={tabIndex}
        toggleTab={toggleTab}
        selectedChat={selectedChat}
        selectChat={selectChat}
      />
      { selectedChat != null ?
        <ChatWindow
          chatDetail={chatDetail}
          showChatDetail={showChatDetail}
          toggleShowChatDetail={toggleShowChatDetail}
          userId={userId}        
        />
        : 
        <NoChat />
      }
    </Flex>
  )
}