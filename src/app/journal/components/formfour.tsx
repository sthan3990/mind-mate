"use client";

import { useState } from "react";
import {
  HStack,
  Heading,
  Text,
  Select
} from "@chakra-ui/react";

import { fonts } from "@/theme/fonts";

interface FormOneProps {
  responseOne: (mood: string) => void; 
}

export const FormOne: React.FC<FormOneProps> = ({ responseOne }) => {
  const [selectedImage, setSelectedImage] = useState<string>("");

  const handleMoodClick = (mood: string) => {
    setSelectedImage(mood);
    responseOne(mood);
  };

  return (
    <>
      <Heading w="100%" textAlign={"center"} fontStyle={fonts.journal} fontSize='40px' mb="5%">
        Tap on the emoji that best captures your current emotion.
      </Heading>
      
      <Text textAlign={"center"} fontStyle={fonts.journal} fontSize='20px' mb="5%">Let&#39;s see where you&#39;re at right now!</Text>

      <HStack justifyContent="space-between">

        <svg width="139" height="139" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleMoodClick("5")}>
          <path d="M136.377 69.3464C136.377 106.55 106.364 136.693 69.3609 136.693C32.3579 136.693 2.34473 106.55 2.34473 69.3464C2.34473 32.143 32.3579 2 69.3609 2C106.364 2 136.377 32.143 136.377 69.3464Z" fill="white" stroke="black" stroke-width="4" />
          <path d="M69.6588 114.853C94.809 114.853 115.197 94.4648 115.197 69.3146C115.197 44.1644 94.809 23.7761 69.6588 23.7761C44.5086 23.7761 24.1204 44.1644 24.1204 69.3146C24.1204 94.4648 44.5086 114.853 69.6588 114.853Z" fill="url(#paint0_linear_35_362)" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M54.4363 77.7818C56.4327 75.7838 58.8035 74.1987 61.4127 73.1173C64.022 72.0358 66.8189 71.4792 69.6434 71.4792C72.468 71.4792 75.2643 72.0358 77.8736 73.1173C80.4829 74.1987 82.8537 75.7838 84.8501 77.7818" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M48.2393 53.0054H91.0796" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M57.4955 58.7969C58.9674 58.7969 60.1607 57.6037 60.1607 56.1317C60.1607 54.6598 58.9674 53.4666 57.4955 53.4666C56.0236 53.4666 54.8303 54.6598 54.8303 56.1317C54.8303 57.6037 56.0236 58.7969 57.4955 58.7969Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M79.037 58.7197C80.509 58.7197 81.7022 57.5264 81.7022 56.0545C81.7022 54.5825 80.509 53.3893 79.037 53.3893C77.5651 53.3893 76.3718 54.5825 76.3718 56.0545C76.3718 57.5264 77.5651 58.7197 79.037 58.7197Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <defs>
            <linearGradient id="paint0_linear_35_362" x1="69.6588" y1="23.7761" x2="69.6588" y2="114.853" gradientUnits="userSpaceOnUse">
              <stop offset="0.477265" stop-color="#FF7575" />
              <stop offset="1" stop-color="#FF9F00" />
            </linearGradient>
          </defs>
        </svg>

        <svg width="139" height="139" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleMoodClick("4")}>
          <path d="M136.433 69.3464C136.433 106.55 106.42 136.693 69.4168 136.693C32.4138 136.693 2.40063 106.55 2.40063 69.3464C2.40063 32.143 32.4138 2 69.4168 2C106.42 2 136.433 32.143 136.433 69.3464Z" fill="white" stroke="black" stroke-width="4" />
          <path d="M69.715 114.853C94.8652 114.853 115.253 94.4648 115.253 69.3146C115.253 44.1644 94.8652 23.7761 69.715 23.7761C44.5648 23.7761 24.1765 44.1644 24.1765 69.3146C24.1765 94.4648 44.5648 114.853 69.715 114.853Z" fill="url(#paint0_linear_35_370)" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M60.3704 73.1314C61.6663 72.436 63.2052 71.8844 64.8989 71.508C66.5926 71.1316 68.4082 70.9379 70.2416 70.9379C72.075 70.9379 73.8902 71.1316 75.5839 71.508C77.2777 71.8844 78.8166 72.436 80.1125 73.1314" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M58.8563 58.6424C60.3283 58.6424 61.5215 57.4491 61.5215 55.9772C61.5215 54.5053 60.3283 53.312 58.8563 53.312C57.3844 53.312 56.1912 54.5053 56.1912 55.9772C56.1912 57.4491 57.3844 58.6424 58.8563 58.6424Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M79.0934 58.6424C80.5653 58.6424 81.7586 57.4491 81.7586 55.9772C81.7586 54.5053 80.5653 53.312 79.0934 53.312C77.6215 53.312 76.4282 54.5053 76.4282 55.9772C76.4282 57.4491 77.6215 58.6424 79.0934 58.6424Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <defs>
            <linearGradient id="paint0_linear_35_370" x1="69.715" y1="23.7761" x2="69.715" y2="114.853" gradientUnits="userSpaceOnUse">
              <stop stop-color="#FFA51E" />
              <stop offset="1" stop-color="#FFCD1E" />
            </linearGradient>
          </defs>
        </svg>

        <svg width="139" height="139" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleMoodClick("3")}>
          <path d="M136.489 69.3464C136.489 106.55 106.476 136.693 69.4727 136.693C32.4697 136.693 2.45654 106.55 2.45654 69.3464C2.45654 32.143 32.4697 2 69.4727 2C106.476 2 136.489 32.143 136.489 69.3464Z" fill="white" stroke="black" stroke-width="4" />
          <path d="M69.7709 114.853C94.9211 114.853 115.309 94.4648 115.309 69.3146C115.309 44.1644 94.9211 23.7761 69.7709 23.7761C44.6207 23.7761 24.2324 44.1644 24.2324 69.3146C24.2324 94.4648 44.6207 114.853 69.7709 114.853Z" fill="#FFE500" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M65.2632 68.9966H74.2787" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M58.9123 58.6424C60.3842 58.6424 61.5774 57.4491 61.5774 55.9772C61.5774 54.5053 60.3842 53.312 58.9123 53.312C57.4403 53.312 56.2471 54.5053 56.2471 55.9772C56.2471 57.4491 57.4403 58.6424 58.9123 58.6424Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M77.3498 58.7197C78.8217 58.7197 80.0149 57.5264 80.0149 56.0545C80.0149 54.5825 78.8217 53.3893 77.3498 53.3893C75.8778 53.3893 74.6846 54.5825 74.6846 56.0545C74.6846 57.5264 75.8778 58.7197 77.3498 58.7197Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <svg width="139" height="139" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleMoodClick("2")}>
          <path d="M136.545 69.3464C136.545 106.55 106.532 136.693 69.5289 136.693C32.5258 136.693 2.5127 106.55 2.5127 69.3464C2.5127 32.143 32.5258 2 69.5289 2C106.532 2 136.545 32.143 136.545 69.3464Z" fill="white" stroke="black" stroke-width="4" />
          <path d="M69.8271 114.853C94.9773 114.853 115.366 94.4648 115.366 69.3146C115.366 44.1644 94.9773 23.7761 69.8271 23.7761C44.6769 23.7761 24.2886 44.1644 24.2886 69.3146C24.2886 94.4648 44.6769 114.853 69.8271 114.853Z" fill="url(#paint0_linear_35_384)" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M75.8376 70.9377C75.0456 71.2854 74.1052 71.5613 73.0701 71.7495C72.0351 71.9377 70.9256 72.0345 69.8052 72.0345C68.6847 72.0345 67.5755 71.9377 66.5404 71.7495C65.5053 71.5613 64.5649 71.2854 63.7729 70.9377" fill="white" />
          <path d="M75.8376 70.9377C75.0456 71.2854 74.1052 71.5613 73.0701 71.7495C72.0351 71.9377 70.9256 72.0345 69.8052 72.0345C68.6847 72.0345 67.5755 71.9377 66.5404 71.7495C65.5053 71.5613 64.5649 71.2854 63.7729 70.9377" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M58.9577 58.6424C60.4296 58.6424 61.6228 57.4491 61.6228 55.9772C61.6228 54.5053 60.4296 53.312 58.9577 53.312C57.4857 53.312 56.2925 54.5053 56.2925 55.9772C56.2925 57.4491 57.4857 58.6424 58.9577 58.6424Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M79.2052 58.6424C80.6772 58.6424 81.8704 57.4491 81.8704 55.9772C81.8704 54.5053 80.6772 53.312 79.2052 53.312C77.7333 53.312 76.54 54.5053 76.54 55.9772C76.54 57.4491 77.7333 58.6424 79.2052 58.6424Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <defs>
            <linearGradient id="paint0_linear_35_384" x1="69.827" y1="23.7761" x2="69.827" y2="114.853" gradientUnits="userSpaceOnUse">
              <stop offset="0.326022" stop-color="#2298FF" />
              <stop offset="0.734375" stop-color="#47BDFF" />
            </linearGradient>
          </defs>
        </svg>

        <svg width="139" height="139" viewBox="0 0 139 139" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleMoodClick("1")}>
          <path d="M136.601 69.3464C136.601 106.55 106.588 136.693 69.5845 136.693C32.5815 136.693 2.56836 106.55 2.56836 69.3464C2.56836 32.143 32.5815 2 69.5845 2C106.588 2 136.601 32.143 136.601 69.3464Z" fill="white" stroke="black" stroke-width="4" />
          <path d="M69.8827 114.853C95.0329 114.853 115.421 94.4648 115.421 69.3146C115.421 44.1644 95.0329 23.7761 69.8827 23.7761C44.7325 23.7761 24.3442 44.1644 24.3442 69.3146C24.3442 94.4648 44.7325 114.853 69.8827 114.853Z" fill="url(#paint0_linear_35_391)" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M85.1389 69.3145C83.1425 71.3125 80.7717 72.8976 78.1624 73.979C75.5531 75.0604 72.7562 75.6171 69.9317 75.6171C67.1072 75.6171 64.3109 75.0604 61.7016 73.979C59.0923 72.8976 56.7215 71.3125 54.7251 69.3145" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M85.1389 69.3145C83.1425 71.3125 80.7717 72.8976 78.1624 73.979C75.5531 75.0604 72.7562 75.6171 69.9317 75.6171C67.1072 75.6171 64.3109 75.0604 61.7016 73.979C59.0923 72.8976 56.7215 71.3125 54.7251 69.3145" stroke="black" stroke-opacity="0.2" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M59.0133 58.6424C60.4853 58.6424 61.6785 57.4491 61.6785 55.9772C61.6785 54.5053 60.4853 53.312 59.0133 53.312C57.5414 53.312 56.3481 54.5053 56.3481 55.9772C56.3481 57.4491 57.5414 58.6424 59.0133 58.6424Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M79.2609 58.6424C80.7328 58.6424 81.9261 57.4491 81.9261 55.9772C81.9261 54.5053 80.7328 53.312 79.2609 53.312C77.7889 53.312 76.5957 54.5053 76.5957 55.9772C76.5957 57.4491 77.7889 58.6424 79.2609 58.6424Z" fill="black" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <defs>
            <linearGradient id="paint0_linear_35_391" x1="69.8827" y1="23.7761" x2="69.8827" y2="114.853" gradientUnits="userSpaceOnUse">
              <stop offset="0.046875" stop-color="#00D1C5" />
              <stop offset="1" stop-color="#5FE452" />
            </linearGradient>
          </defs>
        </svg>

      </HStack>

    </>
  );
}; 