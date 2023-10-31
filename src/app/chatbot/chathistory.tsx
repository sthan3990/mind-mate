// ChatList.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ChatHistory = () => {
  // Retrieve chat list from KV database or other data source
  const chatList = [];

  return (
    <Box w="30%" p={4}>
      <Text fontWeight="bold" fontSize="xl" mb={2}>
        ChatList
      </Text>
      {/* Render the chat list here */}
    </Box>
  );
};

export default ChatHistory;
