'use client';

import { useChat } from 'ai/react';
import {
  Flex,
  Box,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';

export default function Chatbot() {

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chatbot', // Specify the API endpoint
  });

  return (
    <Flex
      mx="auto"
      w="full"
      h="screen"
      maxW="lg"
      p="24"
      flexDir="column"
    >
      <Box flex="1" m="auto">
        {messages.map((m) => (
          <Box mb="4" key={m.id}>
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
          </Box>
        ))}
      </Box>
      <form className="flex space-x-4" onSubmit={handleSubmit}>
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder="Say something..."
          rounded="md"
          p="2"
          color="black"
        />
        <Button
          type="submit"
          border="2px solid white"
          p="2"
          rounded="md"
        >
          Send
        </Button>
      </form>
    </Flex>
  );
}
