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
  Input,
  Button,
  SimpleGrid,
  InputGroup,
  Image,
  useDisclosure,
  FormControl,
  FormLabel,
  InputRightElement,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

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

  const headingStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: ["30%", "40%", "50%", "60%"],
    height: "42px",
    marginTop: "60px",
    fontSize: ["20px", "24px", "28px", "32px"],
    maxWidth: "90%",
    alignSelf: "center",
  };

  const rectangleIconStyle = {
    backgroundColor: "#282A2F",
    color: "#8692A6",
    borderWidth: "0.5px",
    borderColor: "#8692A6",
    fontFamily: fonts.heading, 
    height: "50px",
    paddingLeft: "20px",
    paddingRight: "20px"
  };
  

  const loginButtonStyle = {
    width: "300px",
    height: "50px",
    borderRadius: "6px",
    background: "#D0A2D1",
    color: "black",
    flexShrink: 0
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

  const loginRequest = (email: string, password: string) => {
    axios.get("/api/login", { params: { email, password } }).then((res) => {
      console.log(res.data);
      if (res.data.message === "User logged in") {
        localStorage.setItem("User", res.data.userID);
      }
      refresh();
    });

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
          <Stack  spacing={12}>
            <Heading fontSize={"4xl"} fontFamily={fonts.heading} sx={headingStyle}>
              Welcome Back 👋
            </Heading>

            <Box as={"form"} mt={1} w="full" px={{ base: 6, md: 8, lg: 10 }}>
              <Stack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>

    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Login
          </Heading>
          <Text fontSize={"lg"} color="white">
            to enjoy all of our cool features
          </Text>
        </Stack>
        <Box rounded={"lg"} bg="black" boxShadow={"lg"} p={8}>
          <Stack spacing={6}>
            <HStack>
              <Box>
                <FormControl id="username" isRequired>
                  <FormLabel>Username</FormLabel>

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
