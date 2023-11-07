"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Flex,
  Text,
  Button,
  Image,
  Box,
  Divider,
  HStack,
  VStack,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  DrawerBody,
} from "@chakra-ui/react";
import {
  ChakraProvider,
  extendTheme,
  useBreakpointValue,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import * as styles from "../styles/headerStyle";
import { useRouter } from "next/navigation";
import { useUser } from "../contexts/UserContext";
import Weather from "./weather";

const theme = extendTheme({
  breakpoints: {
    sm: "48em",
    md: "55em",
    lg: "70em",
    xl: "80em",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
  },
});
//testing
const Navbar = () => {
  const pathname = usePathname();

  const { userId } = useUser();

  const logoStyle = styles.logoStyle;
  const mindMateStyle = styles.mindMateStyle;
  const verticalLineStyle = styles.verticalLineStyle;
  const linkStyle = styles.linkStyle;
  const linkTab = styles.linkTab;
  const accountButtonStyle = styles.accountButtonStyle;
  const logoStyleMobile = styles.logoStyleMobile;
  const drawerLinks = styles.drawerLinks;
  const drawerMain = styles.drawerMain;
  const drawerLogoStyle = styles.drawerLogoStyle;
  const currentLogoStyle = useBreakpointValue({
    base: logoStyle,
    md: logoStyleMobile,
  });

  const [hamburgerVisibility, setHamburgerVisibility] = useState(false);
  const handleDrawerOpen = () => {
    setHamburgerVisibility(true);
  };

  const handleDrawerClose = () => {
    setHamburgerVisibility(false);
  };

  const { logout } = useUser();
  const router = useRouter();
  const clickLogout = () => {
    logout();
    router.push("register");
  };
  
  const accountButtonResponsiveStyle = useBreakpointValue({
    base: { borderRadius: "550px", minW: "40px", p: 2 }, 
    md: { borderRadius: "550px", minW: "130px", p: 4 }
  });

  
  return (
    <ChakraProvider theme={theme}>
      <Flex
        direction="row"
        alignItems="center"
        bg="#2D3258"
        boxShadow="sm"
        justifyContent="space-between"
        sx={{
          height: { base: "6em", md: "5em" },
          paddingTop:"10px"
        }}
      >
        {/* 1. Logo and MindMate Text Section and the Vertical Line */}
        <Flex alignItems="center" gap={4} >
          <Link href="/">
            <Image
              src="./logo.svg"
              alt="Logo"
              sx={currentLogoStyle}
              minW="3em"
            />
          </Link>
          <Link href="/">
            <Text sx={mindMateStyle}>
              MindMate
            </Text>
          </Link>
          {/* Vertical Line Section */}
          <Divider
            orientation="vertical"
            sx={verticalLineStyle}
          />
        </Flex>

        {/* 2. Hamburger Menu */}
        <IconButton
          icon={<HamburgerIcon color="#FE8F55E5" />}
          variant="outline"
          display={{ base: "block", md: "none" }}
          onClick={handleDrawerOpen}
          aria-label="Open Navigation"
          mx="2em"
          sx={{ borderColor: "white", boxSize: "3.2rem", fontSize: "1.5rem" }}
        />




        {/* 3. Text Section */}
        <Stack
          direction="row"
          spacing={10}
          display={{ base: "none", md: "flex" }}
        >
          <Link href="/journal">
            <Text sx={pathname === "/journal" ? linkTab : linkStyle}>
              Guided Journal
            </Text>
          </Link>
          <Link href="/chatbot">
            <Text sx={pathname === "/chatbot" ? linkTab : linkStyle}>
              CBT Chatbot
            </Text>
          </Link>
          <Link href="/progress-report">
            <Text sx={pathname === "/progress-report" ? linkTab : linkStyle}>
              Progress Report
            </Text>
          </Link>
        </Stack>
        
        {/* 4. Account Section and Weather */}
        <VStack align="stretch" spacing={-1}>
          <Menu>
            <MenuButton
              as={Button}
              borderRadius="550px"
              sx={{ ...accountButtonStyle, ...accountButtonResponsiveStyle }}
              maxW="7em"
              minW="6em"
              display={{ base: "none", md: "flex" }}
              flexShrink={0}
            >
              Account
            </MenuButton>
            <Portal>
              <MenuList
                bg="#FBC1AA"
                borderRadius="20px"
                w="full"
                minW="10em"
              >
                  <MenuItem
                    as="a"
                    sx={{
                      bg:"#FBC1AA", borderRadius:"20px",
                      _hover: { background: "white", color: "#FBC1AA" },
                      _active: { bg: "white", color: "#FBC1AA" },
                    }}
                    href="/settings" 
                  >
                    <Box textAlign="right" w="full" pr="0.5em">
                      Settings
                    </Box>
                  </MenuItem>

                <Divider orientation="horizontal" />
                {/* add the menu item link */}

                <MenuItem
                  as="a"
                  sx={{
                    bg:"#FBC1AA", borderRadius:"20px", mt:2,
                    _hover: { background: "white", color: "#FBC1AA" },
                    _active: { bg: "white", color: "#FBC1AA" },
                  }}
                  onClick={() => clickLogout()}
                >
                  <Box textAlign="right" w="full" pr="0.5em">
                    Logout
                    {/* this was the issue for the merge conflict so i brough it back in */}
                    { userId ?  "login" : "logout" } 
                  </Box>
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
          <Box display={{ base: 'none', md: 'block' }}>
            <Weather />
          </Box>
        </VStack>
      </Flex>
      {/* Drawer */}
      <Drawer
        placement="left"
        onClose={handleDrawerClose}
        isOpen={hamburgerVisibility}
      >
        <DrawerOverlay>
          <DrawerContent sx={drawerMain}>
            <DrawerCloseButton size="lg" />
            <DrawerBody>
              <Flex alignItems="center">
                <Link href="/">
                  <Image
                    src="./logo.svg"
                    alt="Logo"
                    sx={drawerLogoStyle}
                    minW="10em"
                    my="2em"
                  />
                </Link>
              </Flex>
              <HStack justifyContent="center" >
                <Link href="/journal">
                  <Text sx={drawerLinks}>Guided Journal</Text>
                </Link>
                <Link href="/chatbot">
                  <Text sx={drawerLinks}>CBT Chatbot</Text>
                </Link>
                <Link href="/progress-report">
                  <Text sx={drawerLinks}>Progress Report</Text>
                </Link>
                <Link href="/settings">
                  {" "}
                  {/* Add the Settings link */}
                  <Text sx={drawerLinks}>Account Settings</Text>
                </Link>
                <Link href="/login">
                  {" "}
                  {/* Add the Logout link */}
                  <Text sx={drawerLinks}>Logout</Text>
                </Link>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </ChakraProvider>
  );
};

export default Navbar;
