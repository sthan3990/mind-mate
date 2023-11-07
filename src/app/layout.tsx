
'use client';

import React, { useEffect } from "react";
import ChakraUiProvider from "@/providers/chakra-ui.provider";
import Navbar from "./components/header";
import Footer from "./components/footer";
import { UserProvider } from "./contexts/UserContext"; // Adjust the path as necessary
import { Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { NumMessagesProvider } from "./helper/numofmessages";
import ChangePageTitle from "./helper/createpagetitle";

const RootLayout = ({ children }: { children: React.ReactNode }) => {

  const registerPathname = usePathname();

  const rootStyles = {
    flexDirection: "column",
    minHeight: "100vh",
    bgColor: "#15193B",
    justify: "flex-start"
  };

  return (
    <html>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <UserProvider>
          {" "}
          {/* Wrap your application with UserProvider */}
          <ChakraUiProvider>
            <ChangePageTitle title={usePathname()} />
            <NumMessagesProvider>
              <Flex sx={rootStyles}>
                {registerPathname !== "/" &&
                  registerPathname !== "/register" &&
                  registerPathname !== "/login" && <Navbar />}
                <Flex
                  flexDirection="column"
                  minHeight="100vh"
                  justify="flex-start"
                >
                  {children}
                </Flex>
                <Footer />
              </Flex>
            </NumMessagesProvider>
          </ChakraUiProvider>
        </UserProvider>
      </body>
    </html>
  );
}

export default RootLayout;
