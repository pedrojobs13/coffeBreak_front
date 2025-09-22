import {type ReactNode, useCallback, useEffect, useState} from "react";

import {AuthContext, type IAuthContext} from "./AuthContext";

export function AuthProvider({children}: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("token");
  });

  const loginUser = useCallback((newToken: string) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "token") {
        setToken(event.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const isAuthenticated = !!token;

  const value: IAuthContext = {isAuthenticated, token, loginUser, logout};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}