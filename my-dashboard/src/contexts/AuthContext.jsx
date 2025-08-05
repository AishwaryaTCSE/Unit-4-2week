import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // simple toggle auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login() { setIsLoggedIn(true); }
  function logout() { setIsLoggedIn(false); }
  function toggleAuth() { setIsLoggedIn(prev => !prev); }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
