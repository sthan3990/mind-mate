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
  InputGroup,
  InputRightElement
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "../contexts/UserContext";
import { useRouter } from "next/navigation";
import * as styles from "../styles/settingsStyle";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const UserProfilePage = () => {

  const headingStyle = styles.headingStyle;
  const rectangleIconStyle = styles.rectangleIconStyle;
  const saveButtonStyle = styles.saveButtonStyle;
  const deleteButtonStyle = styles.deleteButtonStyle;

  const { userId } = useUser();
  // console.log("context userId in beginning of profile page: ", userId);
  const { push } = useRouter();
  const [userData, setUserData] = useState({ "first_name": "", "last_name": "", "email": "", "password": "" });
  // const [userID, setUserID] = useState(userId || "")
  const [loading, setLoading] = useState(true);
  // const [userId, setUserId] = useState(localStorage.getItem("User") || "");
  console.log("userdata with pass: ", userData);


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

  const [updatedFirstName, setUpdatedFirstName] = useState("");
  const [updatedLastName, setUpdatedLastName] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedPassword, setUpdatedPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    setUpdatedFirstName(userData["first_name"]);
    setUpdatedEmail(userData["email"]);
    setUpdatedLastName(userData["last_name"]);
    setUpdatedPassword(userData["password"]);
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
        push(`/settings`);
      });
  };

  const changePassword = (
    updatedPassword: string,
  ) => {
    const isConfirmed = window.confirm("Are you sure you want to change your password?");
    if (isConfirmed) {
      axios
        .patch("/api/users", {
          password: updatedPassword,
          userId: userId,
        })
        .then((res) => {
          console.log(res);
          push(`/settings`);
        });
    }
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

  if (userId === "") {
    return <Text>No user logged in!</Text>;
  }

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} color="black">
      <Stack spacing={5} mx={"auto"} maxW={"lg"} pb={12} px={6} >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} sx={headingStyle} textAlign={"center"}>
            User Settings
          </Heading>
        </Stack>
        <Box>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                sx={rectangleIconStyle}
                type="text"
                placeholder={userData["first_name"]}
                value={updatedFirstName}
                onChange={(e) => setUpdatedFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Last Name</FormLabel>
              <Input
                sx={rectangleIconStyle}
                type="text"
                placeholder={userData["last_name"]}
                value={updatedLastName}
                onChange={(e) => setUpdatedLastName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                sx={rectangleIconStyle}
                type="text"
                placeholder={userData["email"]}
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}

              />
            </FormControl>

            <Button
              mt={4}
              sx={saveButtonStyle}
              onClick={() => handleUpdate(updatedFirstName, updatedLastName, updatedEmail)}>
              Save Changes
            </Button>
            <FormControl>
              <FormLabel>Update Password</FormLabel>
              <InputGroup>
                <Input
                  sx={rectangleIconStyle}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setUpdatedPassword(e.target.value)}
                />

                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              mt={4}
              sx={saveButtonStyle}
              bg={"blue.100"}
              onClick={() => changePassword(updatedPassword)}>
              Save New Password
            </Button>

            <Button
              sx={deleteButtonStyle}
              onClick={deleteUser}>
              Delete Account
            </Button>
          </Stack>
        </Box>
      </Stack >
    </Flex >
  );
};

export default UserProfilePage;
