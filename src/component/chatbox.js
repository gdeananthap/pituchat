import { Center, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { FaCheck} from "react-icons/fa";
import React from 'react'
import Tag from './tag';

export default function ChatBox({chat, selectedChat, onClick}) {

  const isOutboundChat = (chat) => {
    return chat.id === localStorage.getItem('userId')
  }

  return (
    <Flex
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
      onClick={onClick}
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
        <Flex w='full' align='center' gap='1' >
          { isOutboundChat(chat.chats[chat.chats.length-1]) &&
            <Icon as={FaCheck} w={3} h={3} color='text.subdued' />
          }
          <Text fontSize='xs' fontWeight='normal' color='text.subdued' flex='1' maxW='maxChatLabel' noOfLines={1}>{chat.chats[chat.chats.length-1].chat}</Text>
          { chat.unread > 0 &&
            <Center h='5' px='0.4375rem' bg='blue.main' color='white' borderRadius='0.625rem' ml='2'>
              <Text fontSize='2xs' fontWeight='normal' color='white'>{chat.unread}</Text>
            </Center>
          }
        </Flex>
        <Tag icon={chat.user.shop.icon} tag={chat.user.tag}></Tag>
      </Flex>
    </Flex>
  )
}
