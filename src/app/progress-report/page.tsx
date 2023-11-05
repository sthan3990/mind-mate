"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import GuidedJournal from "./components/guidedjournal";
import ChatCBT from "./components/chatcbt";
import ChatCBTCalendar from "./components/chatcbtcalendar";
import PieGraphComponent from "./components/piegraph";
const ProgressReport: React.FC = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <>
      {step === 1 && <GuidedJournal setStep={setStep} />}
      {step === 2 && <ChatCBT setStep={setStep} />}
      {step === 3 && <ChatCBTCalendar setStep={setStep} />}
      {step === 4 && <PieGraphComponent />}

    </>
  );
};

export default ProgressReport;
