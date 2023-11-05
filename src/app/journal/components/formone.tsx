import React, { useState } from 'react';
import { Box, Button, HStack, Stack, Text } from '@chakra-ui/react';
import { fonts } from '@/theme/fonts';

interface FormOneProps {
  setpreMoodState: (moodChosen: number) => void;
}

const styling = {
  textStyling: {
    fontWeight: 'bold',
    fontSize: '40px',
    color: '#FFFFFF',
    width: '100%',
    maxWidth: '743.11px',
    textAlign: 'center',
    paddingTop: '100px',
  },
};

const FormOne: React.FC<FormOneProps> = ({ setpreMoodState }) => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [hoveredMood, setHoveredMood] = useState<number | null>(null);

  const handleSelectMood = (mood: number) => {
    setSelectedMood(mood);
    setpreMoodState(mood);
  };

  const isSelected = (mood: number) => {
    const result = selectedMood === mood;
    console.log(`Is mood ${mood} selected?`, result); // Logs the result of the isSelected call for the mood
    return result;
  };

  console.log("selectedMood: ", selectedMood);

  return (
    <Stack
      width="80%"
      height="48vh"
      background="#15193B"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="space-between"
      marginBottom="3em"
    >
      <Box>
        <Text sx={styling.textStyling} fontFamily={fonts.cantarell}>
          Tap on the Emoji that Best Captures Your Current Emotion.
        </Text>
      </Box>

      <Box>
        <Text
          marginTop="-1em"
          fontFamily={fonts.cantarell}
          fontWeight="semibolditalic"
          fontSize="24px"
          letterSpacing="-0.03em"
          fontStyle="italic"
          color="#CEB1CE"
          width="100%"
          maxWidth="973px"
          textAlign="center"
        >
          {"Let's see where you're at right now!"}
        </Text>
      </Box>

      <Box>
        <HStack spacing="5" align="center">
          {[1, 2, 3, 4, 5].map((mood) => (

            <Box
              key={mood}
              onMouseEnter={() => setHoveredMood(mood)}
              onMouseLeave={() => setHoveredMood(null)}
            >
              <Button
                variant="unstyled"
                onClick={() => handleSelectMood(mood)}
              // _hover={{
              //   backgroundColor: '#D0A2D1',
              // }}
              >
                <svg
                  width="139"
                  height="139"
                  viewBox="0 0 139 139"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  {/* Include your SVG for each emoji, conditional upon 'mood' */}
                  {/* The following is a placeholder example for mood 1 */}
                  {mood === 1 && (
                    <>
                      <path
                        d="M136.377 69.3464C136.377 106.55 106.364 136.693 69.3609 136.693C32.3579 136.693 2.34473 106.55 2.34473 69.3464C2.34473 32.143 32.3579 2 69.3609 2C106.364 2 136.377 32.143 136.377 69.3464Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <path
                        d="M69.6589 114.853C94.8091 114.853 115.197 94.4647 115.197 69.3145C115.197 44.1643 94.8091 23.7761 69.6589 23.7761C44.5087 23.7761 24.1204 44.1643 24.1204 69.3145C24.1204 94.4647 44.5087 114.853 69.6589 114.853Z"
                        fill="url(#paint0_linear_1_990)"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M54.4363 77.7817C56.4327 75.7837 58.8035 74.1986 61.4127 73.1172C64.022 72.0358 66.8189 71.4792 69.6434 71.4792C72.468 71.4792 75.2643 72.0358 77.8736 73.1172C80.4829 74.1986 82.8537 75.7837 84.8501 77.7817"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M48.2392 53.0053H91.0796"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M57.4955 58.7968C58.9674 58.7968 60.1607 57.6036 60.1607 56.1316C60.1607 54.6597 58.9674 53.4664 57.4955 53.4664C56.0236 53.4664 54.8303 54.6597 54.8303 56.1316C54.8303 57.6036 56.0236 58.7968 57.4955 58.7968Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M79.0371 58.7196C80.5091 58.7196 81.7023 57.5263 81.7023 56.0544C81.7023 54.5825 80.5091 53.3892 79.0371 53.3892C77.5652 53.3892 76.3719 54.5825 76.3719 56.0544C76.3719 57.5263 77.5652 58.7196 79.0371 58.7196Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_990"
                          x1="69.6589"
                          y1="23.7761"
                          x2="69.6589"
                          y2="114.853"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.477265" stopColor="#FF7575" />
                          <stop offset="1" stopColor="#FF9F00" />
                        </linearGradient>
                      </defs>
                    </>
                  )}
                  {/* The following is a placeholder example for mood 2 */}
                  {mood === 2 && (
                    <>
                      <path
                        d="M136.433 69.3464C136.433 106.55 106.42 136.693 69.4168 136.693C32.4138 136.693 2.40063 106.55 2.40063 69.3464C2.40063 32.143 32.4138 2 69.4168 2C106.42 2 136.433 32.143 136.433 69.3464Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <path
                        d="M69.7151 114.853C94.8653 114.853 115.254 94.4647 115.254 69.3145C115.254 44.1643 94.8653 23.7761 69.7151 23.7761C44.5649 23.7761 24.1766 44.1643 24.1766 69.3145C24.1766 94.4647 44.5649 114.853 69.7151 114.853Z"
                        fill="url(#paint0_linear_1_998)"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M60.3705 73.1314C61.6664 72.436 63.2053 71.8843 64.899 71.5079C66.5927 71.1315 68.4083 70.9378 70.2417 70.9378C72.0751 70.9378 73.8903 71.1315 75.584 71.5079C77.2778 71.8843 78.8167 72.436 80.1126 73.1314"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M58.8564 58.6424C60.3283 58.6424 61.5216 57.4491 61.5216 55.9772C61.5216 54.5053 60.3283 53.312 58.8564 53.312C57.3844 53.312 56.1912 54.5053 56.1912 55.9772C56.1912 57.4491 57.3844 58.6424 58.8564 58.6424Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M79.0934 58.6424C80.5653 58.6424 81.7586 57.4491 81.7586 55.9772C81.7586 54.5053 80.5653 53.312 79.0934 53.312C77.6214 53.312 76.4282 54.5053 76.4282 55.9772C76.4282 57.4491 77.6214 58.6424 79.0934 58.6424Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_998"
                          x1="69.7151"
                          y1="23.7761"
                          x2="69.7151"
                          y2="114.853"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFA51E" />
                          <stop offset="1" stopColor="#FFCD1E" />
                        </linearGradient>
                      </defs>
                    </>
                  )}
                  {/* The following is a placeholder example for mood 3 */}
                  {mood === 3 && (
                    <>
                      <path
                        d="M136.489 69.3464C136.489 106.55 106.476 136.693 69.4727 136.693C32.4697 136.693 2.45654 106.55 2.45654 69.3464C2.45654 32.143 32.4697 2 69.4727 2C106.476 2 136.489 32.143 136.489 69.3464Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <path
                        d="M69.7707 114.853C94.9209 114.853 115.309 94.4647 115.309 69.3145C115.309 44.1643 94.9209 23.7761 69.7707 23.7761C44.6205 23.7761 24.2322 44.1643 24.2322 69.3145C24.2322 94.4647 44.6205 114.853 69.7707 114.853Z"
                        fill="#FFE500"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M65.2631 68.9965H74.2786"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M58.912 58.6424C60.3839 58.6424 61.5771 57.4491 61.5771 55.9772C61.5771 54.5053 60.3839 53.312 58.912 53.312C57.44 53.312 56.2468 54.5053 56.2468 55.9772C56.2468 57.4491 57.44 58.6424 58.912 58.6424Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M77.3497 58.7196C78.8216 58.7196 80.0148 57.5263 80.0148 56.0544C80.0148 54.5825 78.8216 53.3892 77.3497 53.3892C75.8777 53.3892 74.6845 54.5825 74.6845 56.0544C74.6845 57.5263 75.8777 58.7196 77.3497 58.7196Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </>
                  )}
                  {/* The following is a placeholder example for mood 4 */}
                  {mood === 4 && (
                    <>
                      <path
                        d="M136.545 69.3464C136.545 106.55 106.532 136.693 69.5286 136.693C32.5256 136.693 2.51245 106.55 2.51245 69.3464C2.51245 32.143 32.5256 2 69.5286 2C106.532 2 136.545 32.143 136.545 69.3464Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <path
                        d="M69.8266 114.853C94.9768 114.853 115.365 94.4647 115.365 69.3145C115.365 44.1643 94.9768 23.7761 69.8266 23.7761C44.6764 23.7761 24.2881 44.1643 24.2881 69.3145C24.2881 94.4647 44.6764 114.853 69.8266 114.853Z"
                        fill="url(#paint0_linear_1_1012)"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M75.8369 70.9376C75.0449 71.2853 74.1045 71.5612 73.0694 71.7493C72.0344 71.9375 70.9249 72.0344 69.8045 72.0344C68.684 72.0344 67.5747 71.9375 66.5397 71.7493C65.5046 71.5612 64.5642 71.2853 63.7722 70.9376"
                        fill="white"
                      />
                      <path
                        d="M75.8369 70.9376C75.0449 71.2853 74.1045 71.5612 73.0694 71.7493C72.0344 71.9375 70.9249 72.0344 69.8045 72.0344C68.684 72.0344 67.5747 71.9375 66.5397 71.7493C65.5046 71.5612 64.5642 71.2853 63.7722 70.9376"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M58.9573 58.6424C60.4293 58.6424 61.6225 57.4491 61.6225 55.9772C61.6225 54.5053 60.4293 53.312 58.9573 53.312C57.4854 53.312 56.2921 54.5053 56.2921 55.9772C56.2921 57.4491 57.4854 58.6424 58.9573 58.6424Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M79.2046 58.6424C80.6765 58.6424 81.8698 57.4491 81.8698 55.9772C81.8698 54.5053 80.6765 53.312 79.2046 53.312C77.7326 53.312 76.5394 54.5053 76.5394 55.9772C76.5394 57.4491 77.7326 58.6424 79.2046 58.6424Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_1012"
                          x1="69.8266"
                          y1="23.7761"
                          x2="69.8266"
                          y2="114.853"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.326022" stopColor="#2298FF" />
                          <stop offset="0.734375" stopColor="#47BDFF" />
                        </linearGradient>
                      </defs>
                    </>
                  )}
                  {/* The following is a placeholder example for mood 5 */}
                  {mood === 5 && (
                    <>
                      <path
                        d="M136.601 69.3464C136.601 106.55 106.588 136.693 69.5845 136.693C32.5815 136.693 2.56836 106.55 2.56836 69.3464C2.56836 32.143 32.5815 2 69.5845 2C106.588 2 136.601 32.143 136.601 69.3464Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="4"
                      />
                      <path
                        d="M69.8828 114.853C95.033 114.853 115.421 94.4647 115.421 69.3145C115.421 44.1643 95.033 23.7761 69.8828 23.7761C44.7326 23.7761 24.3443 44.1643 24.3443 69.3145C24.3443 94.4647 44.7326 114.853 69.8828 114.853Z"
                        fill="url(#paint0_linear_1_1019)"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M85.1392 69.3144C83.1428 71.3124 80.772 72.8975 78.1627 73.9789C75.5534 75.0604 72.7565 75.617 69.932 75.617C67.1075 75.617 64.3112 75.0604 61.7019 73.9789C59.0926 72.8975 56.7218 71.3124 54.7254 69.3144"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M85.1392 69.3144C83.1428 71.3124 80.772 72.8975 78.1627 73.9789C75.5534 75.0604 72.7565 75.617 69.932 75.617C67.1075 75.617 64.3112 75.0604 61.7019 73.9789C59.0926 72.8975 56.7218 71.3124 54.7254 69.3144"
                        stroke="black"
                        strokeOpacity="0.2"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M59.0133 58.6424C60.4852 58.6424 61.6784 57.4491 61.6784 55.9772C61.6784 54.5053 60.4852 53.312 59.0133 53.312C57.5413 53.312 56.3481 54.5053 56.3481 55.9772C56.3481 57.4491 57.5413 58.6424 59.0133 58.6424Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M79.2608 58.6424C80.7327 58.6424 81.926 57.4491 81.926 55.9772C81.926 54.5053 80.7327 53.312 79.2608 53.312C77.7888 53.312 76.5956 54.5053 76.5956 55.9772C76.5956 57.4491 77.7888 58.6424 79.2608 58.6424Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1_1019"
                          x1="69.8828"
                          y1="23.7761"
                          x2="69.8828"
                          y2="114.853"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.046875" stopColor="#00D1C5" />
                          <stop offset="1" stopColor="#5FE452" />
                        </linearGradient>
                      </defs>
                    </>
                  )}
                  {/* Conditional rendering of the selection circle */}
                  {isSelected(mood) && (
                    <circle
                      cx="69.5"
                      cy="69.5"
                      r="67"
                      fill="none"
                      stroke="#FE8F55E5" // Adjust this color to match your theme
                      strokeWidth="5"
                    />
                  )}
                  {!isSelected(mood) && hoveredMood === mood && (
                    <circle
                      cx="69.5"
                      cy="69.5"
                      r="67"
                      fill="none"
                      stroke="#D0A2D1" // This color for hovered mood
                      strokeWidth="5"
                    />
                  )}
                </svg>
              </Button>
            </Box>
          ))}
        </HStack>
      </Box>
    </Stack>
  );
};

export default FormOne;