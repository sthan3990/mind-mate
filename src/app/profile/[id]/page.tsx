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
import axios from "axios";

import { useRouter } from "next/navigation";
// import { ValidateEmail } from "../../helper/validateEmail";

const UserProfilePage = () => {
  const { push } = useRouter();
  const [userData, setUserData] = useState({ "first_name": "", "last_name": "", "email": "" });
  const [loading, setLoading] = useState(true);

  const [userId, setUserId] = useState(localStorage.getItem("User") || "");

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

  const [updatedFirstName, setUpdatedFirstName] = useState("");
  const [updatedLastName, setUpdatedLastName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");

  useEffect(() => {
    setUpdatedFirstName(userData["first_name"]);
    setUpdatedEmail(userData["last_name"]);
    setUpdatedLastName(userData["email"]);
  }, [userData]);

  const handleUpdate = (
    updatedFirstName: string,
    updatedLastName: string,
    updatedEmail: string
  ) => {
    axios
      .patch("/api/get-user-profile", {
        first_name: updatedFirstName,
        last_name: updatedLastName,
        email: updatedEmail,
        userId: userId,
      })
      .then((res) => {
        console.log(res);
        push(`/profile/${userId}`);
      });
  };

  const deleteUser = (userId: string) => {
    const isConfirmed = window.confirm("Are you sure you want to delete your account?");

    if (isConfirmed) {
      axios
        .delete("/api/get-user-profile", { data: { userId: userId } })
        .then((res) => {
          console.log(res);
          push("/register");
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
            <Button mt={4} colorScheme="teal" onClick={() => handleUpdate(updatedFirstName, updatedLastName, updatedEmail)}>
              Edit User Details
            </Button>
            <Button colorScheme="red" onClick={() => deleteUser(userId)}>
              Delete Account
            </Button>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  );
};

export default UserProfilePage;
