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

  return (
    <Chatbot
    numQuestions={numQuestions} 
    handleContinue={handleContinue} />
  )
};

export default FormTwo;
