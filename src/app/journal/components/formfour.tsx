// Journal.tsx
'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { HStack, VStack, Flex, Heading, Image, Stack, Box, Text } from '@chakra-ui/react';
import { fonts } from "@/theme/fonts";
import * as styles from '@/app/styles/journalStyle';

const FormFour: React.FC = ({ }) => {
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [quoteMessage, setQuoteMessage] = useState("");

  const rightSideStyle = styles.rightSideStyle;
  const leftSideStyle = styles.leftSideStyle;
  const mainImageStyle = styles.mainImageStyle;
  const textStyle = styles.textStyle;
  const headingStyle = styles.headingStyle;

  // Code generator 
  useEffect(() => {

    axios.get('https://api.quotable.io/random')
      .then((res) => {
        setQuoteMessage(res.data.content);
        setQuoteAuthor(res.data.author)
      });

  }, [])

  return (
    <Flex 
      direction="row" 
      wrap="nowrap"
      w="full"
      h="20em"
      align="stretch"
      bg="#F9F2FF"
    >
      {/* Left Side with Quote */}
      <VStack 
        flex="1"
        p={20}
        align="start"
        bg="#F9F2FF"
      >
        <Heading 
          fontSize={"2xl"} 
          fontFamily={fonts.alternative}
        >
          &quot;{quoteMessage}&quot;
        </Heading>
        <Text 
          fontSize="lg"
          alignSelf="flex-end"
        >
          — {quoteAuthor}
        </Text>
      </VStack>

      {/* Right Side with Image */}
      <Box 
        flex="1.5"
        position="relative"
        bg="#F9F2FF"
      >
        <Image
          position="absolute"
          right={0}
          bottom={0}
          w="auto"
          h="full"
          opacity={0.7}
          src="/journal/pagefour.png" 
          alt="Mind Mate"
        />
      </Box>
    </Flex>
  );
};

export default FormFour;
