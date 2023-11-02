"use client";
import { useUser } from "../contexts/UserContext";

import React, { useEffect, useState } from "react";
import { Box, Stack, Button, Text } from "@chakra-ui/react";
import InitialJournal from "./components/initialpage";
import FormOne from "./components/formone";
import FormTwo from "./components/formtwo";
import FormThree from "./components/formthree";
import FormFour from "./components/formfour";
import axios from "axios";

const Journal: React.FC = () => {
  //userId from useContext
  const { userId } = useUser();
  const [step, setStep] = useState(0);
  const [numQuestions, setNumQuestions] = useState(0);
  const [preMoodState, setpreMoodState] = useState(0);
  const [journalEntry, setJournalEntry] = useState("");
  const [postMoodState, setpostMoodState] = useState(0);

  useEffect(() => {}, [
    numQuestions,
    preMoodState,
    journalEntry,
    postMoodState,
  ]);

  const handleContinue = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setStep(step + 1);
      writeToSql();
      // Handle navigation to the final page or perform a post request here.
    }
  };

  console.log(userId);

  const writeToSql = () => {
    axios
      .post("/api/journals", {
        params: { userId, preMoodState, journalEntry, postMoodState },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "User logged in") {
          localStorage.setItem("User", res.data.userID);
        }
      });

    // TODO: how to g the journal id
    // axios.get("/api/questions", { }).then((res) => {
    //   console.log(res.data);
    //   if (res.data.message === "User logged in") {
    //     localStorage.setItem("User", res.data.userID);
    //   }
    // });
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleQuestions = (numberChosen: number) => {
    setNumQuestions((prevNum) => numberChosen);
  };

  const handlepreMoodState = (moodChosen: number) => {
    setpreMoodState((prevMoodState) => moodChosen);
  };

  const handlepostMoodState = (moodChosen: number) => {
    setpostMoodState((prevMoodState) => moodChosen);
  };

  const handleJournalEntry = (journalEntry: string) => {
    setJournalEntry((prevJournal) => journalEntry);
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
        {step === 1 && <FormOne handleMoodState={handlepostMoodState} />}
        {step === 2 && (
          <FormTwo
            setJournalEntry={setJournalEntry}
            handleContinue={handleContinue}
          />
        )}
        {step === 3 && <FormThree handleMoodState={handlepostMoodState} />}
        {step === 4 && <FormFour />}

        {step != 2 && (
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
    </>
  );
};

export default Journal;
