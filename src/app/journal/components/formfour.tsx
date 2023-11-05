// Journal.tsx
'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SimpleGrid, Heading, Image, Stack, Box, Text } from '@chakra-ui/react';
import { fonts } from "@/theme/fonts";
import * as styles from "../../styles/journalStyle";

const FormFour: React.FC = ({ }) => {
  const [quoteAuthor, setQuoteAuthor] = useState("");
  const [quoteMessage, setQuoteMessage] = useState("");

  const leftSideStyle = styles.leftSideStyle;
  const logoStyle = styles.logoStyle;
  const mainImageStyle = styles.mainImageStyle;
  const textStyle = styles.textStyle;
  const headingStyle = styles.headingStyle;
  const rectangleIconStyle = styles.rectangleIconStyle;
  const registerButtonStyle = styles.registerButtonStyle;
  const loginButtonStyle = styles.loginButtonStyle;
  const orTextStyle = styles.orTextStyle;
  const lineStyle = styles.lineStyle;

  // Code generator 
  useEffect(() => {

    axios.get('https://api.quotable.io/random')
      .then((res) => {
        setQuoteMessage(res.data.content);
        setQuoteAuthor(res.data.author)
      });

  }, [])

  return (
    <SimpleGrid columns={[1, 1, 2, 2]} spacing={0.1} w="full" minChildWidth="320px">
      <Stack bg="#F9F2FF" color="black">
        <Box sx={mainImageStyle}>
          {/* Main Image */}
          <Image src="./register/image.svg" alt="Mind Mate" />
        </Box>
        </Stack>


      {/* Right Side with Signup Form */}
      <Stack bg="#F9F2FF" color="black">
        <Box p={{ base: 4, md: 6, lg: 8 }}>
          <Heading fontSize={"4xl"} 
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
    </SimpleGrid>
  );
};

export default FormFour;
