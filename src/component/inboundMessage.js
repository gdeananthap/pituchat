import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function InboundMessage({chat, chatDetail}) {
  return (
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
  )
}
