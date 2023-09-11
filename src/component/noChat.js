import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function NoChat() {
  return (
    <Flex w='chatWindow' h='full' backgroundColor='snow.lightest' direction='column' align='center' justify='center' gap='10'>
      <Image w='17.25rem' src={'nochat.png'} alt={'No Chat Chosen'}/>
      <Flex direction='column' gap='0.6875rem' align='center' justifyContent='center'>
        <Text fontSize='md' fontWeight='normal' color='text.main'>Tidak ada pesan terpilih</Text>
        <Text fontSize='md' fontWeight='bold' color='text.main'>Pilih pesan untuk dibaca</Text>
      </Flex>
    </Flex>
  )
}
