"use client";

import React from 'react';
import Link  from 'next/link';
import {
  Flex,
  Text,
  Button,
  Image,
  Box,
  Divider,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal
} from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { fonts } from "@/theme/fonts"; 


const theme = extendTheme({
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em"
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold"
      }
    }
  }
});

const Navbar = () => {
  const logoStyle = {
    width: ["80px", "90px", "100px", "120px"],
    height: ["80px", "90px", "100px", "120px"],
    position: "absolute",
    top: "10px",
    left: ["10px", "20px", "30px", "50px"],
    zIndex: 2 
  };

  const linkStyle = {
    fontWeight: "bold",
    color: "gray.600",
    mx: [2, 5, 6, 7], 
    fontSize: ["0.8em", "1em", "1.2em", "1.5em"],
    ml: [4, 10, 23]
  };

  const accountButtonStyle = {
    backgroundColor: "rgba(254, 143, 85, 0.5)",
    width: "10%",
    height: "53px",
    margin: 0,
    lineHeight: "normal",
    fontFamily: fonts.heading,
    fontSize: ["0.8em", "0.9em", "1em", "1.3em"],
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
  };

  const dividerStyle = {
    mt: 4,
    bgGradient: "linear(to-r, #D0A2D1, #F9884AAD)",
    height: "5px",
    width: "100%",
    border: "none",
    boxSizing: "border-box",
  };

  const chatStyle = {
    color: '#FF6863',
    fontSize: ["32px", "48px", "64px", "64px"],
    fontFamily: fonts.alternative,
    fontWeight: '700',
    letterSpacing: 3.20,
    wordWrap: 'break-word',
    display: 'inline'
  };

  const dotStyle = {
    color: '#15193B',
    fontSize: ["32px", "48px", "64px", "64px"],
    fontFamily: fonts.alternative,
    fontWeight: '700',
    letterSpacing: 3.20,
    wordWrap: 'break-word',
    display: 'inline',
    mx: 2
  };

  const reflectStyle = {
    color: 'rgba(255, 117.79, 42.50, 0.80)',
    fontSize: ["32px", "48px", "64px", "64px"],
    fontFamily: fonts.alternative,
    fontWeight: '700',
    letterSpacing: 3.20,
    wordWrap: 'break-word',
    display: 'inline'
  };

  const measureStyle = {
    color: '#B022AA',
    fontSize: ["32px", "48px", "64px", "64px"],
    fontFamily: fonts.alternative,
    fontWeight: '700',
    letterSpacing: 3.20,
    wordWrap: 'break-word',
    display: 'inline'
  };

  const journeyStyle = {
    color: '#15193B',
    fontSize: ["32px", "48px", "64px", "64px"],
    fontFamily: fonts.alternative,
    fontWeight: '700',
    letterSpacing: 3.20,
    wordWrap: 'break-word',
  };

  const awarenessStyle = {
    color: '#15193B',
    fontSize: ["32px", "48px", "64px", "64px"],
    fontFamily: fonts.alternative,
    fontWeight: '700',
    letterSpacing: 3.20,
    wordWrap: 'break-word',
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" align="center" p={4} bg="#F9F2FF" boxShadow="sm">
        <Flex width="100%" justify="space-between" align="center">

          {/* Logo */}
          <Box>
            <Image src="./logo.svg" alt="Logo" sx={logoStyle} />
          </Box>
          <Flex justify="center">
            <HStack>
              <Link href="/journal">
                  <Text sx={linkStyle}>Guided Journal</Text>
                </Link>
                <Link href="/chatbot">
                  <Text sx={linkStyle}>CBT Chatbot</Text>
                </Link>
                <Link href="/progress-report">
                  <Text sx={linkStyle}>Progress Report</Text>
              </Link>
            </HStack>
          </Flex>

          <Menu>
            <MenuButton as={Button} borderRadius="550px" sx={accountButtonStyle}>
              Account
            </MenuButton>
            <Portal>
              <MenuList bg="#FBC1AA" borderRadius="20px" mt={2}>
                <Link href="/settings" passHref>
                  <MenuItem
                    as="a"
                    sx={{
                      _hover: { background: "white", color: "#FBC1AA" },
                      _active: { bg: "white", color: "#FBC1AA" }
                    }}
                    onClick={() => {
                      // Handle settings action here
                    }}
                  >
                    Settings
                  </MenuItem>
                </Link>

                <Divider orientation="horizontal" />

                <Link href="/login" passHref>
                  <MenuItem
                    as="a"
                    sx={{
                      _hover: { background: "white", color: "#FBC1AA" },
                      _active: { bg: "white", color: "#FBC1AA" }
                    }}
                    onClick={() => {
                      // Handle logout action here
                    }}
                  >
                    Logout
                  </MenuItem>
                </Link>

              </MenuList>

            </Portal>
          </Menu>
        </Flex>

        <Divider sx={dividerStyle} />

        <Flex direction="column" align="center" mt={["10%", "15%", "20%", "12%"]}>
          <Flex align="center">
            <Text sx={chatStyle}>Chat</Text>
            <Text sx={dotStyle}>.</Text>
            <Text sx={reflectStyle}>Reflect</Text>
            <Text sx={dotStyle}>.</Text>
            <Text sx={measureStyle}>Measure</Text>
          </Flex>
          <Text sx={journeyStyle}>Your Three-Step Journey to</Text>
          <Text sx={awarenessStyle}>Mindful Awareness</Text>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default Navbar;

