import { createContext } from "react";

export interface IAuthContext {
  isAuthenticated: boolean;
  token: string | null;
  loginUser: (newToken: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);