"use client";

import React from "react";
import Buttons from "../buttons";
import { Button, HStack, Stack, Box, Text } from "@chakra-ui/react";
import { fonts } from "@/theme/fonts";

interface InitialJournalProps {
  setNumQuestions: (numQuestions: number) => void;
}

const styling = {
  textStyling: {
    fontWeight: "bold",
    fontSize: "40px",
    color: "#FFFFFF",
    width: "100%",
    maxWidth: "743.11px",
    textAlign: "center",
    paddingTop: "100px",
  },
};

const InitialJournal: React.FC<InitialJournalProps> = ({ setNumQuestions }) => {
  const handleBack = () => {
    //const isValid = checkFields();
  };

  const handleContinue = () => {
    //
  };

  return (
    <Stack
      minHeight="15vh"
      background="#15193B"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      //marginTop="20px"
    >
      <Box>
        <Text sx={styling.textStyling} fontFamily={fonts.cantarell}>
          Select the Number of Questions
        </Text>
      </Box>

      <Box>
        <HStack spacing="4" align="center" marginTop="40px">
          <Box>
            <Button
              backgroundColor="transparent"
              onClick={() => setNumQuestions(1)}
              _hover={{
                backgroundColor: "transparent",
              }}
              paddingTop="50px"
            >
              <svg
                width="133"
                height="134"
                viewBox="0 0 133 134"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="66.5"
                  cy="66.5"
                  r="63.5"
                  fill="white"
                  stroke="black"
                  strokeWidth="4"
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
                  1
                </text>
              </svg>
            </Button>
          </Box>

          <Box>
            <Button
              backgroundColor="transparent"
              onClick={() => setNumQuestions(3)}
              _hover={{
                backgroundColor: "transparent",
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
                  stroke="black"
                  strokeWidth="4"
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
                  3
                </text>
              </svg>
            </Button>
          </Box>

          <Box>
            <Button
              backgroundColor="transparent"
              onClick={() => setNumQuestions(5)}
              _hover={{
                backgroundColor: "transparent",
              }}
              marginTop="50px"
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
                  stroke="black"
                  strokeWidth="4"
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
                  5
                </text>
              </svg>
            </Button>
          </Box>
        </HStack>
      </Box>
    </Stack>
  );
};

export default InitialJournal;
