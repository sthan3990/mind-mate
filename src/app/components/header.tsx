"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Image,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Weather from "./weather";

interface Props {
  children: React.ReactNode;
}

const Links = [
  { name: "Chatbot", route: "/chatbot" },
  { name: "Journal", route: "/journal" },
  { name: "Register", route: "/register" },
];

export default function Navbar() {
  const router = useRouter();
  const logout = () => {
    localStorage.setItem("User", "");
    refresh();
    router.push("/register");
  };
  const [userID, setUserID] = useState("");
  useEffect(() => {
    setUserID(
      JSON.stringify(
        localStorage.getItem("User") || localStorage.setItem("User", "")
      )
    );
  }, [logout]);

  const { refresh } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = [
    { name: "Chatbot", route: "/chatbot" },
    { name: "Journal", route: "/journal" },
    { name: "Register", route: "/register" },
  ];

  const dropdownLinks = [
    { name: "Your Profile", route: `/profile` },
    { name: "Logout", route: "/Projects" },
  ];

  const menuItemStyles = {
    bg: "primary.900",
    _hover: {
      textDecoration: "none",
      bg: useColorModeValue("blue.200", "blue.700"),
    },
  };

  return (
    <>
      <Box bg="primary.900" px={4}>
        <Flex
          color="white"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image height={50} width={50} src="/logo.svg" alt="Mind Mate" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <Link href={link.route} key={link.route}>
                  <Box {...menuItemStyles}>{link.name}</Box>
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Weather />
            <Box ml={4} />
            <Menu>
              <MenuDivider />
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                />
              </MenuButton>
              <MenuList bg="primary.900">
                {!userID ? (
                  <Link href={"/login"} key={"/login"}>
                    <MenuItem {...menuItemStyles}> {"Login"} </MenuItem>
                  </Link>
                ) : (
                  <Link href={`/profile`} key={`/profile`}>
                    <MenuItem {...menuItemStyles}> {"Your Profile"} </MenuItem>
                    <MenuItem onClick={logout} {...menuItemStyles}>
                      {"Logout"}
                    </MenuItem>
                  </Link>
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link href={link.route} key={link.route}>
                  <Box {...menuItemStyles}>{link.name}</Box>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
