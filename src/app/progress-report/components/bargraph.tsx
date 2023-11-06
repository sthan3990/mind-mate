"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@/app/contexts/UserContext";
import { Text } from "@chakra-ui/react";
import { BarChart, CartesianGrid, YAxis, XAxis, Bar } from "recharts";

interface BarGraphProps {
  emotion_post: string;
  emotion_pre: string;
  timestamp: Date;
}

const BarGraphComponent: React.FC = () => {
  const [graphData, setGraphData] = useState([]);

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
    <BarChart width={730} height={250} data={graphData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timespan" />
      <YAxis />
      <Bar dataKey="emotion_pre" fill="#8884d8" />
      <Bar dataKey="emotion_post" fill="#82ca9d" />
    </BarChart>;
  }, [graphData]);

  return (
    <BarChart width={730} height={250} data={graphData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timespan" />
      <YAxis />
      <Bar dataKey="emotion_pre" fill="#8884d8" />
      <Bar dataKey="emotion_post" fill="#82ca9d" />
    </BarChart>
  );
};

export default BarGraphComponent;
