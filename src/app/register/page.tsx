'use client'

import React, { useState } from 'react';

import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  InputGroup,
  Image,
  HStack,
  Link,
  useDisclosure,
  FormControl,
  FormLabel,
  InputRightElement
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import TermsModal from './termsmodal';

export default function JoinOurTeam() {
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [agreed, setAgreed] = useState(false);

  const handleAgree = () => {
    setAgreed(!agreed); // Toggle the 'agreed' state
    onClose();
  };

  return (
    <Box position={'relative'} >

      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 5, lg: 10 }}
        py={{ base: 10, sm: 20, lg: 32 }}>

        <Stack
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
          align={'center'}
        >

          <Image src="./register/image.svg" alt="Mind Mate"/>

        </Stack>

        <Stack
          bg="primary.700"
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'} color="black">
              Sign up
            </Heading>
            <Text fontSize={'lg'} color="Black">
              to enjoy all of our cool features ✌️
            </Text>

          </Stack>
          <Box as={'form'} mt={10}>
            <Box
              rounded={'lg'}
              bg="primary.700"
              boxShadow={'lg'}
              color="black"
              p={8}>
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" background="gray" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" background="gray" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" background="gray" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input background="gray" type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    fontFamily={'heading'}
                    bg={'blue.200'}
                    color={'blue.800'}
                    onClick={onOpen}>
                    Terms and Conditions
                  </Button>
                  <TermsModal
                    onAgree={handleAgree}
                    isOpen={isOpen}
                    onClose={onClose}
                  />
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    isDisabled={!agreed}
                    bg={'blue.100'}
                    color={'black'}
                    _hover={{
                      bg: 'blue.600',
                    }}>
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Link href="login" color={'blue.400'}>Login</Link>
              

                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
