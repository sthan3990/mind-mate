"use client";

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
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
  Portal,
  DrawerBody
} from "@chakra-ui/react";
import {
  ChakraProvider,
  extendTheme,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
  const router = useRouter() as any;

  const logoStyle = styles.logoStyle;
  const mindMateStyle = styles.mindMateStyle;
  const verticalLineStyle = styles.verticalLineStyle;
  const linkStyle = styles.linkStyle;
  const linkTab = styles.linkTab;
  const accountButtonStyle = styles.accountButtonStyle;
  const logoStyleMobile = styles.logoStyleMobile;
  const currentLogoStyle = useBreakpointValue({ base: logoStyle, md: logoStyleMobile });

  const [hamburgerVisibility, setHamburgerVisibility] = useState(false);
  const handleDrawerOpen = () => {
    setHamburgerVisibility(true);
  };

  const handleDrawerClose = () => {
    setHamburgerVisibility(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="row" align="center" p={1} bg="#2D3258" boxShadow="sm" justifyContent="space-between">
        {/* 1. Logo and MindMate Text Section */}
        <Flex alignItems="center">
          <Link href="/">
            <Image src="./logo.svg" alt="Logo" sx={currentLogoStyle} minW="3em" />
          </Link>
          <Link href="/">
            <Text sx={mindMateStyle} mx={20}>MindMate</Text>
          </Link>
        </Flex>
        {/* 2. Hamburger Menu */}
        <IconButton
          icon={<HamburgerIcon />}
          variant="outline"
          display={{ base: 'block', md: 'none' }}
          onClick={handleDrawerOpen}
          aria-label="Open Navigation"
        />

        {/* 2. Vertical Line Section */}
        <Box sx={verticalLineStyle}></Box>

        {/* 3. Text Section */}
        <Stack direction="row" spacing={5} align="flex-start" mr="200" display={{ base: 'none', md: 'flex' }}>
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
      {/* Drawer */}
      <Drawer placement="left" onClose={handleDrawerClose} isOpen={hamburgerVisibility}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Stack p={4}>
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
            </DrawerBody>

          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </ChakraProvider>
  );
}

export default Navbar;




