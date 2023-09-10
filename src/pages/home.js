import React, { useEffect, useState } from 'react'
import { Box, Center, Checkbox, Circle, Flex, HStack, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Tab, TabList, TabPanel, TabPanels, Tabs, Text, } from '@chakra-ui/react'
import Tag from '../component/tag';
import { BiSearch, BiSlider } from "react-icons/bi";
import { MdInfoOutline, MdClose } from "react-icons/md";
import { CgAttachment } from "react-icons/cg";
import { allChat, needToReply, replied } from '../data/chat';
import { getChatById } from '../data/chatDetail';
import { convertDate } from '../utils/convertDate';

export default function Home() {
  const filterOptions = [
    { id: 1, label: 'Shopee - Beauty Lovers' },
    { id: 2, label: 'Shopee - Makeupucino' },
    { id: 3, label: 'Tokopedia - Beauty Lovers' },
    { id: 4, label: 'Tokopedia - Makeupucino' },
  ];
  const [tabIndex, setTabIndex] = useState(0)
  const [chats, setChats] = useState(needToReply)
  const [selectedChat, setSelectedChat] = useState(null)
  const [chatDetail, setChatDetail] = useState(null)
  const [showChatDetail, setShowChatDetail] = useState(false)
  const [userId, setUserId] = useState(null)
  const [showSearchChat, setShowSearchChat] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState([]);

  const toggleShowSearchChat = () => {
    setShowSearchChat(!showSearchChat)
  }

  const toggleShowChatDetail = () => {
    setShowChatDetail(!showChatDetail)
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

  const selectChat = (id) => {
    setSelectedChat(id)
    setChatDetail(getChatById(id))
    setShowChatDetail(false)
  };

  const toggleTab = (id) => {
    setTabIndex(id)
    setSelectedChat(null)
    setChatDetail(null)
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

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    if(userId) setUserId(userId)
  }, []);

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
                    onClick={() => selectChat(chat.id)}
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
      { selectedChat != null ?
        <Flex w='chatWindow' h='full' backgroundColor='white' direction='row' align='flex-start' justify='flex-start'>
          <Flex w={showChatDetail ? 'chatWindowOnly' : 'full'} h='full' direction='column' align='flex-start' justify='flex-start'>
            <Flex w='full' h='topbar' backgroundColor='snow.lightest' align='center' justify='space-between' px='5'>
              <Text fontSize='md' fontWeight='bold' color='text.main'>{chatDetail.user.name}</Text>
              <Flex align='center' gap='5'>
                <IconButton
                  aria-label='search chat'
                  backgroundColor='transparent'
                  _hover={{backgroundColor:'transparent'}}
                  icon={<Icon as={BiSearch} w={5} h={5} color='text.subdued' />}
                  minW='0'
                  w={5} 
                  h={5}
                />
                <IconButton
                  aria-label='open chat detail'
                  backgroundColor='transparent'
                  _hover={{backgroundColor:'transparent'}}
                  icon={<Icon as={MdInfoOutline} w={5} h={5} color='text.subdued' />}
                  onClick={toggleShowChatDetail}
                  minW='0'
                  w={5} 
                  h={5}
                />
              </Flex>
            </Flex>
            <Flex w='full' h='chatContainer' maxH='chatContainer' backgroundColor='blue.surface' direction='column' align='flex-start' justify='flex-end' pl='12' pr='10' py='7.125rem' gap='3.75rem' overflow='scroll'>
              {chatDetail.chats.map((chat, index) => (
                <>
                { chat.id === userId ? 
                  <Flex w='half' alignSelf='flex-end' align='flex-end' justify='flex-end' gap='0.5' direction='column'>
                    <Box minW='17.75rem' px='3' py='2.5' bgColor='blue.main' borderRadius='1.5rem 1.5rem 0 1.5rem'>
                      <Text fontSize='sm' fontWeight='normal' color='white'>{chat.chat}</Text>
                    </Box>
                    <Text fontSize='xs' fontWeight='normal' color='zendesk.lightOnBackgroundDetail' mr='3'>{chat.detail}</Text>
                  </Flex>
                  :
                  <Flex w='half' alignSelf='flex-start' align='flex-start' justify='flex-start' gap='0.5' direction='column'>
                    <Text fontSize='xs' fontWeight='normal' color='zendesk.lightOnBackgroundDetail' ml='12'>{chatDetail.user.name}</Text>
                    <Flex w='full' gap='1'>
                      <Image
                        borderRadius='full'
                        boxSize='8'
                        src={chatDetail.user.avatar}
                        alt={chatDetail.user.name}
                        mt='2'
                      />
                      <Box px='3' py='2.5' bgColor='white' borderRadius='1.5rem 1.5rem 1.5rem 0'>
                        <Text fontSize='sm' fontWeight='normal' color='black'>{chat.chat}</Text>
                      </Box>
                    </Flex>
                    <Text fontSize='xs' fontWeight='normal' color='zendesk.lightOnBackgroundDetail' ml='12'>{chat.detail}</Text>
                  </Flex>
                }
                </>
              ))}
            </Flex >
            <Flex w='full' h='16' backgroundColor='white' align='center' gap='2.5' px='0.375rem'>
              <IconButton
                aria-label='Attach'
                backgroundColor='transparent'
                _hover={{backgroundColor:'transparent'}}
                icon={<Icon as={CgAttachment} w={6} h={6} color='text.subdued' />}
              />
              <Input type='text' placeholder='Type a message' border='1px solid' borderColor='zendesk.lightOnBackground' borderRadius='1.25rem' backgroundColor='white' h='10' w='full'/>
            </Flex >
          </Flex>
          { showChatDetail && 
          <Flex w='chatDetail' h='full' backgroundColor='white' direction='column' align='flex-start' justify='flex-start' px='4' py='6' gap='1.3125rem'>
            <IconButton
              aria-label='close chat detail'
              backgroundColor='transparent'
              _hover={{backgroundColor:'transparent'}}
              icon={<Icon as={MdClose} w={5} h={5} color='text.subdued' />}
              onClick={toggleShowChatDetail}
              minW='0'
              w={5} 
              h={5}
              alignSelf='flex-end'
              gap='1.3125rem'
            />
            <Flex w='full' direction='column' align='center' justify='center' gap='2.125rem'>
              <Image
                borderRadius='full'
                boxSize='20'
                src={chatDetail.user.avatar}
                alt={chatDetail.user.name}
              />
              <Flex w='full' direction='column' align='center' justifyContent='center' gap='0.5625rem' mt='1'>
                <Text fontSize='md' fontWeight='semibold' color='text.main'>{chatDetail.user.name}</Text>
                <Text fontSize='xs' fontWeight='medium' color='text.subdued'>{chatDetail.user.shop.name}</Text>
              </Flex>
              <Tag icon={chatDetail.user.shop.icon} tag={chatDetail.user.tag}></Tag>
            </Flex>
            <Flex w='full' direction='column' align='flex-start' justify='flex-start' gap='0.75rem' mt='2.4375rem'>
              <Text fontSize='sm' fontWeight='semibold' color='text.main'>About conversation</Text>
              <HStack mt='0.5' spacing='3'>
                <Text fontSize='xs' fontWeight='medium' color='text.main'>Created</Text>
                <Text fontSize='xs' fontWeight='medium' color='text.subdued'>{convertDate(chatDetail.createdTime)}</Text>
              </HStack>
              <HStack spacing='3'>
                <Text fontSize='xs' fontWeight='medium' color='text.main'>Created</Text>
                <Text fontSize='xs' fontWeight='medium' color='text.subdued'>{convertDate(chatDetail.createdTime)}</Text>
              </HStack>
            </Flex>
          </Flex>
          }
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