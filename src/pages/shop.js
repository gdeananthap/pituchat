import React from 'react'
import { Button, Flex, Icon, SimpleGrid, Text, } from '@chakra-ui/react'
import { BiPlus } from "react-icons/bi";
import { shopList } from '../data/shop';
import ShopItem from '../component/shopItem';

export default function Shop() {
  return (
    <Flex
      w='nextSidebar'
      h='full'
      padding='1.375rem 2rem'
      backgroundColor='snow.lightest'
      direction='column'
      gap='1.375rem'
    >
      <Text fontSize='md' fontWeight='bold' color='text.main'>Shop</Text>
      <SimpleGrid columns={[1, 2, null, 3, 6]} spacing={6}>
        { shopList.map((shop, index) => (
          <ShopItem key={index} shop={shop} />
        ))}
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
          <Button
            h='12'
            w='full'
            gap='2'
            borderRadius='0.5rem'
            align='center'
            justify='center'
            cursor='pointer'
            borderColor='blue.main !important'
            backgroundColor='white'
            border='1px solid'
            _hover={{
              borderColor:'blue.main',
              backgroundColor: 'blue.surface'
            }}
          >
            <Icon as={BiPlus} w={6} h={6} color='blue.main' />
            <Text fontSize='sm' fontWeight='normal' color='blue.main'>Tambah toko</Text>
          </Button>
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}