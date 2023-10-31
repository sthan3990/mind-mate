
import React, { useState } from 'react';
import { Box, Text, Input, Button } from '@chakra-ui/react';

const chatInput = () => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    // Handle sending user input and updating the conversation
  };

  return (
    <Box w="100%" p={4}>
      <Text fontWeight="bold" fontSize="xl" mb={2}>
        User Input
      </Text>
      <Input
        value={input}
        placeholder="Say something..."
        onChange={(e) => setInput(e.target.value)}
      />
      <Button mt={2} onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
};

export default chatInput;
