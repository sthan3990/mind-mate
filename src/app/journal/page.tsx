"use client";
import { useUser } from "../contexts/UserContext";
import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Button,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import WarningModal from "./components/warningmodal";
import InitialJournal from "./components/initialpage";
import FormOne from "./components/formone";
import FormTwo from "./components/formtwo";
import FormThree from "./components/formthree";
import FormFour from "./components/formfour";
import axios from "axios";

const Journal: React.FC = () => {
  // userId from useContext
  const [step, setStep] = useState(0);
  const [journalId, setJournalId] = useState("");
  const { userId } = useUser();
  const [numQuestions, setNumQuestions] = useState(0);
  const [preMoodState, setpreMoodState] = useState(0);
  const [journalEntry, setJournalEntry] = useState("");
  const [postMoodState, setpostMoodState] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
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
    setJournalId((prevJournal) => newJournalId);
  }, [
    journalId,
    step,
    numQuestions,
    preMoodState,
    journalEntry,
    postMoodState,
    userId
  ]);

  const checkFields = () => {
    if (step === 0 && numQuestions === 0) {
      onOpen(); // Open the modal when fields are missing
      return false;
    }
    if (step === 1 && preMoodState === 0) {
      onOpen(); // Open the modal when fields are missing
      return false;
    }
    // Add similar checks for other steps...
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
      axios
        .get("/api/questions", {
          params: { journalId, numQuestions }
        })
        .then((res) => {
          console.log(res.data);
        });
    } else {
      axios
        .post("/api/journals", {
          userId,
          preMoodState,
          journalEntry,
          postMoodState
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.message === "User logged in") {
            localStorage.setItem("User", res.data.userID);
          }
        });
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleQuestions = (numberChosen: number) => {
    setNumQuestions(numberChosen);
  };

  const handlepreMoodState = (moodChosen: number) => {
    setpreMoodState(moodChosen);
  };

  const handlepostMoodState = (moodChosen: number) => {
    setpostMoodState(moodChosen);
  };

  const handleJournalEntry = (journalEntry: string) => {
    setJournalEntry(journalEntry);
  };

  return (
    <>
      <Stack
        height="65vh"
        background="#15193B"
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="space-between"
      >
        {step === 0 && <InitialJournal handleQuestions={handleQuestions} />}
        {step === 1 && <FormOne handleMoodState={handlepreMoodState} />}
        {step === 2 && (
          <FormTwo
            setJournalEntry={setJournalEntry}
            handleContinue={handleContinue}
          />
        )}
        {step === 3 && <FormThree handleMoodState={handlepostMoodState} />}
        {step === 4 && <FormFour />}

        {step !== 2 && (
          <Box>
            <Button background="#D0A2D1" onClick={handleBack}>
              <Text
                fontFamily="Poppins"
                fontWeight="semibold"
                fontSize="24px"
                letterSpacing="-0.03em"
                color="#393939"
                width="100%"
                maxWidth="118.2px"
                textAlign="center"
                onClick={handleBack}
              >
                Back
              </Text>
            </Button>
            <Button background="#D0A2D1" onClick={handleContinue}>
              <Text
                fontFamily="Poppins"
                fontWeight="semibold"
                fontSize="24px"
                letterSpacing="-0.03em"
                color="#393939"
                width="100%"
                maxWidth="118.2px"
                textAlign="center"
                onClick={handleContinue}
              >
                Continue
              </Text>
            </Button>
          </Box>
        )}
      </Stack>
      <WarningModal isOpen={isOpen} step={step} onClose={onClose} />
    </>
  );
};

export default Journal;
