"use client";
import { useUser } from "./contexts/UserContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
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
  Spacer
} from "@chakra-ui/react";
import {
  ChakraProvider,
  extendTheme,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as styles from './styles/homePageStyling';

const theme = extendTheme({
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
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

const Navbar = () => {
  //Do not delete between this and the next comment
  const { userId, logout } = useUser();
  const router = useRouter();
  const clickLogout = () => {
    logout();
    router.push("register");
  };
  // This is the other comment
  const logoStyle = styles.logoStyle;
  const linkStyle = styles.linkStyle;
  const accountButtonStyle = styles.accountButtonStyle;
  const dividerStyle = styles.dividerStyle;
  const chatStyle = styles.chatStyle;
  const dotStyle = styles.dotStyle;
  const reflectStyle = styles.reflectStyle;
  const measureStyle = styles.measureStyle;
  const journeyStyle = styles.journeyStyle;
  const awarenessStyle = styles.awarenessStyle;
  const drawerLinks = styles.drawerLinks;
  const drawerMain = styles.drawerMain;
  const drawerLogoStyle = styles.drawerLogoStyle;

  const [hamburgerVisibility, setHamburgerVisibility] = useState(false);
  const handleDrawerOpen = () => {
    setHamburgerVisibility(true);
  };

  const handleDrawerClose = () => {
    setHamburgerVisibility(false);
  };


  
  const accountButtonResponsiveStyle = useBreakpointValue({
    base: { borderRadius: "550px", minW: "40px", p: 2 }, 
    md: { borderRadius: "550px", minW: "130px", p: 4 }
  });

 // Redirect to register page if userId is null
if (!userId) {
  router.push("/register");
  return null; // Return null to avoid rendering content in this case
}


  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" minHeight="100vh">
        {/* Navbar Container with Background Color */}
        <Flex direction="column"
          align="center"
          p={4} bg="#F9F2FF"
          boxShadow="sm"
          mb={0}
          sx={{
            height: { base: '6em', md: 'auto' }
          }}>
          <Flex width="100%" justify="space-between" align="center">
            {/* Logo */}
            <Box>
              <Image src="./logo.svg" alt="Logo" sx={logoStyle} />
            </Box>
            {/* 2. Hamburger Menu */}
            <IconButton
              icon={<HamburgerIcon color="#15193B" />}
              variant="outline"
              display={{ base: 'block', md: 'none' }}
              onClick={handleDrawerOpen}
              aria-label="Open Navigation"
              mx="2em"
              sx={{ borderColor: "#15193B", boxSize: "3.2rem", fontSize: "1.5rem" }}
            />

            <Flex justify="center" ml="165" display={{ base: 'none', md: 'flex' }}>
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
            {/* Menu Links */}

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

                    {!userId ? (
                      <Link href="/login" passHref>
                        <MenuItem
                          as="a"
                          sx={{
                            bg:"#FBC1AA", borderRadius:"200px",
                            _hover: { background: "white", color: "#FBC1AA" },
                            _active: { bg: "white", color: "#FBC1AA" },
                          }}
                        >
                          <Box textAlign="right" w="full" pr="0.5em">
                            Login
                          </Box>
                        </MenuItem>
                      </Link>
                    ) : (
                      <MenuItem
                        as="a"
                        sx={{
                          bg:"#FBC1AA", borderRadius:"20px", mt:2,
                          _hover: { background: "white", color: "#FBC1AA" },
                          _active: { bg: "white", color: "#FBC1AA" },
                        }}
                        onClick={() => clickLogout()}
                      >
                        Logout
                      </MenuItem>
                    )}
                  </MenuList>
                </Portal>
              </Menu>
            </VStack>
          </Flex>
        </Flex>
        {/* Drawer */}
        <Drawer placement="left" onClose={handleDrawerClose} isOpen={hamburgerVisibility}>
          <DrawerOverlay>
            <DrawerContent sx={drawerMain}>
              <DrawerCloseButton size="lg" />
              <DrawerBody>
                <Flex alignItems="center">
                  <Link href="/">
                    <Image src="./logo.svg" alt="Logo" sx={drawerLogoStyle} minW="10em" my="2em" />
                  </Link>
                </Flex>
                <Stack spacing={4} p={4} align="start">
                  <Link href="/journal">
                    <Text sx={drawerLinks}>Guided Journal</Text>
                  </Link>
                  <Link href="/chatbot">
                    <Text sx={drawerLinks}>CBT Chatbot</Text>
                  </Link>
                  <Link href="/progress-report">
                    <Text sx={drawerLinks}>Progress Report</Text>
                  </Link>
                  <Link href="/settings"> {/* Add the Settings link */}
                    <Text sx={drawerLinks}>Account Settings</Text>
                  </Link>
                  <Link href="/login"> {/* Add the Logout link */}
                    <Text sx={drawerLinks}>Logout</Text>
                  </Link>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
        <Divider sx={dividerStyle} />

        {/* Main Content without the Navbar's Background Color */}
        <Flex direction="column" align="center" bg="#F9F2FF" flexGrow={1}>
          <Flex align="center" mt={["10%", "15%", "15%", "10%"]}>
            <Text sx={chatStyle}>Chat</Text>
            <Text sx={dotStyle}>.</Text>
            <br />
            <Text sx={reflectStyle}>Reflect</Text>
            <Text sx={dotStyle}>.</Text>
            <br />
            <Text sx={measureStyle}>Measure</Text>
          </Flex>
          <Text sx={journeyStyle}>Your Three-Step Journey to</Text>
          <Text sx={awarenessStyle}>Mindful Awareness</Text>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
