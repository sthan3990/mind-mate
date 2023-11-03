import React, { createContext, useContext, useState } from "react";

const NumMessagesContext = createContext();
export const useNumMessages = () => useContext(NumMessagesContext);

export function NumMessagesProvider({ children }) {
  const [numMessages, setNumMessages] = useState(0);

  return (
    <NumMessagesContext.Provider value={{ numMessages, setNumMessages }}>
      {children}
    </NumMessagesContext.Provider>
  );
}
