"use client";

import React, { useState } from "react";
import axios from "axios";
import { fonts } from "@/theme/fonts";
import { Checkbox } from "@chakra-ui/react";
import * as style from "../styles/progress-report";

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
import { EditIcon, ChatIcon, CalendarIcon } from "@chakra-ui/icons";

export default function ProgressReport() {
  return (
    <form>
      <Grid
        sx={style.styling.grid}
        templateAreas={`
      "title title"
      "history chat"
      "history input"
    `}
      >
        {/* TITLE */}
        <GridItem
          pl="2"
          border="3px solid #D0A2D1"
          area="title"
          background="#2D3258"
          height="70px"
        >
          <Text sx={style.styling.taxtHeader}>Progress Report</Text>
        </GridItem>

        {/* OPTION SECTION */}
        <GridItem
          borderInlineStart="3px solid #D0A2D1"
          borderBlockEnd="3px solid #D0A2D1"
          pl="2"
          pr="2"
          background="#15193B"
          area="history"
        >
          <VStack margin="0.5em">
            <Button
              leftIcon={<EditIcon />}
              background="#737AA8"
              size="sm"
              variant="outline"
              width="100%"
              textAlign="left"
            >
              Guided Journal
            </Button>
          </VStack>

          <VStack margin="0.5em">
            <Button
              leftIcon={<ChatIcon />}
              background="#737AA8"
              size="sm"
              variant="outline"
              width="100%"
              textAlign="left"
            >
              CBT Chat
            </Button>
          </VStack>
          <VStack margin="0.5em">
            <Button
              leftIcon={<CalendarIcon />}
              background="#737AA8"
              size="sm"
              variant="outline"
              width="100%"
              textAlign="left"
            >
              CBT Chat
            </Button>
          </VStack>
        </GridItem>

        {/* DATA SECTION */}
        <GridItem
          pl="2"
          borderStart="3px solid #D0A2D1"
          borderEnd="3px solid #D0A2D1"
          borderTop="3px solid #D0A2D1"
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
          borderInlineStart="3px solid #D0A2D1"
          borderInlineEnd="3px solid #D0A2D1"
          borderBlockEnd="3px solid #D0A2D1"
          area="input"
        >
          <InputGroup width="100%"></InputGroup>
        </GridItem>
      </Grid>
    </form>
  );
}
