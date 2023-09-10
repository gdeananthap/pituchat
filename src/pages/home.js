import React, { useState } from 'react'
import { Center, Checkbox, Circle, Flex, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Tab, TabList, TabPanel, TabPanels, Tabs, Text, } from '@chakra-ui/react'
import { BiSearch, BiSlider } from "react-icons/bi";
import { allChat, needToReply, replied } from '../data/chat';
import Tag from '../component/tag';

export default function Home() {
  const filterOptions = [
    { id: 1, label: 'Shopee - Beauty Lovers' },
    { id: 2, label: 'Shopee - Makeupucino' },
    { id: 3, label: 'Tokopedia - Beauty Lovers' },
    { id: 4, label: 'Tokopedia - Makeupucino' },
  ];
  const [tabIndex, setTabIndex] = useState(0)
  const [chats, setChats] = useState(needToReply)
  const [selectedChat, setSelectedChat] = useState()

  const [showSearchChat, setShowSearchChat] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState([]);

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

  const toggleTab = (id) => {
    setTabIndex(id)
    setSelectedChat()
    if(id===0){
      setChats(needToReply)
    }else if(id===1){
      setChats(replied)
    }else{
      setChats(allChat)
    }
  };

  const countUnreadMessages = (messages) => {
    return messages.reduce((totalUnread, message) => totalUnread + message.unread, 0);
  };

  return (
    <Flex w='nextSidebar' h='full' backgroundColor='white'>
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
                <Input type='email' placeholder='Cari' border='0' borderRadius='0.5rem' backgroundColor='snow.lightest' h='7' w='40' py='1' px='3'/>
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
                  <IconButton
                    aria-label='filter'
                    backgroundColor='transparent'
                    _hover={{backgroundColor:'transparent'}}
                    _active={{backgroundColor:'transparent'}}
                    icon={<Icon as={BiSlider} w={5} h={5} color='text.subdued' />}
                  />
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
                  <Flex
                    key={index}
                    w='full'
                    gap='3'
                    px='4'
                    py='6'
                    backgroundColor={selectedChat === chat.id ? 'dark.4' : 'white'}
                    align='flex-start'
                    justify='flex-start'
                    borderBottom='1px solid'
                    borderBottomColor='snow.lighter'
                    cursor='pointer'
                    onClick={() => setSelectedChat(chat.id)}
                  >
                    <Image
                      borderRadius='full'
                      boxSize='10'
                      src={chat.user.avatar}
                      alt={chat.user.name}
                    />
                    <Flex w='full' direction='column' align='flex-start' justify='flex-start' gap='2.5'>
                      <Flex w='full' align='center' gap='3' >
                        <Text fontSize='sm' fontWeight='bold' color='text.main' flex='1' maxW='maxChatLabel' noOfLines={1}>{chat.user.name}</Text>
                        <Text fontSize='2xs' fontWeight='medium' color='text.subdued'>{chat.time}</Text>
                      </Flex>
                      <Flex w='full' align='center' gap='3' >
                        <Text fontSize='xs' fontWeight='normal' color='text.subdued' flex='1' maxW='maxChatLabel' noOfLines={1}>{chat.preview}</Text>
                        { chat.unread > 0 &&
                          <Center h='5' px='0.4375rem' bg={tabIndex === 0? 'blue.main' : 'text.subdued'} color='white' borderRadius='0.625rem'>
                            <Text fontSize='2xs' fontWeight='normal' color='white'>{chat.unread}</Text>
                          </Center>
                        }
                      </Flex>
                      <Tag icon={chat.shop.icon} tag={chat.shop.tag}></Tag>
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
      { selectedChat ?
        <Flex w='chatWindow' h='full' backgroundColor='blue.surface' direction='column' align='flex-start' justify='flex-start' >
        </Flex> 
        : 
        <Flex w='chatWindow' h='full' backgroundColor='snow.lightest' direction='column' align='center' justify='center' gap='10'>
          <Image w='17.25rem' src={'noChat.png'} alt={'No Chat Chosen'}/>
          <Flex direction='column' gap='0.6875rem' align='center' justifyContent='center'>
            <Text fontSize='md' fontWeight='normal' color='text.main'>Tidak ada pesan terpilih</Text>
            <Text fontSize='md' fontWeight='bold' color='text.main'>Pilih pesan untuk dibaca</Text>
          </Flex>
        </Flex>
      }

    </Flex>
  )
}