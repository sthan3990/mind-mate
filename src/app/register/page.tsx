"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ValidateEmail } from "../helper/validateEmail";
import { fonts } from "@/theme/fonts";
import { Checkbox } from "@chakra-ui/react";
import * as styles from "../styles/registerStyle";


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
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import TermsModal from "./termsmodal";

export default function JoinOurTeam() {
  const leftSideStyle = styles.leftSideStyle;
  const logoStyle = styles.logoStyle;
  const mainImageStyle = styles.mainImageStyle;
  const textStyle = styles.textStyle;
  const headingStyle = styles.headingStyle;
  const rectangleIconStyle = styles.rectangleIconStyle;
  const registerButtonStyle = styles.registerButtonStyle;
  const loginButtonStyle = styles.loginButtonStyle;
  const orTextStyle = styles.orTextStyle;
  const lineStyle = styles.lineStyle;

  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [agreed, setAgreed] = useState(false);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAgree = () => {
    setAgreed(!agreed); // Toggle the 'agreed' state
    onClose();
  };

  const createAccount = (
    fName: string,
    lName: string,
    email: string,
    password: string
  ) => {
    if (ValidateEmail(email)) {
      axios
        .post("/api/users", { fName, lName, email, password })
        .then((res) => {
          console.log(res);
          push("/login");
        });
    } else {
      alert("Invalid email address!");
    }
  };

  return (
    <SimpleGrid columns={[1, 1, 2, 2]} spacing={0.1} w="full" minChildWidth="320px">
      <Box sx={leftSideStyle}>
        {/* Logo */}
        <Box sx={logoStyle}>
          <Image src="./logo.svg" alt="Logo" objectFit="cover" />
          <Text sx={textStyle}>MindMate</Text>
        </Box>
        <Box sx={mainImageStyle}>
          {/* Main Image */}
          <Image src="./register/image.svg" alt="Mind Mate" />
        </Box>
      </Box>

      {/* Right Side with Signup Form */}
      <Stack bg="white" color="black">
        <Box p={{ base: 4, md: 6, lg: 8 }}>
          <Stack spacing={12}>
            <Heading fontSize={"4xl"} fontFamily={fonts.heading} sx={headingStyle}>
              Create an Account 👋
            </Heading>

            <Box as={"form"} mt={1} w="full" px={{ base: 6, md: 8, lg: 10 }}>
              <Stack spacing={4}>
                <HStack spacing={4}>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      sx={rectangleIconStyle}
                      type="text"
                      onChange={(event) => setFName(event.target.value)}
                    />
                  </FormControl>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      sx={rectangleIconStyle}
                      type="text"
                      onChange={(event) => setLName(event.target.value)}
                    />
                  </FormControl>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    sx={rectangleIconStyle}
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      sx={rectangleIconStyle}
                      type={showPassword ? "text" : "password"}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() => setShowPassword((prevState) => !prevState)}
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Stack>
            </Box>

            <Stack spacing={5} pt={1} justifyContent="center" alignItems="center" width="100%" >
              <HStack spacing={2}>
                <Checkbox
                  colorScheme="blue"
                  isChecked={agreed}
                  onChange={handleAgree}
                />
                <Button
                  variant="link"
                  onClick={onOpen}
                >
                  Terms and Conditions
                </Button>
              </HStack>
              <TermsModal isOpen={isOpen} onClose={onClose} onAgree={handleAgree} />

              <Button
                loadingText="Submitting"
                size="lg"
                isDisabled={!agreed}
                bg={"blue.100"}
                sx={registerButtonStyle}
                onClick={() => createAccount(fName, lName, email, password)}
              >
                Register Account
              </Button>

              <HStack spacing={4} justifyContent="center" alignItems="center">
                <Box sx={lineStyle}></Box>
                <Text sx={orTextStyle}>OR</Text>
                <Box sx={lineStyle}></Box>
              </HStack>

              {/* redirects to the /login page */}
              <Button
                size="lg"
                sx={loginButtonStyle}
                onClick={() => push("/login")}
              >
                Log In
              </Button>
            </Stack>

          </Stack>
        </Box>
      </Stack>
    </SimpleGrid>
  );
}