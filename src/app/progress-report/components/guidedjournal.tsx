"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import * as style from "../../styles/progress-report";
import { useUser } from "../../contexts/UserContext";
import { countQuestionsByDate } from "../../helper/countquestionsbydate";

import {
  Button,
  Text,
  GridItem,
  Grid,
  VStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import { EditIcon, ChatIcon, CalendarIcon } from "@chakra-ui/icons";

interface InitialProps {
  setStep: (step: number) => void;
}

const GuidedJournal: React.FC<InitialProps> = ({ setStep }) => {
  const { userId } = useUser();
  const [data, setData] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState<{
    [key: string]: number;
  }>({});
  const [selectedItem, setSelectedItem] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedItem(event.target.value);
  };

  const journal = async () => {
    try {
      const response = await axios.get("/api/journals", {
        params: { userId },
      });
      setData(response.data.journals);
    } catch (error) {
      // Handle errors, e.g., show an alert or set an error state
      console.error("Login error:", error);
    }
  };

  useEffect(() => {
    if (userId) {
      journal();
    }
  }, [userId]);

  useEffect(() => {
    console.log(data);
    setNumOfQuestions(countQuestionsByDate(data));
  }, [data]);

  useEffect(() => {
    setSelectedItem(Object.keys(numOfQuestions)[0]);
  }, [numOfQuestions]);

  return (
    <form>
      <Grid
        sx={style.styling.grid}
        templateAreas={`
      "title title"
      "Option Data"
    `}
      >
        {/* TITLE */}
        <GridItem
          pl="2"
          border="3px solid #D0A2D1"
          area="title"
          background="#2D3258"
          height="70px"
        >
          <Text sx={style.styling.taxtHeader}>
            Progress Report: Guided Journal
          </Text>
        </GridItem>

        {/* OPTION SECTION */}
        <GridItem
          borderInlineStart="3px solid #D0A2D1"
          borderBlockEnd="3px solid #D0A2D1"
          borderInlineEnd="3px solid #D0A2D1"
          pl="2"
          pr="2"
          background="#15193B"
          area="Option"
        >
          <VStack margin="0.5em">
            <Button
              leftIcon={<EditIcon />}
              background="#737AA8"
              size="sm"
              variant="outline"
              width="100%"
              textAlign="left"
              onClick={() => setStep(1)}
            >
              Guided Journal
            </Button>
          </VStack>

          <VStack margin="0.5em">
            <Button
              leftIcon={<ChatIcon />}
              background="#737AA8"
              size="sm"
              variant="outline"
              width="100%"
              textAlign="left"
              onClick={() => setStep(2)}
            >
              CBT Chat
            </Button>
          </VStack>
          <VStack margin="0.5em">
            <Button
              leftIcon={<CalendarIcon />}
              background="#737AA8"
              size="sm"
              variant="outline"
              width="100%"
              textAlign="left"
              onClick={() => setStep(3)}
            >
              CBT Chat Calendar
            </Button>
          </VStack>
        </GridItem>

        {/* DATA SECTION */}
        <GridItem
          pl="2"
          borderStart="3px solid #D0A2D1"
          borderEnd="3px solid #D0A2D1"
          borderTop="3px solid #D0A2D1"
          background="#15193B"
          borderInlineStart="3px solid #D0A2D1"
          borderInlineEnd="3px solid #D0A2D1"
          borderBlockEnd="3px solid #D0A2D1"
          area="Data"
          style={{
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <Flex margin="0.5em" flex="1" overflowY="auto" flexDirection="row">
            <Box
              width="50%"
              border="1px solid #D0A2D1"
              marginRight="1em"
              background="linear-gradient(180deg, #F9F2FF 0%, rgba(197, 154, 201, 0.50) 100%)"
              borderRadius="40px"
              padding="20px"
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <h2>Number of Questions Asked</h2>
                <select
                  value={selectedItem}
                  onChange={handleSelectChange}
                  style={{
                    height: "40px", // Set a fixed height
                    alignSelf: "flex-start", // Align the select element to the top
                  }}
                >
                  <option value="">Select an item</option>
                  {Object.entries(numOfQuestions).map(([key, value]) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  marginTop: "150px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="141"
                  height="142"
                  viewBox="0 0 141 142"
                  fill="none"
                >
                  <g filter="url(#filter0_d_42_986)">
                    <ellipse
                      cx="70.5035"
                      cy="66.8217"
                      rx="66.5035"
                      ry="66.8217"
                      fill="#2D3258"
                      fill-opacity="0.6"
                    />
                    <path
                      d="M135.007 66.8217C135.007 102.631 106.119 131.643 70.5035 131.643C34.8882 131.643 6 102.631 6 66.8217C6 31.0127 34.8882 2 70.5035 2C106.119 2 135.007 31.0127 135.007 66.8217Z"
                      stroke="#15193B"
                      stroke-opacity="0.6"
                      stroke-width="4"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_42_986"
                      x="0"
                      y="0"
                      width="141.007"
                      height="141.644"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_42_986"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_42_986"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <p
                  style={{
                    position: "absolute",
                    margin: 0,
                    marginTop: "55px",
                    textAlign: "center",
                  }}
                >
                  {numOfQuestions[selectedItem]}
                </p>
              </div>
            </Box>

            <Box
              width="50%"
              border="1px solid #D0A2D1"
              background="linear-gradient(180deg, #F9F2FF 0%, rgba(197, 154, 201, 0.50) 100%)"
              borderRadius="40px"
            >
              {/* Content of the second box */}
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </form>
  );
};

export default GuidedJournal;
