import React, { useState } from 'react';
import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react';
import { fonts } from '@/theme/fonts';

interface InitialJournalProps {
  setNumQuestions: (numQuestions: number) => void;
}

const InitialJournal: React.FC<InitialJournalProps> = ({ setNumQuestions }) => {
  const [selectedNum, setSelectedNum] = useState<number | null>(null);

  const handleSelectNumber = (num: number) => {
    setSelectedNum(num);
    setNumQuestions(num);
  };

  const isSelected = (num: number) => selectedNum === num;

  return (
    <Stack
      minHeight="15vh"
      background="#15193B"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Text
          fontWeight="bold"
          fontSize="40px"
          color="#FFFFFF"
          width="100%"
          maxWidth="743.11px"
          textAlign="center"
          paddingTop="100px"
          fontFamily={fonts.cantarell}
        >
          Select the Number of Questions
        </Text>
      </Box>

      <Box>
        <HStack spacing="4" align="center" marginTop="40px">
          {[1, 3, 5].map((number) => (
            <Box key={number}>
              <Button
                backgroundColor="transparent"
                onClick={() => handleSelectNumber(number)}
                _hover={{
                  backgroundColor: 'transparent',
                }}
                paddingTop="50px"
              >
                <svg
                  width="134"
                  height="134"
                  viewBox="0 0 134 134"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="67"
                    cy="67"
                    r="65"
                    fill="white"
                    stroke={isSelected(number) ? "#FE8F55E5" : "black"}
                    strokeWidth={isSelected(number) ? "6" : "4"}
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fill="black"
                    fontSize="40px"
                    fontWeight="semibold"
                    fontFamily={fonts.heading}
                  >
                    {number}
                  </text>
                </svg>
              </Button>
            </Box>
          ))}
        </HStack>
      </Box>
    </Stack>
  );
};

export default InitialJournal;
