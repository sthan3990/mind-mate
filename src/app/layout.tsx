'use client'

import React from "react";
import ChakraUiProvider from "@/providers/chakra-ui.provider";
import Navbar from "./components/header";
import Footer from "./components/footer";
import { UserProvider } from "./contexts/UserContext"; // Adjust the path as necessary
import { Flex } from "@chakra-ui/react";
import { usePathname } from 'next/navigation';
import { NumMessagesProvider } from "./helper/numofmessages";
const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const registerPathname = usePathname();

    const rootStyles = {
        flexDirection: "column",
        minHeight: "100vh",
        bgColor: "#F9F2FF",
        justify: "flex-start"
    };

    return (
        <html>
            <head>{/* Add your head content here */}</head>
            <body>
                <UserProvider> {/* Wrap your application with UserProvider */}
                    <ChakraUiProvider>
                        <NumMessagesProvider>
                        <Flex sx={rootStyles}>
                            {(registerPathname !== "/" && registerPathname !== "/register" && registerPathname !== "/login") && <Navbar />}
                            <Flex flexDirection="column" minHeight="100vh" justify="flex-start">
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
};

export default RootLayout;
