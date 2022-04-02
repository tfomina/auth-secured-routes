import React from "react";

interface ISecurityContextValue {
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loggedIn: boolean;
}

const SecurityContext = React.createContext({} as ISecurityContextValue);

export default SecurityContext;
