'use client';

import React, { useState, useEffect } from 'react';
import Papa, {ParseResult} from 'papaparse';
import PieChartComponent from './components/piechart';

// Define the type for your CSV data structure

interface DataItem {
  // Define your CSV data structure based on your actual data
  label: string;
  value: number;
  Mood_Score: string;
  moodCategory: string;
}

function GraphPage() {
  const [graphData, setGraphData] = useState<DataItem[]>([]); // Specify the type
  // Read the CSV file and parse the data
  useEffect(() => {
    Papa.parse('/graph/data.csv', {
      header: true,
      download: true,
      dynamicTyping: true,
      complete: (result: ParseResult<DataItem>) => { 
        setGraphData(result.data);
      },
    });
  }, []);

  return (
     <PieChartComponent graphData={graphData} />
  );
}

export default GraphPage;
