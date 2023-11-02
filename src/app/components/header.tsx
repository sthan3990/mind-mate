"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from './../contexts/UserContext';


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
  const { userId, logout } = useUser();
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
                  src="https://cdn0.iconfinder.com/data/icons/kuvio-basic-ui/32/more-512.png"
                />
              </MenuButton>
              <MenuList bg="primary.900">
                {!userId ? (
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