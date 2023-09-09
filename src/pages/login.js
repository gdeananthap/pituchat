import React, { useState } from 'react'
import { Button, Center, Container, Flex, FormControl, FormLabel, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightElement, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { IoMailSharp, IoEye } from "react-icons/io5";
import { RiLockFill } from "react-icons/ri";
import { BiSolidHide } from "react-icons/bi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  return (
    <Container h='fullHeight' maxW='container.3xl' bg='blue.surface' padding='0' >
      <SimpleGrid columns={2} bg='white' height='full'>
        <Image boxSize='full' objectFit='cover' src='loginbackground.png'/>
        <Center height='full'>
          <Flex align='flex-start' direction='column' w='422px' gap='4'>
            <Image boxSize='72px' src='logo.png'></Image>
            <VStack spacing='3' align='flex-start'>
              <Text fontSize='3xl' fontWeight='bold' color='text.main'>Login ke akunmu</Text>
              <Text fontSize='md' fontWeight='normal' color='text.subdued'>Masuk akun untuk menggunakan PituChat</Text>
            </VStack>
            <VStack w='full' spacing='6' mt='12'>
              <FormControl>
                <FormLabel fontSize='sm' fontWeight='normal' color='text.main' m='0' mb='4px'>Email</FormLabel>
                <InputGroup >
                  <InputLeftElement pointerEvents='none'>
                    <Icon as={IoMailSharp} w={5} h={5} color='text.subdued' />
                  </InputLeftElement>
                  <Input type='email' placeholder='Placeholder text' border='1px solid' borderColor='dark.20' borderRadius='0.5rem'/>
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel fontSize='sm' fontWeight='normal' color='text.main' m='0' mb='4px'>Password</FormLabel>
                <InputGroup >
                  <InputLeftElement pointerEvents='none'>
                    <Icon as={RiLockFill} w={5} h={5} color='text.subdued' />
                  </InputLeftElement>
                  <Input type={showPassword? 'text' : 'password'} placeholder='Password' border='1px solid' borderColor='dark.20' borderRadius='0.5rem'/>
                  <InputRightElement>
                    <IconButton
                      aria-label='show hide password'
                      backgroundColor='transparent'
                      _hover={{backgroundColor:'transparent'}}
                      icon={showPassword? 
                        <Icon as={BiSolidHide} w={5} h={5} color='text.subdued' /> :
                        <Icon as={IoEye} w={5} h={5} color='text.subdued' />
                      }
                      onClick={toggleShowPassword}
                    />
                  </InputRightElement>
                </InputGroup>
                <Text fontSize='sm' fontWeight='normal' color='text.disabled' float='right' mt='0.5rem'>Lupa password?</Text>
              </FormControl>
            </VStack>
            <Button 
              w='full' 
              h='2.75rem' 
              color='white' 
              backgroundColor='blue.main'
              _hover={{backgroundColor:'blue.main'}}
              mt='2'
            >
              Masuk
            </Button>
          </Flex>
        </Center>
      </SimpleGrid>
    </Container>
  )
}
