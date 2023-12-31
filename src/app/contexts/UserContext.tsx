// src/app/contexts/UserContext.ts

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface IUserContext {
  userId: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const UserContext = createContext<IUserContext>({
  userId: null,
  login: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUserId = localStorage.getItem("User");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const login = async (email: string, password: string): Promise<string> => {
    try {
      const response = await axios.get("/api/login", {
        params: { email, password },
      });
      
      if (response.data.message === "User logged in") {
        localStorage.setItem("User", response.data.userID);
        setUserId(response.data.userID); // Set user ID in context state
        return "Logged in successfully"; // Return a string indicating success
      } else {
        // Handle any other messages or errors, maybe set an error state or show a notification
        alert(response.data.message);
        return response.data.message; // Return the error message
      }
    } catch (error) {
      // Handle errors, e.g., show an alert or set an error state
      console.error("Login error. Check username and password.", error);
         return JSON.stringify(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("User");
    setUserId(null);
    router.push("/register"); // Redirect to register on logout
  };

  return (
    <UserContext.Provider value={{ userId, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
