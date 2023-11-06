"use client"

import React from 'react';
import { Button, Text, Flex, HStack } from "@chakra-ui/react";
import { fonts } from "@/theme/fonts";

interface ButtonsProps {
  handleBack: () => void;
  handleContinue: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ handleBack, handleContinue }) => {
  return (
    <Flex
      width="100%"
      justifyContent="space-between"
      maxWidth="600px"
    >
      <HStack spacing="10em">
        <Button background="#D0A2D1" onClick={handleBack}>
          <Text
            fontFamily={fonts.body}
            fontWeight="semibold"
            fontSize="20px"
            letterSpacing="-0.03em"
            color="#393939"
            width="100%"
            maxWidth="118.2px"
            textAlign="center"
          >
            Back
          </Text>
        </Button>

        <Button background="#D0A2D1" onClick={handleContinue}>
          <Text
            fontFamily={fonts.body}
            fontWeight="semibold"
            fontSize="20px"
            letterSpacing="-0.03em"
            color="#393939"
            width="100%"
            maxWidth="118.2px"
            textAlign="center"
          >
            Continue
          </Text>
        </Button>
      </HStack>
    </Flex>
  );
};

export default Buttons;
