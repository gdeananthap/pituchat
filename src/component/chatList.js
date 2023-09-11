import React, { useState } from 'react'
import { Checkbox, Circle, Flex, Icon, IconButton, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Tab, TabList, TabPanel, TabPanels, Tabs, Text, } from '@chakra-ui/react'
import { BiSearch, BiSlider } from "react-icons/bi";
import { allChat, needToReply, replied } from '../data/chat';
import ChatBox from './chatbox';

export default function ChatList({chats, tabIndex, toggleTab, selectedChat, selectChat}) {
  const [showSearchChat, setShowSearchChat] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState([]);
  const filterOptions = [
    { id: 1, label: 'Shopee - Beauty Lovers' },
    { id: 2, label: 'Shopee - Makeupucino' },
    { id: 3, label: 'Tokopedia - Beauty Lovers' },
    { id: 4, label: 'Tokopedia - Makeupucino' },
  ];

  const toggleShowSearchChat = () => {
    setShowSearchChat(!showSearchChat)
  }

  const toggleSelection = (option) => {
    if (selectedFilter.includes(option.id)) {
      setSelectedFilter(selectedFilter.filter((item) => item !== option.id));
    } else {
      setSelectedFilter([...selectedFilter, option.id]);
    }
  };

  const selectAll = () => {
    setSelectedFilter([1, 2, 3, 4])
  };

  const countUnreadMessages = (messages) => {
    return messages.reduce((totalUnread, message) => totalUnread + message.unread, 0);
  };

  return (
    <Flex w='chatList' h='full' direction='column'>
      <Flex w='full' h='topbar' px='4' direction='row' align='center' justify='space-between'>
        <Text fontSize='xl' fontWeight='bold' color='text.main'>Chat</Text>
        <Flex h='full' direction='row' align='center' justify='space-between' gap={showSearchChat ? '2.5' : '6'}>
          {
            showSearchChat ?
            <InputGroup p='0'>
              <InputLeftElement h={7}>
                <IconButton
                  aria-label='search chat'
                  backgroundColor='transparent'
                  _hover={{backgroundColor:'transparent'}}
                  icon={<Icon as={BiSearch} w={5} h={5} color='text.subdued' />}
                  onClick={toggleShowSearchChat}
                  h={5}
                />
              </InputLeftElement>
              <Input type='text' placeholder='Cari' border='0' borderRadius='0.5rem' backgroundColor='snow.lightest' h='7' w='40' py='1' px='3'/>
            </InputGroup>
            : 
            <IconButton
              aria-label='search chat'
              backgroundColor='transparent'
              _hover={{backgroundColor:'transparent'}}
              icon={<Icon as={BiSearch} w={5} h={5} color='text.subdued' />}
              onClick={toggleShowSearchChat}
              minW='0'
              w={5} 
              h={5}
            />
          }
          <Menu placement='bottom-end' closeOnSelect={false} >
            <MenuButton
              as={IconButton}
              aria-label='Options'
              icon={
                <Icon as={BiSlider} w={5} h={5} color='text.subdued' />
              }
              backgroundColor='transparent'
              _hover={{backgroundColor:'transparent'}}
              _active={{backgroundColor:'transparent'}}
            />
            <MenuList p='0' minW='filterMenuMin'>
              {filterOptions.map((option) => (
                <MenuItem 
                  key={option.id}
                  _hover={{backgroundColor:'transparent'}}
                  _focus={{backgroundColor:'transparent'}}
                  h='10'
                  borderBottom='1px solid'
                  borderBottomColor='snow.lighter'
                >
                  <Checkbox
                    isChecked={selectedFilter.includes(option.id)}
                    onChange={() => toggleSelection(option)}
                  >
                    <Text fontSize='xs' fontWeight='medium' color='text.main'>{option.label}</Text>
                  </Checkbox>
                </MenuItem>
              ))}
              <MenuItem 
                key={5}
                _hover={{backgroundColor:'transparent'}}
                _focus={{backgroundColor:'transparent'}}
                h='10'
                onClick={() => selectAll()}
              >
                <Text fontSize='xs' fontWeight='medium' color='blue.main'>Pilih semua</Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Tabs isLazy onChange={(index) => toggleTab(index)} h='underTopbar' >
        <TabList h='16' borderBottomWidth='3px'>
          <Tab>
            <Flex direction='row' gap='2' align='center'>
              <Text fontSize='sm' fontWeight={tabIndex === 0? 'bold' : 'semibold'} color={tabIndex === 0? 'text.main' : 'text.disabled'}>Perlu balas</Text>
              { countUnreadMessages(needToReply) > 0 &&
                <Circle size='5' bg={tabIndex === 0? 'blue.main' : 'text.subdued'} color='white'>
                  <Text fontSize='2xs' fontWeight='normal' color='white'>{countUnreadMessages(needToReply)}</Text>
                </Circle>
              }
            </Flex>
          </Tab>
          <Tab>
            <Flex direction='row' gap='2' align='center'>
              <Text fontSize='sm' fontWeight={tabIndex === 0? 'bold' : 'semibold'} color={tabIndex === 1? 'text.main' : 'text.disabled'}>Terbalas</Text>
              { countUnreadMessages(replied) > 0 &&
                <Circle size='5' bg={tabIndex === 0? 'blue.main' : 'text.subdued'} color='white'>
                  <Text fontSize='2xs' fontWeight='normal' color='white'>{countUnreadMessages(replied)}</Text>
                </Circle>
              }
            </Flex>
          </Tab>
          <Tab flex='1'>
            <Flex direction='row' gap='2' align='center'>
              <Text fontSize='sm' fontWeight={tabIndex === 0? 'bold' : 'semibold'} color={tabIndex === 2? 'text.main' : 'text.disabled'}>Semua chat</Text>
              { countUnreadMessages(allChat) > 0 &&
                <Circle size='5' bg={tabIndex === 0? 'blue.main' : 'text.subdued'} color='white'>
                  <Text fontSize='2xs' fontWeight='normal' color='white'>{countUnreadMessages(allChat)}</Text>
                </Circle>
              }
            </Flex>
          </Tab>
        </TabList>
        <TabPanels maxH='chatOnly' overflow='scroll' >
          <TabPanel p='0'>
            <Flex w='full' direction='column'>
              { chats.map((chat, index) => (
                <ChatBox key={index} chat={chat} selectedChat={selectedChat} onClick={() => selectChat(chat.id)}/>
              ))}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}
