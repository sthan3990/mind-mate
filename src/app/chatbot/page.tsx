'use client';

import { useRef, useState } from 'react';
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
  Flex
} from '@chakra-ui/react';
import { CopyIcon, ArrowForwardIcon, ChatIcon, CloseIcon } from '@chakra-ui/icons';
import { useChat } from 'ai/react';

export default function Chatbot() {
  const [copyValue, setCopyValue] = useState('');
  const { hasCopied, onCopy } = useClipboard(copyValue);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);
  const { messages, input, handleInputChange, handleSubmit, stop } = useChat({
    api: '/api/chatbot', // Specify the API endpoint
  });

  const handleHistoryClick = (item) => {
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


  return (
    <form onSubmit={handleSubmit}>
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
        width='90vh'
        h='70vh'
        gap='0.0'
        margin="1em">

        {/* TITLE */}
        <GridItem
          pl="2"
          border="1px solid #D0A2D1"
          area="title"
          background="#2D3258">
          <Text
            fontFamily="Cantarell"
            fontWeight="bold"
            fontSize="40px"
            color="#FFFFFF"
            textAlign="center"
          >
            Your Guided Journal
          </Text>
        </GridItem>

        {/* HISTORY SECTION */}
        <GridItem
          borderInlineStart="1px solid #D0A2D1"
          borderBlockEnd="1px solid #D0A2D1"
          pl="2"
          background="#15193B"
          area="history">
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
              >
                {item}
              </Button>
            ))}
          </VStack>
        </GridItem>

        {/* CHAT SECTION */}
        <GridItem
          pl="2"
          borderStart="1px solid #D0A2D1"
          borderEnd="1px solid #D0A2D1"
          borderTop="1px solid #D0A2D1"
          background="#15193B"
          area="chat"
          style={{ display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
            <Flex
            margin="0.5em"
  flex="1"
  overflowY="auto"
  flexDirection="column"
>
          {messages.map((message, index) => (
            <Box
              key={index}
              p={2}
              maxW="80%"
              alignSelf={message.role === 'user' ? 'flex-end' : 'flex-start'}
              borderRadius="lg"
              bgColor={message.role === 'user' ? '#5871EB' : '#D0A2D1'}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              my={2}
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
    <InputLeftElement w="75%">
      <Input
        size="lg"
        backgroundColor="#737AA8"
        h="100%"
        value={input}
        onChange={handleInputChange}
        placeholder="Type a message..."
      />
    </InputLeftElement>
    <InputRightElement w="25%">
      <HStack>
        <IconButton ml={1} aria-label="Send" icon={<ArrowForwardIcon onClick={handleSubmit} />} />
        <IconButton ml={1} aria-label="Stop" icon={<CloseIcon />} onClick={stop}/>
      </HStack>
    </InputRightElement>
  </InputGroup>
</GridItem>

      </Grid>
    </form>
  );
}
