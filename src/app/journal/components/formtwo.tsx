'use client';

// Journal.tsx
import React, { useState } from 'react';
import { InputGroup, InputLeftElement, InputRightElement, Stack, Input, Box, Grid, GridItem, Button, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import debounce from 'lodash/debounce';
import Chatbot from '../../chatbot/page';
import { useNumMessages } from '../../helper/numofmessages';
import Chatbot from '../../chatbot/page';
import { useNumMessages } from '../../helper/numofmessages';

interface FormTwoProps {
  numQuestions: number
  handleContinue: () => void;
}

const FormTwo: React.FC<FormTwoProps> = ({ numQuestions, handleContinue }) => { 
  const { numMessages, setNumMessages } = useNumMessages();

  console.log("numMessages:", numMessages); // Log numMessages

  if (numMessages < numQuestions) {
    return <Chatbot />;
  } else {
    setNumMessages(0); // Reset numMessages
    handleContinue(); // Call the function to navigate to the next page
  }
 
const FormTwo: React.FC<FormTwoProps> = ({ handleJournalEntry, handleContinue }) => { 
  const { numMessages, setNumMessages } = useNumMessages();

  console.log("numMessages:", numMessages); // Log numMessages

  if (numMessages < 4) {
    return <Chatbot />;
  } else {
    setNumMessages(0); // Reset numMessages
    handleContinue(); // Call the function to navigate to the next page
  }
 
};

export default FormTwo;