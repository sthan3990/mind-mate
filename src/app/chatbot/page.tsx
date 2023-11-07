"use client";
import { useUser } from "../contexts/UserContext";
import axios from "axios";

import React, { useState, useEffect } from "react";
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
  Center,
  Spinner
} from "@chakra-ui/react";
import {  CopyIcon } from "@chakra-ui/icons";
import { useChat } from "ai/react";
import { fonts } from "@/theme/fonts";
import { useNumMessages } from "../helper/numofmessages";

const Chatbot: React.FC = ({}) => {
  const { userId } = useUser();
  const [chatUsed, setChatUsed] = useState(true);
  const { numMessages, setNumMessages } = useNumMessages();
  const [copyValue, setCopyValue] = useState("");
  const { hasCopied, onCopy } = useClipboard(copyValue);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isSendFieldDisabled, setIsSendFieldDisabled] = useState(false);

  const createChatCBTItem = () => {
    axios.post("/api/chatbot-create", { userId }).then((res) => {
      console.log(res);
    });
  };

  // Function to disable the send button
  const disableSendField = () => {
    setIsSendFieldDisabled(true);
  };

  // Function to enable the send button
  const enableSendField = () => {
    setIsSendFieldDisabled(false);
  };


  const {
    messages,
    setInput,
    input,
    handleInputChange,
    handleSubmit,
    stop,
    append,
  } = useChat({
    api: "/api/chatbot",

    onResponse: (res) => {
      localStorage.setItem("setMessageFinished", "false");

      const lastQuestion = localStorage.getItem("lastQuestion");

      if (lastQuestion == "true") {
        append({
          content: "Good Bye",
          // The content of the message
          role: "user",
        });

        // clear input area
        setInput("");

        // stop the chat
        stop();
      }
    },
    onFinish: (res) => {

      // enable send button 
      enableSendField();

      // turn off spinner when message is done
      setIsWaiting(false);

      setNumMessages(numMessages + 1); // Increment numMessages
      localStorage.setItem("setMessageFinished", "true");
    },
  });

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (chatUsed && numMessages === 0) {
      createChatCBTItem();
      setChatUsed(false);
    }

     // Spinner to show "waiting"
     setIsWaiting(true);

     // disable send button 
     disableSendField();

     
    handleSubmit(e);
  };

  const handleArrowButtonClick = (e: React.FormEvent<HTMLButtonElement>) => {
    //e.preventDefault(); // Prevent the default form submission

    if (input.trim() !== "") {
      // Send a user message to the API
      append({ content: input, role: "user" });

      // clear input field
      setInput("");
    }
  };

  const handleHistoryClick = (item: string) => {
    // Handle the click event, e.g., set the selected history item, or perform an action with it.
    console.log(`History item clicked: ${item}`);
  };


  const styling = {
    grid: {
      color: "black",
      fontWeight: "800",
      gridTemplateRows: "70px 1fr 0.12fr",
      gridTemplateColumns: "257px 1fr",
      width: "100vw",
      height: "100vh",
      gap: "0",
      m: "0",
      p: "3em 5em",
    },

    taxtHeader: {
      fontFamily: fonts.body,
      fontWeight: "bold",
      fontSize: "40px",
      color: "#FFFFFF",
      textAlign: "center",
    },
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Grid
        templateRows="repeat(1, 1fr)"   // one row
        templateColumns="repeat(1, 1fr)"  // one column
        p="4em"
        alignItems="end"
      >
        {/* TITLE */}
        <GridItem 
          colSpan={2} pl="2"
          border="4px solid #D0A2D1"
          background="#2D3258"
          height="70px"
        >
          <Text sx={styling.taxtHeader}>CBT Chatbot</Text>
        </GridItem>
  
        {/* CHAT SCREEN */}
        <GridItem
          border="5px solid #D0A2D1"
          height="500px"
        >
          {/* CHAT SECTION */}
          <VStack spacing={4} align="stretch" height="100%">
            {/* CHAT MESSAGE SECTION */}
            <Flex flex="1" overflowY="auto" flexDirection="column" bgColor="#15193B" pr="30px" pl="30px" pt="20px" pb="20px">

            <Center h="100%" >
                {isWaiting && <Spinner size="xl" color="yellow" />}
              </Center>


              {messages.map((message, index) => (
                <Box
                  key={index}
                  p={2}
                  maxW="80%"
                  alignSelf={message.role === "user" ? "flex-end" : "flex-start"}
                  borderRadius="lg"
                  bgColor={message.role === "user" ? "#5871EB" : "#D0A2D1"}
                >
                  <Text fontSize="lg">{message.content}</Text>
                  <IconButton
                    size="xs"
                    aria-label="Copy Message"
                    icon={<CopyIcon />}
                    onClick={() => {
                      setCopyValue(message.content);
                      onCopy();
                    }}
                  />
                </Box>
              ))}
            </Flex>
  
            {/* INPUT SECTION */}
            <GridItem
              pl="1em"
              pb="5em"
              background="#15193B"
            >
              <InputGroup width="100%">
                <InputLeftElement w="88%" pl="1em" pb="3">
                  <Input
                    size="lg"
                    backgroundColor="#737AA8"
                    h="5em"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Type a message..."
                    isDisabled={isSendFieldDisabled}
                  />
                </InputLeftElement>
                <InputRightElement pr="4.5em" pb="1em">
                  <HStack>
                  <Button
                    backgroundColor="#2D3258"
                    borderColor="white"
                    color="white"
                    borderRadius="20"
                    height="50px"
                    width="100px"
                    _hover={{
                      bg: "white",
                      color: "black",
                      border: "1px solid black",
                    }}
                    aria-label="Send"
                    onClick={handleArrowButtonClick}
                  >
                    <Text>Send</Text>
                  </Button>
                    {/* <IconButton
                      ml={1}
                      aria-label="Stop"
                      icon={<CloseIcon />}
                      onClick={stop}
                    /> */}
                  </HStack>
                </InputRightElement>
              </InputGroup>
            </GridItem>
          </VStack>
        </GridItem>
      </Grid>
    </form>
  );
};

export default Chatbot;
