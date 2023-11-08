"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@/app/contexts/UserContext";
import { cutTimestamp } from "../../helper/cuttimestamp";
import { Text } from "@chakra-ui/react";
import { BarChart, CartesianGrid, YAxis, XAxis, Bar, Legend } from "recharts";

interface DataEntry {
  emotion_pre: number;
  emotion_post: number;
  num_questions: number;
  timestamp: string;
}
const BarGraphComponent: React.FC = () => {
  const [graphData, setGraphData] = useState<DataEntry[]>([]);
  const [data, setData] = useState<DataEntry[]>([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setData(cutTimestamp(graphData));
  }, [graphData]);

  useEffect(() => {
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis domain={[0, 6]} />
      <Bar dataKey="emotion_pre" fill="#2c0bd4" />
      <Bar dataKey="emotion_post" fill="#82ca9d" />
    </BarChart>;
  }, [data]);

  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis domain={[0, 6]} />
      <Bar dataKey="emotion_pre" fill="#2c0bd4" />
      <Bar dataKey="emotion_post" fill="#82ca9d" />
      <Legend />
    </BarChart>
  );
};

export default BarGraphComponent;
