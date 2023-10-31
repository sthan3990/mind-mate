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
  Input,
  useToast,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const UserProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [updatedFirstName, setUpdatedFirstName] = useState("");
  const [updatedLastName, setUpdatedLastName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");

  const toast = useToast();

  const userId = localStorage.getItem("User");

  console.log("page userInfo is: ", userId);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(`/api/get-user-profile?userId=${userId}`);
        const data = await response.json();
        setUserData(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user dataa:", error);
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/get-user-profile?userId=${userId}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: updatedFirstName,
          last_name: updatedLastName,
          email: updatedEmail,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user details');
      }

      const updatedData = await response.json();
      setUserData(updatedData);

      console.log("updatedData in handleupdate func: ", updatedData);

      toast({
        title: "Profile Updated",
        description: "Your profile details have been updated.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!userData) {
    return <Text>No user logged in!</Text>;
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            User Profile Settings
          </Heading>
          <Text fontSize={"lg"} color="white">
            Welcome {userData["first_name"]} {userData["last_name"]}
          </Text>
        </Stack>
        <Box rounded={"lg"} bg="black" boxShadow={"lg"} p={8}>
          <Stack spacing={6}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                placeholder={userData["first_name"]}
                value={updatedFirstName}
                onChange={(e) => setUpdatedFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                placeholder={userData["last_name"]}
                value={updatedLastName}
                onChange={(e) => setUpdatedLastName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder={userData["email"]}
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
              />
            </FormControl>
            <Button mt={4} colorScheme="teal" onClick={handleUpdate}>
              Submit Changes
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default UserProfilePage;
