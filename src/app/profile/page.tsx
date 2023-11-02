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
import { useUser } from "../contexts/UserContext";
import { useRouter } from "next/navigation";

const UserProfilePage = () => {
  const { userId } = useUser();
  console.log("context userId in beginning of profile page: ", userId);
  const { push } = useRouter();
  const [userData, setUserData] = useState({ "first_name": "", "last_name": "", "email": "" });
  // const [userID, setUserID] = useState(userId || "")
  const [loading, setLoading] = useState(true);

  // const [userId, setUserId] = useState(localStorage.getItem("User") || "");

  useEffect(() => {
    async function fetchUserData() {
      if (userId) { // Only run the fetch if userId is available
        try {
          const response = await fetch(`/api/user-profile?userId=${userId}`);
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        } finally {
          setLoading(false); // Set loading to false in a finally block to ensure it runs after success or error
        }
      }
    }

    fetchUserData();
  }, [userId]);

  // useEffect(() => {
  //   function checkUserData() {
  //     console.log("local storage triggered");
  //     const item = localStorage.getItem('User')

  //     if (item && item !== "") {
  //       setUserID(item);
  //     }
  //   }

  //   window.addEventListener('storage', checkUserData)

  //   return () => {
  //     window.removeEventListener('storage', checkUserData)
  //   }
  // }, []);

  const [updatedFirstName, setUpdatedFirstName] = useState("");
  const [updatedLastName, setUpdatedLastName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");

  useEffect(() => {
    setUpdatedFirstName(userData["first_name"]);
    setUpdatedEmail(userData["email"]);
    setUpdatedLastName(userData["last_name"]);
  }, [userData]);

  const handleUpdate = (
    updatedFirstName: string,
    updatedLastName: string,
    updatedEmail: string
  ) => {
    axios
      .patch("/api/user-profile", {
        first_name: updatedFirstName,
        last_name: updatedLastName,
        email: updatedEmail,
        userId: userId,
      })
      .then((res) => {
        console.log(res);
        push(`/profile`);
      });
  };

  const deleteUser = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete your account? This cannot be undone.");

    if (isConfirmed) {
      console.log("before axios");
      axios
        .delete("/api/user-profile")
        .then((res) => {
          console.log("in the .then");
          console.log(res);
          push("/register");
        })
        .catch((error) => {
          console.error("Error while deleting:", error);
        });
      console.log("after axios");
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }
  console.log("userData in profile Page: ", userData)

  if (userId === "") {
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
              Submit Changes
            </Button>
            <Button colorScheme="red" onClick={deleteUser}>
              Delete Account
            </Button>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  );
};

export default UserProfilePage;
