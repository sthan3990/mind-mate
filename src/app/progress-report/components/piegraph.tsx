"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@/app/contexts/UserContext";
import { Text } from "@chakra-ui/react";
import { PieChart, Pie, Cell } from "recharts";

// Define an array of colors for the pie chart segments
const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#0088FE", "#00C49F"];

interface PieGraphProps {
  emotion_post: string;
  emotion_pre: string;
  timestamp: Date;
  num_questions: number;
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
    sortData();
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
              label
            >
              {preMoodData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          {preMoodData.map((entry, index) => (
            <text
              x={entry.percentage > 0 ? "50%" : "0%"}
              y={entry.percentage > 0 ? "0%" : "50%"}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              key={`text-${index}`}
            ></text>
          ))}
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
              label
            >
              {postMoodData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          {postMoodData.map((entry, index) => (
            <text
              x={entry.percentage > 0 ? "50%" : "0%"}
              y={entry.percentage > 0 ? "0%" : "50%"}
              textAnchor="middle"
              fill="white"
              fontSize="12"
              key={`text-${index}`}
            ></text>
          ))}
        </div>
      </div>
      <div
        style={{
          paddingTop: "20px",
          display: "flex",
        }}
      >
        <div>
          <Text>Breakdown of Number of Questions</Text>
          <PieChart width={550} height={225}>
            <Pie
              data={graphData}
              dataKey="num_questions"
              cx="50%"
              cy="50%"
              outerRadius={50}
              label
            >
              {graphData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div
          style={{
            margin: "30px",
          }}
        >
          {MoodLegend()}
        </div>
      </div>
    </div>
  );
};

export default PieGraphComponent;
