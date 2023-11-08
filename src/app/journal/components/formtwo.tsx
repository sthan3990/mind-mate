"use client";

import React, { useState, useEffect } from "react";
import Chatbot from "./chatbot";
import { useNumMessages } from "../../helper/numofmessages";
import { debounce } from "lodash";

interface FormTwoProps {
  numQuestions: number;
  handleContinue: () => void;
}

const FormTwo: React.FC<FormTwoProps> = ({ numQuestions, handleContinue }) => {

  const { numMessages, setNumMessages } = useNumMessages();
  const [messageFinished, setMessageFinished] = useState<boolean | null>(null);

  useEffect(() => {
    // Get the 'setMessageFinished' value from localStorage
    const isMessageFinished = localStorage.getItem("setMessageFinished") === "true";

    // Initialize messageFinished based on the stored value
    setMessageFinished(isMessageFinished);

    localStorage.setItem("lastQuestion","false");

     // One question before end, let ChatBot page know
    if (numMessages < numQuestions) {
      if (isMessageFinished) {
        localStorage.setItem("lastQuestion", "true");
      }
    // End the conversation
    } else if (numMessages === numQuestions) {
      // If they're equal, run a delayed function and reset numMessages
      if (isMessageFinished) {
        // 1.5 second delay
        const timer = debounce(() => {
          // Reset numMessages and trigger the continue action
          setNumMessages(0);
          handleContinue();
        }, 1500);
        timer();
      }
    }
  }, [numMessages, numQuestions, handleContinue]);

// Your function that you want to delay
function delayFunction() {
  // Your code here
  
}


  return (

    <Chatbot />

  )


};

export default FormTwo;
