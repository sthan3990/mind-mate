"use client";

import { useUser } from "../../contexts/UserContext";
import axios from "axios";

import React, { useEffect, useState } from "react";
import {
  Spinner,
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
  Center
} from "@chakra-ui/react";
import {
  CopyIcon,
  ArrowForwardIcon,
  ChatIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { useChat } from "ai/react";
import { fonts } from "@/theme/fonts";
import { useNumMessages } from "../../helper/numofmessages";
import ChatInitialPage from "./chatinitial";

interface ChatbotProps {
  numQuestions: number,
  handleContinue: () => void
}

const Chatbot: React.FC<ChatbotProps> = ({ numQuestions, handleContinue }) => {
  const { userId } = useUser();
  const [chatUsed, setChatUsed] = useState(true);
  const { numMessages, setNumMessages } = useNumMessages();
  const [copyValue, setCopyValue] = useState("");
  const { hasCopied, onCopy } = useClipboard(copyValue);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isSendFieldDisabled, setIsSendFieldDisabled] = useState(false);
  const [isFirstRun, setisFirstRun] = useState(true);

  const createChatCBTItem = () => {
    if (userId) {
      axios.post("/api/chatbot-create", { userId }).then((res) => {
        console.log(res);
      });
    }
  };

  const handleOptionClick = (option: string) => {

    // turn off spinner when message is done
    setIsWaiting(true);

    // start the conversation with option clicked by user
    append({ content: option, role: "user" });

    // decrement the number of messages so this doesn't count towards max
    setNumMessages(numMessages - 1); // Increment numMessages

    setisFirstRun(false);

  }

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
      // Spinner to show "waiting"
      setIsWaiting(true);
      localStorage.setItem("setMessageFinished", "false");
    },

    onFinish: (res) => {
      // turn off spinner when message is done
      setIsWaiting(false);

      // second last question
      if (numMessages === numQuestions - 1) {
        append({
          content: "This is my second last response.",
          // The content of the message
          role: "assistant",
        });

        stop();

      }
      // the last question
      else if (numMessages === numQuestions) {
        append({
          content: "This is my last response.",
          // The content of the message
          role: "assistant",
        });

        stop();

        handleContinue();

      }
    },
  });

  useEffect(() => {

  }, [isWaiting]);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (chatUsed && numMessages === 0) {
      createChatCBTItem();
      setChatUsed(false);
    }


    // disable send button 
    //disableSendField();

    handleSubmit(e);

    setNumMessages(numMessages + 1); // Increment numMessages


  };

  const handleArrowButtonClick = (e: React.FormEvent<HTMLButtonElement>) => {

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

  const history = [
    "Entry 1",
    "Entry 2",
    "Entry 3",
    "Entry 4",
    // Add more historical entries as needed
  ];

  const styling = {
    grid: {
      color: "black",
      fontWeight: "800",
      templateAreas: `
        "title title"
        "history chat"
        "history input"
      `,
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
        sx={styling.grid}
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
          <Text sx={styling.taxtHeader}>Guided Journal</Text>
        </GridItem>

        {/* HISTORY SECTION */}
        <GridItem
          borderInlineStart="3px solid #D0A2D1"
          borderBlockEnd="3px solid #D0A2D1"
          height="600px"
          pl="2"
          pr="2"
          background="#15193B"
          area="history"
        >
          <VStack margin="0.5em">
            {history.map((item, index) => (
              <Button
                leftIcon={<ChatIcon />}
                background="#737AA8"
                key={index}
                size="sm"
                variant="outline"
                onClick={() => handleHistoryClick(item)}
                width="100%"
                textAlign="left"
              >
                {item}
              </Button>
            ))}
          </VStack>
        </GridItem>

        {/* CHAT SECTION */}
        <GridItem
          border="5px solid #D0A2D1"
          height="600px"
        >
          <VStack spacing={4} align="stretch" height="100%">
            {/* CHAT MESSAGE SECTION */}
            <Flex flex="1" overflowY="auto" flexDirection="column" bgColor="#15193B" pr="30px" pl="30px" pt="20px" pb="20px">

              {isFirstRun ? (
                <ChatInitialPage
                  handleOptionClick={handleOptionClick} />
              ) : null}

              <Center h="100%" >
                {isWaiting && <Spinner size="xl" color="#d0a2d1" />}
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
              pr="1em"
              pb="5em"
              background="#15193B"
            >
              <InputGroup width="100%">
                <InputLeftElement w="87%" pl="1em" pb="1em" pr="2em">
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
                <InputRightElement pr="5em" pb="1em" >
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
                    <IconButton
                      ml={1}
                      aria-label="Stop"
                      icon={<CloseIcon />}
                      onClick={stop}
                    />
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