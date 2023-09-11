import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export default function OutboundMessage({chat}) {
  return (
    <Flex w='half' alignSelf='flex-end' align='flex-end' justify='flex-end' gap='0.5' direction='column'>
      <Box minW='17.75rem' px='3' py='2.5' bgColor='blue.main' borderRadius='1.5rem 1.5rem 0 1.5rem'>
        <Text fontSize='sm' fontWeight='normal' color='white'>{chat.chat}</Text>
      </Box>
      <Text fontSize='xs' fontWeight='normal' color='zendesk.lightOnBackgroundDetail' mr='3'>{chat.detail}</Text>
    </Flex>
  )
}
