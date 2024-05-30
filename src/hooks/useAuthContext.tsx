import React, { createContext, ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
};

type IAuthContext = {
  authenticated: boolean;
  login: () => void;
  logout: () => void;
};

const initialValues = {
  authenticated: false,
  login: () => {},
  logout: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValues);
const AuthProvider = ({ children }: Props) => {
  const [authenticated, setAuthenticated] = useState(
    !!sessionStorage.getItem("userId"),
  );

  const login = () => {
    sessionStorage.setItem("userId", "user_logged_in");
    setAuthenticated(true);
  };

  const logout = async () => {
    sessionStorage.removeItem("userId");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
