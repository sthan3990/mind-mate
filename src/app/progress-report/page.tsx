"use client";

import React, { useEffect, useState } from "react";
import GuidedJournal from "./components/guidedjournal";
import ChatCBT from "./components/chatcbt";
import PieChartPage from "./components/piechartpage";
import BarGraphPage from "./components/bargraphpage";

const ProgressReport: React.FC = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <>
      {step === 1 && <GuidedJournal setStep={setStep} />}
      {step === 2 && <ChatCBT setStep={setStep} />}
      {step === 3 && <PieChartPage setStep={setStep} />}
      {step === 4 && <BarGraphPage setStep={setStep} />}

    </>
  );
};

export default ProgressReport;
