"use client";

import { Flex, Container, Heading } from "@chakra-ui/react";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    localStorage.getItem("User") || localStorage.setItem("User", "");
  }, []);
  return (
    <main>
      <Heading textAlign="center" color="text.white">
        Welcome to Next.js 13 + Chakra UI Starter Code!
      </Heading>
    </main>
  );
};

export default Home;
