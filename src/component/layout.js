import React, { useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Container, Flex, HStack, Icon, Image, Text, VStack } from '@chakra-ui/react'
import { IoChevronDownOutline } from "react-icons/io5";
import { BiMessageSquareDots, BiSolidMessageSquareDots, BiSolidStoreAlt, BiStoreAlt } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import Selector from '../component/selector';
export default function Layout() {
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
        <Outlet />
      </Flex>
    </Container>
  )
}