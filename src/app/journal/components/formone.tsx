// Journal.tsx
'use client';

import React from 'react';
import { Button, HStack, Stack, Box, Text } from '@chakra-ui/react';

const Journal: React.FC = () => {
  return (
    <Stack
      height="65vh"
      background="#15193B"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Text
          fontFamily="Cantarell"
          fontWeight="bold"
          fontSize="40px"
          color="#FFFFFF"
          width="100%"
          maxWidth="743.11px"
          textAlign="center"
        >
          Select the Number of Questions
        </Text>
      </Box>

      <Box>
        <HStack spacing="4" align="center">
          <Box>
            <svg
              width="133"
              height="134"
              viewBox="0 0 133 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="66.5" cy="66.5" r="63.5" fill="white" stroke="black" strokeWidth="4" />
              <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="black" fontSize="40px" fontWeight="semibold">
                1
              </text>
            </svg>
          </Box>

          <Box>
            <svg
              width="134"
              height="134"
              viewBox="0 0 134 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="67" cy="67" r="65" fill="white" stroke="black" strokeWidth="4" />
              <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="black" fontSize="40px" fontWeight="semibold">
                2
              </text>
            </svg>
          </Box>

          <Box>
            <svg
              width="134"
              height="134"
              viewBox="0 0 134 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="67" cy="67" r="65" fill="white" stroke="black" strokeWidth="4" />
              <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="black" fontSize="40px" fontWeight="semibold">
                3
              </text>
            </svg>
          </Box>
        </HStack>
      </Box>
      
      <Box>
        <Button background="#D0A2D1">
          <Text
            fontFamily="Poppins"
            fontWeight="semibold"
            fontSize="24px"
            letterSpacing="-0.03em"
            color="#393939"
            width="100%"
            maxWidth="118.2px"
            textAlign="center"
          >
            Continue
          </Text>
        </Button>
      </Box>

      <Box>
        <Text
          fontFamily="Poppins"
          fontWeight="semibolditalic"
          fontSize="24px"
          letterSpacing="-0.03em"
          fontStyle="italic"
          color="#CEB1CE"
          width="100%"
          maxWidth="973px"
          textAlign="center"
        >
          Every question is a step towards self-discovery; even the smallest step can lead to profound insights. Choose what feels right for you today.
        </Text>
      </Box>
    </Stack>
  );
};

export default Journal;
