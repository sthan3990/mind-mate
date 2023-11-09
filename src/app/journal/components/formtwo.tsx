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
  const [messageFinished, setMessageFinished] = useState<string | null>("");

 
  // useEffect(() => {
  //   // Get the 'setMessageFinished' value from localStorage
  //   const isMessageFinished = localStorage.getItem("setMessageFinished");

  //   // Initialize messageFinished based on the stored value
  //   setMessageFinished(isMessageFinished);
    
  //   if (numMessages === numQuestions && messageFinished) {
  //     // 4 second delay
  //     const timer = debounce(() => {
  //       // Reset numMessages and trigger the continue action
  //       setNumMessages(0);
  //       // Go to next page
  //       handleContinue();
  //     }, 4000);
  //     timer();
  //     // }
  //   }
  // }, [numMessages, numQuestions, handleContinue]);

  return (
    <Chatbot numQuestions={numQuestions} handleContinue={handleContinue} />
  )
};

export default FormTwo;
