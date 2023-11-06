'use client';

import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useUser } from "@/app/contexts/UserContext";
import { Text, Select, Box } from '@chakra-ui/react';
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Bar, } from 'recharts';

interface BarGraphProps {
  timestamp: Date
  num_questions: string,
}

const BarGraphComponent: React.FC = () => {

  const [graphData, setGraphData] = useState([]);
  const [formatedData, setFormatedData] = useState<{ numDate: String, name: String, value: string }[]>([]);
  const [graphDates, setGraphDates] = useState([]);

  // const { userId } = useUser();
  const userId = "57";

  const fetchData = () => {
    axios.get('/api/journals/', { params: { userId } })
      .then(response => {
        setGraphData(response.data.journals);
      })
      .catch(error => {
        console.error('Error:', error);
      })
  };

  const sortQuestionData = () => {

    const updatedQuestionsData: { numDate: String, name: string, questions: string }[] = [];


    graphData.forEach((item: BarGraphProps) => {

      // Strip out the useless junk from timestamp
      let dateObject = new Date(item.timestamp);
      const formatDate = dateObject.toLocaleDateString();

      if (item.num_questions == "1" && item.num_questions != null) {
        updatedQuestionsData.push({
          numDate: formatDate,
          name: "Choose 1 Question",
          questions: item.num_questions,
        });
      }

      if (item.num_questions == "3" && item.num_questions != null) {
        updatedQuestionsData.push({
          numDate: formatDate,
          name: "Choose 3 Question",
          questions: item.num_questions,
        });
      }

      if (item.num_questions == "5" && item.num_questions != null) {
        updatedQuestionsData.push({
          numDate: formatDate,
          name: "Choose 5 Question",
          questions: item.num_questions,
        });
      }

      setFormatedData(updatedQuestionsData);

    })
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // extract dates
    sortQuestionData();
  }, [graphData]);

  return (
    <Box>

      <Select width="30" background="white"
        placeholder='Select a month' >
          <option>dd</option>
      </Select>

      <Select placeholder='Select a year' background="white">
          <option>dd</option>
      </Select>

      <Text>Number of Questions You Asked - Range: all of time  </Text>

      <BarChart width={730} height={250} data={formatedData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="numDate"  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="questions" fill="#8884d8" />
      </BarChart>

    </Box>
  );
}

export default BarGraphComponent;
