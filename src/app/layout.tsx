'use client'

import React from "react";
import ChakraUiProvider from "@/providers/chakra-ui.provider";
import Navbar from "./components/header";
import Footer from "./components/footer";
import { Flex } from "@chakra-ui/react"; // Import Flex from Chakra UI
import { usePathname } from 'next/navigation'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const registerPathname = usePathname()
  return (
    <html>
      <head>{/* Add your head content here */}</head>
      <body>
        <ChakraUiProvider>
          <Flex flexDirection="column" minHeight="100vh">
            { (registerPathname != "/register" && registerPathname != "/login") && <Navbar /> }

            <Flex flex="1" justify="center" align="center">
              {children}
            </Flex>
            <Footer />
          </Flex>
        </ChakraUiProvider>
      </body>
    </html>
  );
};

export default RootLayout;
