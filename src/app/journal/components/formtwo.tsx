"use client";

// Journal.tsx
import React from "react";
import Chatbot from "../../chatbot/page";
import { useNumMessages } from "../../helper/numofmessages";

interface FormTwoProps {
  numQuestions: number;
  handleContinue: () => void;
}

const FormTwo: React.FC<FormTwoProps> = ({ numQuestions, handleContinue }) => {
  const { numMessages, setNumMessages } = useNumMessages();

  console.log("numMessages:", numMessages); // Log numMessages

  if (numMessages < numQuestions) {
    return <Chatbot />;
  } else {
    setNumMessages(0); // Reset numMessages
    handleContinue(); // Call the function to navigate to the next page
  }
};

export default FormTwo;
