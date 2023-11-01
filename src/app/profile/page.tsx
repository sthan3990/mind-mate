"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Text,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import { useState, useEffect, } from "react";
import { useRouter } from 'next/router';


const UserProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const userId = useRouter().query.id;
  // console.log(userId);

  useEffect(() => {

    // Fetch user data based on userId when component mounts
    async function fetchUserData() {

      try {
        const response = await fetch(`/api/user-profile?userId=1`);
        console.log("response is ", response);
        const data = await response.json();
        console.log("after teh response.json")
        console.log("the data is ", data);
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!userData) {
    return <Text>No user logged in!</Text>;
  }

  return (
    <p>hello, no user signed in</p>
    // <Flex minH={"100vh"} align={"center"} justify={"center"}>
    //   <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
    //     <Stack align={"center"}>
    //       <Heading fontSize={"4xl"} textAlign={"center"}>
    //         User Profile
    //       </Heading>
    //       <Text fontSize={"lg"} color="white">
    //         Welcome {userData.first_name} {userData.last_name}
    //       </Text>
    //     </Stack>
    //     <Box rounded={"lg"} bg="black" boxShadow={"lg"} p={8}>
    //       <Stack spacing={6}>
    //         <FormControl>
    //           <FormLabel>First Name</FormLabel>
    //           <Text>{userData.first_name}</Text>
    //         </FormControl>
    //         <FormControl>
    //           <FormLabel>Last Name</FormLabel>
    //           <Text>{userData.last_name}</Text>
    //         </FormControl>
    //         <FormControl>
    //           <FormLabel>Email</FormLabel>
    //           <Text>{userData.email}</Text>
    //         </FormControl>
    //       </Stack>
    //     </Box>
    //   </Stack>
    // </Flex>
  );
};

export default UserProfilePage;