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

  const {numMessages, setNumMessages } = useNumMessages();
  const [messageFinished, setMessageFinished] = useState<string | null>("");
  
  useEffect(() => {
    // Get the 'setMessageFinished' value from localStorage
    const isMessageFinished = localStorage.getItem("setMessageFinished");
    
    // Initialize messageFinished based on the stored value
    setMessageFinished(isMessageFinished);

    //  One question before end, let ChatBot page know
    if (numMessages < numQuestions) {

      // if (isMessageFinished) {
      //   // let the API know we are at the last question
      //  // localStorage.setItem("lastQuestion", "true");
      // }

    // End the conversation
    } else if (numMessages === numQuestions && messageFinished) {

        // 1.5 second delay
        const timer = debounce(() => {

          // let the API know we are at the last question
          localStorage.setItem("lastQuestion", "true");
          
          // Reset numMessages and trigger the continue action
          setNumMessages(0);

          // Go to next page
          handleContinue();
        }, 4000);
        timer();
      // }
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
