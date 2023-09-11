import { Flex, Icon, Image, Text } from '@chakra-ui/react'
import { BiCheck} from "react-icons/bi";
import React from 'react'
import Tag from './tag';

export default function ShopItem({shop}) {
  return (
    <Flex
      w='full'
      h='12.75rem'
      direction='column'
      gap='6'
      padding='6'
      backgroundColor='white'
      borderRadius='0.5rem'
      align='center'
      justify='center'
    >
      <Image h='10' src={shop.icon.large}></Image>
      <Tag icon={shop.icon.small} tag={shop.tag}></Tag>
      <Flex
        h='12'
        w='full'
        bgColor='blue.main40'
        gap='2'
        borderRadius='0.5rem'
        align='center'
        justify='center'
      >
        <Icon as={BiCheck} w={6} h={6} color='white' />
        <Text fontSize='sm' fontWeight='normal' color='white'>Tersambung</Text>
      </Flex>
    </Flex>
  )
}
