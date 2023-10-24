'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Login
          </Heading>
          <Text fontSize={'lg'} color="white">
            to enjoy all of our cool features
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg="black"
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={6} >
            <HStack>
              <Box>
                <FormControl id="username" isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>

                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Box>

            </HStack>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Login
              </Button>
            </Stack>

          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
};

export default LoginPage;
