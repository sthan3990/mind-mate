import React from "react";
import ChakraUiProvider from "@/providers/chakra-ui.provider";
import Navbar from "./components/header";
import Footer from "./components/footer";
import { Flex } from "@chakra-ui/react"; // Import Flex from Chakra UI

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>{/* Add your head content here */}</head>
      <body>
        <ChakraUiProvider>
          <Flex flexDirection="column" minHeight="100vh">
            <Navbar />
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
