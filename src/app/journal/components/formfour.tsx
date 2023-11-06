// Journal.tsx
'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { VStack, Spacer, SimpleGrid, Heading, Image, Stack, Box, Text } from '@chakra-ui/react';
import { fonts } from "@/theme/fonts";
import * as styles from '@/app/styles/journalStyle';

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
    bg="#F9F2FF" 
    spacing={0.1} w="full" 
    minChildWidth="320px"
    >
   
      {/* Left Side with Quote */}
      <VStack 
        bg="#F9F2FF" 
        justifyContent="center"
        align='stretch'
        color="black"
        sx={leftSideStyle}
        spacing={2}
        >
            
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

      </VStack>

      <Stack bg="#F9F2FF" color="black" sx={rightSideStyle}>
        <Box sx={mainImageStyle}>
          {/* Main Image */}
          <Image
            background="transparent"
             src="/journal/pagefour.png" 
             alt="Mind Mate"
              />
        </Box>
        </Stack>
    </SimpleGrid>
  );
};

export default FormFour;
