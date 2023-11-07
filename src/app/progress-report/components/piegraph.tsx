"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@/app/contexts/UserContext";
import { PieChart, Pie, Cell, Label } from "recharts";
import {
  Box,
  Flex,
  Text,
  SimpleGrid,
} from '@chakra-ui/react';
import { text } from "stream/consumers";
// Define an array of colors for the pie chart segments
const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#0088FE", "#00C49F"];

interface PieGraphProps {
  emotion_post: string;
  emotion_pre: string;
  timestamp: Date;
  num_questions: number;
}

interface CustomLabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percentage: number;
  name: string;
}

const PieGraphComponent: React.FC = () => {
  const [graphData, setGraphData] = useState([]);
  const [preMoodData, setPreMoodData] = useState<
    { name: string; value: number; percentage: number }[]
  >([]);
  const [postMoodData, setPostMoodData] = useState<
    { name: string; value: number; percentage: number }[]
  >([]);

  const [questionData, setQuestionData] = useState<
    { name: string; amountclicked: number; percentage: number }[]
  >([]);

  //const { userId } = useUser();
  const userId = "57";

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

  // Show % for each section of the pie chart
  const CustomLabel: React.FC<CustomLabelProps> = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percentage,
    name
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    let textContent = "";

    if (["1", "3", "5"].includes(name) && percentage != 0) {
      textContent = `Num_Ques ${name} - ${percentage}%`;
    }

    else if (!["1", "3", "5"].includes(name) && percentage != 0) {
      textContent = `${name} - ${percentage}%`;
    }

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
      >
        {textContent}
      </text>
    );
  }



  const sortQuestionData = () => {
    const questionsAnalytics: {
      name: string;
      amountclicked: number;
      percentage: number;
    }[] = [
        { name: "1", amountclicked: 0, percentage: 0 },
        { name: "3", amountclicked: 0, percentage: 0 },
        { name: "5", amountclicked: 0, percentage: 0 },
      ];

    graphData.forEach((item: PieGraphProps) => {
      const chosenNumQuestions = item.num_questions;

      if (chosenNumQuestions === 1 || chosenNumQuestions === 3 || chosenNumQuestions === 5) {
        const index = questionsAnalytics.findIndex((q) => q.name === chosenNumQuestions.toString());

        if (index !== -1) {
          questionsAnalytics[index].amountclicked++;
        }
      }
    });

    // Calculate percentages and average
    const totalClicked = questionsAnalytics.reduce((total, question) => total + question.amountclicked, 0);
    questionsAnalytics.forEach((question) => {
      question.percentage = (question.amountclicked / totalClicked) * 100;
    });


    // Update the state after processing the graphData
    setQuestionData(questionsAnalytics);
  };

  const sortMoodData = () => {
    const totalEntries = graphData.length;

    const moodLabels = [
      "Extremely Upset",
      "Quite Upset",
      "Neutral",
      "Happy",
      "Extremely Happy",
    ];

    const updatedPreMoodData: {
      name: string;
      value: number;
      percentage: number;
    }[] = moodLabels.map((label) => ({ name: label, value: 0, percentage: 0 }));

    const updatedPostMoodData: {
      name: string;
      value: number;
      percentage: number;
    }[] = moodLabels.map((label) => ({ name: label, value: 0, percentage: 0 }));

    graphData.forEach((item: PieGraphProps) => {
      const preMoodScore = parseInt(item.emotion_pre, 10);
      const postMoodScore = parseInt(item.emotion_post, 10);

      if (preMoodScore >= 1 && preMoodScore <= 5) {
        updatedPreMoodData[preMoodScore - 1].value++;
      }

      if (postMoodScore >= 1 && postMoodScore <= 5) {
        updatedPostMoodData[postMoodScore - 1].value++;
      }

      // Calculate percentages
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
    sortMoodData();
    sortQuestionData();
  }, [graphData]);

  const MoodLegend = () => {
    const legendItems = preMoodData.map((entry, index) => (
      <div
        key={`legend-item-${index}`}
        style={{ display: "flex", alignItems: "center" }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            backgroundColor: COLORS[index % COLORS.length],
          }}
        />
        <span style={{ marginLeft: 8 }}>{entry.name}</span>
      </div>
    ));

    return (
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
        <div style={{ fontSize: 16, marginBottom: 8 }}>Mood Legend</div>
        {legendItems}
      </div>
    );
  };

  return (
    <>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px">
          {/* Graph 1 Section */}
          <Box>
            <Text>Your Mood Before Journal - Range is all of time right now</Text>
            <PieChart width={550} height={225}>
              <Pie
                data={preMoodData}
                outerRadius={100}
                cx="50%"
                cy="50%"
                dataKey="percentage"
                label={CustomLabel}
              >
                {preMoodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </Box>

          {/* Graph 2 Section */}
          <Box>
            <Text>Your Mood After Journal - Range is all of time right now</Text>
            <PieChart width={550} height={225}>
              <Pie
                data={postMoodData}
                dataKey="percentage"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={CustomLabel}
              >
                {postMoodData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </Box>
        </SimpleGrid>

        {/* Mood Legend Section */}
        <Box justifyContent="left" textAlign="left">
          {MoodLegend()}
        </Box>

        {/* Graph 3 Section (Centered) */}
        <Flex justifyContent="center" textAlign="center" marginTop="10px">
          <Box>
            <Text>Breakdown of Number of Questions</Text>
            <PieChart width={550} height={225}>
              <Pie
                data={questionData}
                dataKey="amountclicked"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={CustomLabel}
              >
                {questionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default PieGraphComponent;
