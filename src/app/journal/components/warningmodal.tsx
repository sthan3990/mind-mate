"use client";

import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
} from '@chakra-ui/react';

interface TermsModalProps {
  step :number,
  isOpen: boolean;
  onClose: () => void;
}

function getMessageForStep(step: number) {
  switch (step) {
    case 0:
      return "Please select how many questions!";
    case 1:
      return "Please choose your current mood!";
    case 3:
      return "Please choose your current mood!";
    default:
      return "An error occurred.";
  }
}

function WarningModal({ isOpen, onClose, step }: TermsModalProps) {
  const message = getMessageForStep(step);
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="white">
        <ModalHeader>Error</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>{message}</Text>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default WarningModal;
