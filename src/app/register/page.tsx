"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ValidateEmail } from "../helper/validateEmail";
import { fonts } from "@/theme/fonts";

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
  const leftSideStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", 
    position: "relative",
    backgroundColor: "#f9f8f8",
    width: "100%",
    height: "832px",
    margin: 0,
    padding: 0,
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: ["50%", "60%", "70%", "10%"],
    height: ["41.02px", "49.224px", "57.428px", "82.04px"],
    paddingTop: "20px",
    paddingLeft: "20px",
  };
  
  const mainImageStyle = {
    maxWidth: ["90%", "92%", "94%", "96%"],
    maxHeight: ["700px", "750px", "780px", "800px"],
    margin: "0 auto",
  };

  const textStyle = {
    position: "relative",
    fontSize: "40px",
    fontWeight: 600,
    fontFamily: fonts.heading, 
    textAlign: "left",
    marginLeft: "20px",
    color: "black",
  };
  

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
      <SimpleGrid columns={2} spacing={0.1} w="full">
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
        <Stack
          bg="white"
          color="black"
        >
        <Box p={{ base: 4, md: 6, lg: 8}}>
          <Stack align={"center"} spacing={6}>
            <Heading fontSize={"4xl"} fontFamily={fonts.heading}>Create an Account  👋</Heading>
            <Box as={"form"} mt={10} w="full">
              <Stack spacing={4}>
                <HStack spacing={4}>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      type="text"
                      onChange={(event) => setFName(event.target.value)}
                    />
                  </FormControl>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      onChange={(event) => setLName(event.target.value)}
                    />
                  </FormControl>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button fontFamily={"heading"} bg={"blue.200"} color={"blue.800"} onClick={onOpen}>
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
                    bg={"blue.100"}
                    color={"black"}
                    _hover={{ bg: "blue.600" }}
                    onClick={() => createAccount(fName, lName, email, password)}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link href="/login" color={"blue.400"}>
                      Login
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Box>
        </Stack>
      </SimpleGrid>
  );
}