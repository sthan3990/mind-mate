"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fonts } from "@/theme/fonts";
import { useUser } from "../contexts/UserContext"; //for the context
import * as styles from "../styles/loginStyle";

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
  //define styles here
  const leftSideStyle = styles.leftSideStyle;
  const logoStyle = styles.logoStyle;
  const mainImageStyle = styles.mainImageStyle;
  const textStyle = styles.textStyle;
  const headingStyle = styles.headingStyle;
  const rectangleIconStyle = styles.rectangleIconStyle;
  const loginButtonStyle = styles.loginButtonStyle;

  const { push, refresh } = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, userId } = useUser(); // for the context
  const [statusMessage, setStatusMessage] = useState<string>("");

  const router = useRouter();

  const loginRequest = (email: string, password: string) => {
    login(email, password);
  };

  useEffect(() => {
    const email = localStorage.getItem("User") || "";

    if (email) {
      push("/");
    }
    else {
      setStatusMessage("Login failed");
    }
  }, [loginRequest]);

  return (
    <SimpleGrid
      columns={[1, 1, 2, 2]}
      spacing={0.1}
      w="full"
      minChildWidth="320px"
    >
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
            <Heading
              fontSize={"4xl"}
              fontFamily={fonts.heading}
              sx={headingStyle}
            >
              Welcome Back 👋
            </Heading>

            <Box as={"form"} mt={1} w="full" px={{ base: 6, md: 8, lg: 10 }}>
              <Stack spacing={4}>
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
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Stack>
            </Box>

            <Stack
              spacing={5}
              pt={1}
              justifyContent="center"
              alignItems="center"
              width="100%"
            >
              {/* redirects to the /login page */}
              <Button
                size="lg"
                sx={loginButtonStyle}
                onClick={() => loginRequest(email, password)}
              >
                Log In
              </Button>

              {statusMessage}

            </Stack>
          </Stack>
        </Box>
      </Stack>
    </SimpleGrid>
  );
}
