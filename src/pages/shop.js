import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Container, Flex, HStack, Icon, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { IoChevronDownOutline } from "react-icons/io5";
import { BiMessageSquareDots, BiSolidMessageSquareDots, BiSolidStoreAlt, BiStoreAlt, BiCheck, BiPlus } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import Selector from '../component/selector';
import { shopList } from '../data/shop';
import Tag from '../component/tag';

export default function Shop() {
  const location = useLocation()
  const navigate = useNavigate()
  const [menu, setMenu] = useState('/')
  useEffect(() => {
    location && location.pathname? setMenu(location.pathname) : setMenu('/')
  }, [location]);

  return (
    <Container h='fullHeight' maxW='container.3xl' bg='blue.surface' padding='0'>
      <Flex 
        h='topbar' 
        bg='white'
        borderBottom='1px solid'
        borderBottomColor='snow.lighter'
        alignItems='center'
        justifyContent='space-between'
        pl='1.375rem'
        pr='8'
      >
        <Image h='10' src='logoText.png'></Image>
        <HStack spacing='3'>
          <Image h='8' src='avatar3.png' borderRadius='0.5rem'></Image>
          <Icon as={IoChevronDownOutline} w={5} h={5} color='text.subdued' />
        </HStack>
      </Flex>
      <Flex w='full' h='underTopbar'>
        <Flex
          w='sidebar'
          h='full'
          bg='white'
          direction='column'
          borderRight='1px solid'
          borderRightColor='snow.lighter'
          justifyContent='space-between'
        >
          <VStack w='full'>
            <Flex 
              h='24' 
              w='full'
              direction='column'
              justify='center'
              align='center'
              gap='2'
              backgroundColor={ menu==='/' ? 'capri.light' : 'white'}
              position='relative'
              onClick={() => navigate('/')}
              cursor='pointer'
            >
              {menu==='/' ? <Selector /> : <></> }
              <Icon as={ menu==='/'? BiSolidMessageSquareDots : BiMessageSquareDots } w={5} h={5} color='blue.main'/>
              <Text fontSize='sm' fontWeight='bold' color='blue.main'>Chat</Text>            
            </Flex>
            <Flex 
              h='24' 
              w='full'
              direction='column'
              justify='center'
              align='center'
              gap='2'
              backgroundColor={ menu==='/shop' ? 'capri.light' : 'white'}
              position='relative'
              onClick={() => navigate('/shop')}
              cursor='pointer'
            >
              {menu==='/shop' ? <Selector /> : <></> }
              <Icon as={menu==='/shop'? BiSolidStoreAlt : BiStoreAlt} w={5} h={5} color='blue.main'/>
              <Text fontSize='sm' fontWeight='bold' color='blue.main'>Toko</Text> 
            </Flex>
          </VStack>
          <Flex 
            h='24' 
            w='full'
            direction='column'
            justify='center'
            align='center'
            gap='2'
            onClick={() => navigate('/login')}
            cursor='pointer'
          >
            <Icon as={ MdLogout } w={5} h={5} color='blue.main'/>
            <Text fontSize='sm' fontWeight='bold' color='blue.main'>Keluar</Text>            
          </Flex>
        </Flex>
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
              <Flex
                key={index}
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
      </Flex>
    </Container>
  )
}