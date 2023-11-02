'use client';

import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import PieChartComponent from './components/piechart';
import { Text } from '@chakra-ui/react';

function GraphPage() {
  const [graphData, setGraphData] = useState([]);

  // Read the CSV file and parse the data
  useEffect(() => {
    Papa.parse('/graph/data.csv', {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: (result) => {

        setGraphData(result.data);
      },
    });
  }, []);

  return (
     <PieChartComponent graphData={graphData} />
  );
}

export default GraphPage;
