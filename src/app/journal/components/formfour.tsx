// Journal.tsx
'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Center, SimpleGrid, Heading, Image, Stack, Box, Text } from '@chakra-ui/react';
import { fonts } from "@/theme/fonts";
import * as styles from "../../styles/journalStyle";
import { rightSideStyle } from '@/app/styles/loginStyle';

const FormFour: React.FC = ({ }) => {
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [quoteMessage, setQuoteMessage] = useState("");

  const leftSideStyle = styles.mainImageStyle;

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
    <SimpleGrid 
    spacing={0.1} w="full" 
    minChildWidth="320px"
    >
   
      {/* Left Side with Quote */}
      <Stack bg="#F9F2FF" color="black" sx={leftSideStyle}>
            
          <Box p={{ base: 4, md: 6, lg: 8 }}>
          <Heading 
          fontSize={"4xl"} 
          fontFamily={fonts.heading}
           sx={headingStyle}>
            &quot;{quoteMessage}&quot;
          </Heading>
        </Box>
        <Box>
          <Text sx={textStyle}> 
            {`By ${quoteAuthor} `}
          </Text>
        </Box>
      </Stack>

      <Stack bg="#F9F2FF" color="black" sx={rightSideStyle}>
        <Box sx={mainImageStyle}>
          {/* Main Image */}
          <Image src="./journal/pagefour.png" alt="Mind Mate" />
        </Box>
        </Stack>
    </SimpleGrid>
  );
};

export default FormFour;
