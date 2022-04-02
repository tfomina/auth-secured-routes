import { useState } from "react";
import SecurityContext from "./SecurityContext";

const SecurityProvider = (props: { children: React.ReactNode }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SecurityContext.Provider
      value={{
        login(username, password) {
          return new Promise<void>((resolve, reject) => {
            if (username === "admin" && password === "admin1234") {
              setLoggedIn(true);
              resolve();
            }
            reject();
          });
        },
        logout() {
          return new Promise<void>((resolve) => {
            setLoggedIn(false);
            resolve();
          });
        },
        loggedIn,
      }}
    >
      {props.children}
    </SecurityContext.Provider>
  );
};

export default SecurityProvider;
