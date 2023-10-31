'use client';

import { UseChatHelpers } from 'ai/react';
import { Button, Box, Heading, Text } from '@chakra-ui/react';
import { ArrowRightIcon } from '@chakra-ui/icons';

const exampleMessages = [
  {
    heading: 'I need motivation!',
    message: 'Send me a motivational quote and one word of wisdom',
  },
  {
    heading: 'I just want to talk!',
    message: 'Talk about the weather: \n',
  },
];

const InitialScreen = () => {
  return (
    <Box mx="auto" maxW="2xl" px="4">
      <Box rounded="lg" borderWidth={1} bg="gray.50" p="8">
        <Heading as="h1" fontSize="lg" fontWeight="semibold" mb="2">
          Welcome to MindMate's AI Chatbot!
        </Heading>
        <Text color="gray.500">
          You can start a conversation here or try the following examples:
        </Text>
        <Box mt="4" display="flex" flexDir="column" alignItems="flex-start">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              h="auto"
              p="0"
              fontSize="base"
            >
              <ArrowRightIcon w="4" h="4" mr="2" color="gray.500" />
              {message.heading}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default InitialScreen;
