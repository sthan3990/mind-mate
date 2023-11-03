"use client";

import React from 'react';
import Link  from 'next/link';
import { useRouter } from "next/navigation";
import {
  Flex,
  Text,
  Button,
  Image,
  Box,
  Divider,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal
} from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { fonts } from "@/theme/fonts"; 
import { useUser } from './../contexts/UserContext';


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
  const { userId, logout } = useUser();
  const router = useRouter() as any;

  const logoStyle = {
    width: ["40px", "60px", "70px", "60px"],
    height: ["40px", "60px", "70px", "80px"],
    zIndex: 2,
    marginLeft: '15px' 
  };

  const mindMateStyle = {
    color: 'white',
    fontFamily: fonts.heading,
    fontWeight: '600',
    wordWrap: 'break-word',
    marginLeft: '25px',
    display: ['none', 'block', 'block', 'block'],
    fontSize: ["0em", "1em", "1em", "2em"], 
  };  
  
  const verticalLineStyle = {
    borderLeft: '6px solid',
    borderColor: '#15193B',
    alignSelf: 'stretch',
    mx: 20,
    marginLeft: ['10px', '-20px', '-40px', '-50px'],
    display: ['none', 'block', 'block', 'block']
};

const linkStyle = {
    color: "white",
    mx: [2, 5, 6, 7], 
    fontSize: ["0.8em", "1em", "1.2em", "1.5em"],
    ml: [2, 8, 20] 
};

const linkTab = {
    fontWeight: "bold",
    color: "white",
    mx: [2, 5, 6, 7], 
    fontSize: ["0.8em", "1em", "1.2em", "1.5em"],
    ml: [2, 8, 20] 
};

  const accountButtonStyle = {
    backgroundColor: "#FE8F55E5",
    width: "10%",
    height: "53px",
    margin: 0,
    marginRight: '25px',
    lineHeight: "normal",
    fontFamily: fonts.heading,
    fontSize: ["0.8em", "0.9em", "1em", "1.3em"],
    boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
  };


  return (
    <ChakraProvider theme={theme}>
      <Flex direction="row" align="center" p={1} bg="#2D3258" boxShadow="sm" justifyContent="space-between">

        {/* 1. Logo and MindMate Text Section */}
        <Flex alignItems="center">
          <Image src="./logo.svg" alt="Logo" sx={logoStyle} />
          <Text sx={mindMateStyle} ml={20}>MindMate</Text>
        </Flex>

        {/* 2. Vertical Line Section */}
        <Box sx={ verticalLineStyle }></Box>

        {/* 3. Text Section */}
        <Stack direction="row" spacing={5} align="flex-start">
          <Link href="/journal">
            <Text sx={router.pathname === '/journal' ? linkTab : linkStyle}>Guided Journal</Text>
          </Link>
          <Link href="/chatbot">
            <Text sx={router.pathname === '/chatbot' ? linkTab : linkStyle}>CBT Chatbot</Text>
          </Link>
          <Link href="/progress-report">
            <Text sx={router.pathname === '/progress-report' ? linkTab : linkStyle}>Progress Report</Text>
          </Link>
        </Stack>


         {/* 4. Account Section */}
        <Menu>
          {!userId ? (
            <MenuButton as={Button} borderRadius="550px" sx={accountButtonStyle}>
              Login
            </MenuButton>
          ) : (
            <>
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
                    >
                      Settings
                    </MenuItem>
                  </Link>
                  <Divider orientation="horizontal" />
                  <MenuItem
                    onClick={logout}
                    sx={{
                      _hover: { background: "white", color: "#FBC1AA" },
                      _active: { bg: "white", color: "#FBC1AA" }
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Portal>
            </>
          )}
        </Menu>

      </Flex>
    </ChakraProvider>
  );
}

export default Navbar;




