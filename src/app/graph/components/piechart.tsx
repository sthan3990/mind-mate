'use client';

import { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface DataItem {
  label: string;
  value: number;
  Mood_Score: string;
  moodCategory: string;
}

interface PieChartProps {
  graphData: DataItem[];
}

const PieChartComponent: React.FC<PieChartProps> = ({ graphData }) => {

  const [moodData, setMoodData] = useState({
    "Extremely Upset": 0,
    "Quite Upset": 0,
    "Neutral": 0,
    "Happy": 0,
    "Extremely Happy": 0,
  });


  // 
  const getMoodColor = (moodCategory: string) => {
    const moodColors: { [key: string]: string } = {
      "Extremely Upset": "#FF0000", // Red
      "Quite Upset": "#FFA500", // Orange
      "Neutral": "#FFFF00", // Yellow
      "Happy": "#00FF00", // Green
      "Extremely Happy": "#0000FF", // Blue
    };
    return moodColors[moodCategory] || "#808080"; // Default to gray if category not found
  };


  useEffect(() => {
    const updatedMoodCounts = {
      "Extremely Upset": 0,
      "Quite Upset": 0,
      "Neutral": 0,
      "Happy": 0,
      "Extremely Happy": 0,
    };

    graphData.forEach((item) => {

      const moodScore = parseInt(item.Mood_Score, 10); // Convert to a number

      // Map mood scores to mood categories
      const moodCategory: { [key: string]: string } = {
        1: "Extremely Upset",
        2: "Quite Upset",
        3: "Neutral",
        4: "Happy",
        5: "Extremely Happy",
      };

      // // Check if mood score is valid
      // if (moodCategory[moodScore]) {
      //   updatedMoodCounts[moodCategory[moodScore]]++;
      // }
    });

    setMoodData(updatedMoodCounts);
  }, [graphData]);

  return (
    <Box>
      <Heading as="h1" size="xl">
        Percentage of Mood Scores
      </Heading>
      <ResponsiveContainer height={750}>
        <PieChart >
          <Pie

            data={Object.entries(moodData).map(([name, value]) => ({ name, value }))}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            // outerRadius={250}
            fill="#8884d8"
            label={({ name, value }) => `${name} - ${((value / graphData.length) * 100).toFixed(2)}%`}
          >
            {Object.entries(moodData).map(([name, entry], index) => (
              <Cell key={index} fill={getMoodColor(name)} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};


export default PieChartComponent;