import React from 'react'
import { Center, Container, Flex, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'

export default function Error() {

  return (
    <Container h='fullHeight' maxW='container.3xl' bg='blue.surface' padding='0' >
      <SimpleGrid columns={2} bg='white' height='full'>
        <Image boxSize='full' objectFit='cover' src='loginbackground.png'/>
        <Center height='full'>
          <Flex align='flex-start' direction='column' w='422px' gap='4'>
            <VStack spacing='3' align='flex-start'>
              <Text fontSize='5xl' fontWeight='bold' color='text.main'>Error 404</Text>
              <Text fontSize='3xl' fontWeight='normal' color='text.subdued'>Page Not Found</Text>
            </VStack>
          </Flex>
        </Center>
      </SimpleGrid>
    </Container>
  )
}
