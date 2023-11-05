"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
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
import { useUser } from './../contexts/UserContext';
import * as styles from '../styles/headerStyle';

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
  const pathname = usePathname();

  const logoStyle = styles.logoStyle;
  const mindMateStyle = styles.mindMateStyle;
  const verticalLineStyle = styles.verticalLineStyle;
  const linkStyle = styles.linkStyle;
  const linkTab = styles.linkTab;
  const accountButtonStyle = styles.accountButtonStyle;
  const x = false;

  console.log("patname: ", pathname);

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="row" align="center" p={1} bg="#2D3258" boxShadow="sm" justifyContent="space-between">

        {/* 1. Logo and MindMate Text Section */}
        <Flex alignItems="center">
          <Link href="/">
            <Image src="./logo.svg" alt="Logo" sx={logoStyle} />
          </Link>
          <Link href="/">
            <Text sx={mindMateStyle} mx={20}>MindMate</Text>
          </Link>
        </Flex>

        {/* 2. Vertical Line Section */}
        <Box sx={verticalLineStyle}></Box>

        {/* 3. Text Section */}
        <Stack direction="row" spacing={5} align="flex-start" mr="200">
          <Link href="/journal">
            <Text sx={pathname === '/journal' ? linkTab : linkStyle}>Guided Journal</Text>
          </Link>
          <Link href="/chatbot">
            <Text sx={pathname === '/chatbot' ? linkTab : linkStyle}>CBT Chatbot</Text>
          </Link>
          <Link href="/progress-report">
            <Text sx={pathname === '/progress-report' ? linkTab : linkStyle}>Progress Report</Text>
          </Link>
        </Stack>


        {/* 4. Account Section */}
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
                >
                  Logout
                </MenuItem>
              </Link>

            </MenuList>

          </Portal>
        </Menu>

      </Flex>
    </ChakraProvider>
  );
}

export default Navbar;




