"use client";
import { useUser } from "./contexts/UserContext";
import { useRouter } from "next/navigation";

import Link from "next/link";
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
  Portal,
} from "@chakra-ui/react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { fonts } from "@/theme/fonts";
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

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" align="center" p={4} bg="#F9F2FF" boxShadow="sm">
        <Flex width="100%" justify="space-between" align="center">
          {/* Logo */}
          <Box>
            <Image src="./logo.svg" alt="Logo" sx={logoStyle} />
          </Box>
          <Flex justify="center" ml="250">
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
          <Flex justify="center" alignItems="center">
            {" "}
            {/* Added alignItems="center" */}
          </Flex>

          <Menu>
            <MenuButton
              as={Button}
              borderRadius="550px"
              sx={accountButtonStyle}
            >
              Account
            </MenuButton>
            <Portal>
              <MenuList bg="#FBC1AA" borderRadius="20px" mt={2}>
                <Link href="/settings">
                  <MenuItem
                    as="a"
                    sx={{
                      _hover: { background: "white", color: "#FBC1AA" },
                      _active: { bg: "white", color: "#FBC1AA" },
                    }}
                  >
                    Settings
                  </MenuItem>
                </Link>

                <Divider orientation="horizontal" />

                {!userId ? (
                  <Link href="/login" passHref>
                    <MenuItem
                      as="a"
                      sx={{
                        _hover: { background: "white", color: "#FBC1AA" },
                        _active: { bg: "white", color: "#FBC1AA" },
                      }}
                    >
                      Login
                    </MenuItem>
                  </Link>
                ) : (
                  <MenuItem
                    as="a"
                    sx={{
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
        </Flex>

        <Divider sx={dividerStyle} />

        <Flex
          direction="column"
          align="center"
          mt={["10%", "15%", "20%", "12%"]}
        >
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
};

export default Navbar;
