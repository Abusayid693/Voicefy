import React, { useContext, createContext, useState, useEffect } from "react";
import {
  removeUserFromLocalStorage,
  saveUserInLocalStorage,
} from "../../util/auth.helpers";
import { useSessionCheckQuery } from "../../generated/graphql";

const AuthContext = createContext<any>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const { data, error, loading } = useSessionCheckQuery();
  
  useEffect(() => {
    if (data) {
      setCurrentUser(data.Me);
    }
  }, [loading]);

  const login = async (data: any) => {
    const { token, user } = data;
    setCurrentUser(user);
    saveUserInLocalStorage({ token, user });
  };

  const signup = async (data: any) => {
    const { token, user } = data;
    setCurrentUser(user);
    saveUserInLocalStorage({ token, user });
  };

  const logout = () => {
    removeUserFromLocalStorage();
    localStorage.clear();
    sessionStorage.clear();
    setCurrentUser(null);
  };

  const isAuthenticated = () => {
    return currentUser != null ? true : false;
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    isAuthenticated,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
