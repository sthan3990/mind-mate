"use client";
import { useUser } from "../contexts/UserContext";

import React, { useEffect, useState } from "react";
import { Box, Stack, Button, VStack, Flex, Text, useDisclosure } from "@chakra-ui/react";
import InitialJournal from "./components/initialpage";
import FormOne from "./components/formone";
import FormTwo from "./components/formtwo";
import FormThree from "./components/formthree";
import FormFour from "./components/formfour";
import axios from "axios";
import WarningModal from "./components/warningmodal";
import styled from "@emotion/styled";
import { fonts } from "@/theme/fonts";
import Buttons from './buttons';


const Journal: React.FC = () => {
  //userId from useContext
  const { userId } = useUser();
  const [step, setStep] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);
  const [preMoodState, setpreMoodState] = useState(0);
  const [journalId, setJournalId] = useState<string>("");
  const [journalEntry, setJournalEntry] = useState("");
  const [postMoodState, setpostMoodState] = useState(0);
  const [quote, setQuote] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log(journalEntry);
    // Generate a date
    let newDate = new Date();
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1; // Month is 0-indexed, so add 1 to get the correct month.
    let year = newDate.getFullYear();
    const newJournalId =
      userId +
      "_" +
      year +
      (month < 10 ? "0" : "") +
      month +
      (day < 10 ? "0" : "") +
      day;
    setJournalId(newJournalId);
  }, [step, numQuestions, journalEntry, preMoodState, postMoodState, userId]);

  const checkFields = () => {
    if (step === 0 && numQuestions === 0) {
      onOpen(); // Open the modal when fields are missing
      return false;
    }
    if (step === 1 && preMoodState === 0) {
      onOpen(); // Open the modal when fields are missing
      return false;
    }
    if (step === 3 && postMoodState === 0) {
      onOpen(); // Open the modal when fields are missing
      return false;
    }
    return true;
  };

  const handleContinue = () => {
    const isValid = checkFields();

    if (isValid) {
      if (step === 1 || step === 4) {
        writeToSql(step === 1 ? 1 : 2); // Call writeToSql with 1 for step 1, or 2 for step 4
      }
      setStep(step + 1);
    }
  };
  const writeToSql = (which: number) => {
    if (which === 1) {
      // axios
      //   .get("/api/questions", {
      //     params: { journalId, numQuestions }
      //   })
      //   .then((res) => {
      //     console.log(res.data);
      //   });
    } else {
      axios
        .post("/api/journals", {
          userId,
          preMoodState,
          postMoodState,
          numQuestions,
        })
        .then((res) => {
          if (res.data.message === "Journal Created") {
            setJournalId(res.data.journalId.id);
          }
        });
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <Stack
        minHeight="88vh"
        background="#15193B"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
      >
        {step === 0 && <InitialJournal setNumQuestions={setNumQuestions} />}
        {step === 1 && <FormOne setpreMoodState={setpreMoodState} />}
        {step === 2 && (
          <FormTwo
            numQuestions={numQuestions}
            handleContinue={handleContinue}
          />
        )}
        {step === 3 && <FormThree setpostMoodState={setpostMoodState} />}
        {step === 4 && <FormFour />}

        {step === 0 && (
          <Text
            fontFamily={fonts.poppinsItalic}
            fontWeight="semibolditalic"
            fontSize="20px"
            letterSpacing="-0.03em"
            fontStyle="italic"
            color="#CEB1CE"
            width="100%"
            maxWidth="973px"
            textAlign="center"
            marginTop="70px"
          >
            Every question is a step towards self-discovery; even the
            smallest step can lead to profound insights. Choose what feels
            right for you today.
          </Text>
        )}

        {step !== 2 && (
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingBottom="50px"
            marginBottom="50px"
          >
            <Buttons handleBack={handleBack} handleContinue={handleContinue} />

            <Flex
              width="100%"
              justifyContent="space-between"
              maxWidth="250px"
            >
            </Flex>
          </Flex>
        )}

        <WarningModal isOpen={isOpen} step={step} onClose={onClose} />
      </Stack>
    </>
  );
};

export default Journal;
