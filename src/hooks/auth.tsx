import React, { createContext, ReactNode, useContext } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface AuthContextData {
  user: User;
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  async function signInWithGoogle() {
    try {
      const CLIENT_ID = "";
      const REDIRECT_URI = "";
      const RESPONSE_TYPE = "";
      const SCOPE = "";

      const authUrl = `https://`;
    } catch (error) {
      throw new Error(error);
    }
  }

  const user = {
    id: "123",
    name: "Fernando de Paula",
    email: "rodrigo@email.com",
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
