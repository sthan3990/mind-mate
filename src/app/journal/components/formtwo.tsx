"use client";

import React, { useState, useEffect } from "react";
import Chatbot from "../../chatbot/page";
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

    // Check if numMessages >= numQuestions and messageFinished is true
    if (numMessages > numQuestions && isMessageFinished) {
      setNumMessages(0);

      localStorage.setItem("lastQuestion","true"); 

    }

    if (numMessages == numQuestions) {
      handleContinue();
    }
  }, [numMessages, numQuestions, handleContinue]);



  return (

    <Chatbot />

  )


};

export default FormTwo;
