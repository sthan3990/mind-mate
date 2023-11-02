'use client';

import React from 'react';
import { Button, HStack, Stack, Box, Text } from '@chakra-ui/react';

interface InitialJournalProps {
  handleQuestions: (numQuestions: number) => void;
}

const InitialJournal: React.FC<InitialJournalProps> = ({ handleQuestions }) => {

  return (

    <Stack
      height="65vh"
      background="#15193B"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Text>PAGE 1</Text>
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
            <Button backgroundColor="transparent" onClick={() => handleQuestions(1)} >
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
            </Button>
          </Box>

          <Box>
            <Button onClick={() => handleQuestions(2)} >
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
            </Button>

          </Box>

          <Box>
            <Button onClick={() => handleQuestions(3)} >
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
            </Button>

          </Box>

        </HStack>
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

export default InitialJournal;
