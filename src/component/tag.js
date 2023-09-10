import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Tag(props) {
  return (
    <Flex
      backgroundColor={props.tag.color}
      px='2'
      h='5'
      borderRadius='0.25rem'
      gap='1'
      align='center'
      justifyContent='center'
    >
      <Image h='3' src={props.icon}></Image>
      <Text fontSize='2xs' fontWeight='medium' color='text.main'>{props.tag.text}</Text>
    </Flex>
  )
}
