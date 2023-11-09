import { Box, Text, Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';


interface ChatInitialProps {
  handleOptionClick: (option: string) => void;
}

const ChatInitialPage: React.FC<ChatInitialProps> = ({handleOptionClick}) => {

  const [message, setMessage] = useState("Welcome to the CBT Chatbot. What would you like to talk about today?");
  
  return (
    <Box p={4}>
      <Text color="white">{message}</Text>
      <Flex mt={4}>
        <Button onClick={() => handleOptionClick('Talk to me about Work')} mr={2}>About Work</Button>
        <Button onClick={() => handleOptionClick('Talk to me about School')} mr={2}>About School</Button>
        <Button onClick={() => handleOptionClick('Talk to me about my Friends')} mr={2}>About Friends</Button>
        <Button onClick={() => handleOptionClick('Just talk to me')}>About Myself</Button>
      </Flex>
    </Box>
  );
};

export default ChatInitialPage;
