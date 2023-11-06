"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@/app/contexts/UserContext";
import { Text } from "@chakra-ui/react";
import { PieChart, Pie } from "recharts";

interface PieGraphProps {
  emotion_post: string;
  emotion_pre: string;
  timestamp: Date;
}

const PieGraphComponent: React.FC = () => {
  const [graphData, setGraphData] = useState([]);
  const [preMoodData, setPreMoodData] = useState<
    { name: string; value: number; percentage: number }[]
  >([]);
  const [postMoodData, setPostMoodData] = useState<
    { name: string; value: number; percentage: number }[]
  >([]);
  const [numQuestionsData, setNumQuestionsData] = useState([]);

  const { userId } = useUser();

  const fetchData = () => {
    axios
      .get("/api/journals/", { params: { userId } })
      .then((response) => {
        setGraphData(response.data.journals);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const sortData = () => {
    const totalEntries = graphData.length;

    const updatedPreMoodData: {
      name: string;
      value: number;
      percentage: number;
    }[] = [
      { name: "Extremely Upset", value: 0, percentage: 0 },
      { name: "Quite Upset", value: 0, percentage: 0 },
      { name: "Neutral", value: 0, percentage: 0 },
      { name: "Happy", value: 0, percentage: 0 },
      { name: "Extremely Happy", value: 0, percentage: 0 },
    ];

    const updatedPostMoodData: {
      name: string;
      value: number;
      percentage: number;
    }[] = [
      { name: "Extremely Upset", value: 0, percentage: 0 },
      { name: "Quite Upset", value: 0, percentage: 0 },
      { name: "Neutral", value: 0, percentage: 0 },
      { name: "Happy", value: 0, percentage: 0 },
      { name: "Extremely Happy", value: 0, percentage: 0 },
    ];

    graphData.forEach((item: PieGraphProps) => {
      const preMoodScore = parseInt(item.emotion_pre, 10);
      const postMoodScore = parseInt(item.emotion_post, 10);

      //
      if (preMoodScore >= 1 && preMoodScore <= 5) {
        updatedPreMoodData[preMoodScore - 1].value++;
      }

      if (postMoodScore >= 1 && postMoodScore <= 5) {
        updatedPostMoodData[postMoodScore - 1].value++;
      }

      // figure out percentages
      // Round it to a whole number
      updatedPreMoodData.forEach((category) => {
        category.percentage = Math.round((category.value / totalEntries) * 100);
      });

      updatedPostMoodData.forEach((category) => {
        category.percentage = Math.round((category.value / totalEntries) * 100);
      });

      setPreMoodData(updatedPreMoodData);
      setPostMoodData(updatedPostMoodData);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    sortData();
  }, [graphData]);

  return (
    <div style={{ marginLeft: "1em" }}>
      <div
        style={{
          paddingTop: "20px",
          display: "flex",
        }}
      >
        <div>
          <Text>
            Your Mood Before Journal - Range is all of time right now{" "}
          </Text>
          <PieChart width={550} height={225}>
            <Pie
              data={preMoodData}
              dataKey="percentage"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
              label
            />
          </PieChart>
        </div>
        <div>
          <Text>Your Mood After Journal - Range is all of time right now</Text>
          <PieChart width={550} height={225}>
            <Pie
              data={postMoodData}
              dataKey="percentage"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </div>
      </div>

      <Text>Breakdown of Number of Questions</Text>
      <PieChart width={550} height={225}>
        <Pie
          data={graphData}
          dataKey="num_questions"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default PieGraphComponent;
