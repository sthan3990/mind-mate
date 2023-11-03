"use client";

import React, { useState } from "react";
import axios from "axios";
import { fonts } from "@/theme/fonts";
import { Checkbox } from "@chakra-ui/react";
import * as styles from "../styles/registerStyle";

import {
  Input,
  Button,
  Box,
  Text,
  IconButton,
  useClipboard,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  GridItem,
  Grid,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function ProgressReport() {
  return (
    <form>
      <Grid
        color="black"
        fontWeight="800"
        templateAreas={`
      "title title"
      "history chat"
      "history input"
    `}
        gridTemplateRows="50px 1fr 0.12fr"
        gridTemplateColumns="150px 1fr"
        width="90vh"
        h="70vh"
        gap="0.0"
        margin="1em"
      >
        {/* TITLE */}
        <GridItem
          pl="2"
          border="1px solid #D0A2D1"
          area="title"
          background="#2D3258"
        >
          <Text
            fontFamily="Cantarell"
            fontWeight="bold"
            fontSize="40px"
            color="#FFFFFF"
            textAlign="center"
          >
            Progress Report
          </Text>
        </GridItem>

        {/* HISTORY SECTION */}
        <GridItem
          borderInlineStart="1px solid #D0A2D1"
          borderBlockEnd="1px solid #D0A2D1"
          pl="2"
          background="#15193B"
          area="history"
        >
          <VStack margin="0.5em"></VStack>
        </GridItem>

        {/* CHAT SECTION */}
        <GridItem
          pl="2"
          borderStart="1px solid #D0A2D1"
          borderEnd="1px solid #D0A2D1"
          borderTop="1px solid #D0A2D1"
          background="#15193B"
          area="chat"
          style={{
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <Flex
            margin="0.5em"
            flex="1"
            overflowY="auto"
            flexDirection="column"
          ></Flex>
        </GridItem>

        {/* INPUT SECTION */}
        <GridItem
          pl="2"
          background="#15193B"
          borderInlineStart="1px solid #D0A2D1"
          borderInlineEnd="1px solid #D0A2D1"
          borderBlockEnd="1px solid #D0A2D1"
          area="input"
        >
          <InputGroup
            width="100%" // Ensure it spans the entire width of the grid item
          >
            <InputLeftElement w="75%"></InputLeftElement>
            <InputRightElement w="25%">
              <HStack></HStack>
            </InputRightElement>
          </InputGroup>
        </GridItem>
      </Grid>
    </form>
  );
}
