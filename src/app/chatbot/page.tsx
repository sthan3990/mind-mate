"use client"

import { Box, Center, Heading, Grid, GridItem, Input, Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Message {
  text: string;
  user: 'user' | 'chatGPT'; // Define specific user types
}

export default function ChatGPT() {
  const [messages, setMessages] = useState<Message[]>([]); 
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, user: 'user' }]);
    setInput('');

  };

  
  const handleChatGPTResponse = () => {
    const userMessage = messages[messages.length - 1].text;
    //const response = simulateGPTResponse(userMessage);
    //setMessages([...messages, { text: response, user: 'chatGPT' }]);
  };

  return (
      <Grid
        margin="2em"
        background={"primary.800"}
        templateAreas={`"header header"
                        "nav main"
                        "footer footer"`}
        gridTemplateRows={'80px 1fr 30px'}
        gridTemplateColumns={'150px 1fr'}
        h='500px'  // Increased height for chat history
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='primary.800' area={'header'}>
          <Center>
          <Heading  as='h1' size='2xl'>Your CBT Chatbot </Heading>
            </Center>
        </GridItem>
        <GridItem pl='2' bg='pink.300' area={'nav'}>
          Chat History
        </GridItem>
        <GridItem pl='2' bg='green.300' area={'main'}>
          <Box p={4}>
            <Text fontSize="xl" fontWeight="bold">Response area</Text>
            
          </Box>
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'} alignSelf="end">  {/* Adjust placement of footer */}
          <Box p={4}>
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              
            />
            <Button onClick={handleSendMessage} colorScheme="blue">
              Send
            </Button>
          </Box>
        </GridItem>
      </Grid>
  );
}
