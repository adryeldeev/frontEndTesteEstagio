import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import { getLocalStorage, setLocalStorage } from "./Utils";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = getLocalStorage();
    return storedAuth || { user: null, accessToken: null, refreshToken: null };
  });

  useEffect(() => {
    setLocalStorage(auth);
  }, [auth]);

  const isAuthenticated = Boolean(auth.accessToken);

  return (
    <AuthContext.Provider value={{ auth, setAuth, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
