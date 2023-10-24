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
} from '@chakra-ui/react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgree: () => void;
}

function TermsModal({ isOpen, onClose, onAgree }: TermsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="white">
        <ModalHeader>Terms and Conditions</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>
            Creating terms and conditions for a Software as a Service (SaaS) product is a complex legal task, and it&#46;s highly recommended to consult with a legal professional or attorney who specializes in technology and SaaS agreements. These terms need to address various aspects of the service, user rights, data privacy, and legal compliance. Below is a generic outline of terms that are often included in SaaS terms and conditions:
          </p>
          <br />
          <strong>1&#46; Introduction:</strong>
          <ul>
            <li>Explanation of the agreement and its parties.</li>
            <li>Brief overview of the SaaS service provided.</li>
          </ul>

          <strong>2&#46; Acceptance of Terms:</strong>
          <ul>
            <li>User&#46;s agreement to the terms and conditions.</li>
            <li>The age restriction (if applicable).</li>
          </ul>

          <strong>3&#46; Contact Information:</strong>
          <ul>
            <li>Contact information for user inquiries and support.</li>
          </ul>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onAgree}>
            I Agree
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default TermsModal;
