import React from 'react'
import { Flex, Icon, IconButton, Input,Text, } from '@chakra-ui/react'
import ChatDetail from '../component/chatDetail';
import OutboundMessage from '../component/outboundMessage';
import InboundMessage from '../component/inboundMessage';
import { BiSearch,} from "react-icons/bi";
import { MdInfoOutline } from "react-icons/md";
import { CgAttachment } from "react-icons/cg";

export default function ChatWindow({chatDetail, toggleShowChatDetail, showChatDetail, userId}) {
  return (
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
              <OutboundMessage key={index} chat={chat}/> :
              <InboundMessage key={index} chat={chat} chatDetail={chatDetail} />
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
        <ChatDetail chatDetail={chatDetail} toggleShow={toggleShowChatDetail}/>
      }
    </Flex> 
  )
}
