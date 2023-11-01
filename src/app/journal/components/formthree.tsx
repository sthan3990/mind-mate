'use client';

// Journal.tsx
import React from 'react';
import { InputGroup, InputLeftElement, InputRightElement, Stack, Input, Box, Grid, GridItem, Button, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const FormThree: React.FC = () => {
  return (
    <Grid
      templateAreas={`
      "title title"
      "history chat"
      "history input"
    `}
      gridTemplateRows="50px 1fr 0.2fr"
      gridTemplateColumns="150px 1fr"
      width='90vh'
      h='70vh'
      gap='0.0'
    >
      {/* TITLE */}
      <GridItem pl="2" border="1px solid #D0A2D1" area="title" background="#2D3258">
        <Text
          fontFamily="Cantarell"
          fontWeight="bold"
          fontSize="40px"
          color="#FFFFFF"
          align="center"
        >
          Your Guided Journal
        </Text>
      </GridItem>

      {/* HISTORY SECTION */}
      <GridItem pl="2" background="red" area="history">
        <Text
          fontFamily="Inter"
          fontWeight="regular"
          fontSize="24px"
          color="#000000"
        >
          History Section
        </Text>
      </GridItem>

      {/* CHAT SECTION */}
      <GridItem pl="2" borderStart="1px solid #D0A2D1" borderEnd="1px solid #D0A2D1" borderTop="1px solid #D0A2D1" area="chat">
        <Text
          fontFamily="Inter"
          fontWeight="regular"
          fontSize="24px"
          color="#000000"
        >
          Chat Section
        </Text>
      </GridItem>

      {/* INPUT SECTION */}
      <GridItem pl="2" borderBottom="1px solid #D0A2D1" borderEnd="1px solid #D0A2D1" area="input">
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement pointerEvents='none' w="95%">
              <Input size='lg' backgroundColor="#737AA8" h="100%" />
            </InputLeftElement>
            <InputRightElement w="5%">
              <Button leftIcon={ArrowForwardIcon}> </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default FormThree;
