import { Flex, HStack, Icon, IconButton, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { MdClose } from "react-icons/md";
import Tag from './tag';
import { convertDate } from '../utils/convertDate';

export default function ChatDetail({chatDetail, toggleShow}) {
  return (
    <Flex w='chatDetail' h='full' backgroundColor='white' direction='column' align='flex-start' justify='flex-start' px='4' py='6' gap='1.3125rem'>
      <IconButton
        aria-label='close chat detail'
        backgroundColor='transparent'
        _hover={{backgroundColor:'transparent'}}
        icon={<Icon as={MdClose} w={5} h={5} color='text.subdued' />}
        onClick={toggleShow}
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
        <HStack spacing='3'>
          <Text fontSize='xs' fontWeight='medium' color='text.main'>Created</Text>
          <Text fontSize='xs' fontWeight='medium' color='text.subdued'>{convertDate(chatDetail.createdTime)}</Text>
        </HStack>
      </Flex>
    </Flex>
  )
}
