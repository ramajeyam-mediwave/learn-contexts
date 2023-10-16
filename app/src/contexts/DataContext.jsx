import React, { createContext, useState } from "react";

const ThemeContext = createContext(undefined);
const ThemeDispatchContext = createContext(undefined);
const UserContext = createContext(undefined);
const setUserContext = createContext(undefined);

function DataProvider({ children }) {
  const [theme, setTheme] = useState({
    value: "light",
  });
  const [user, setUser] = useState({
    name: "",
    image: "",
  });

  return (
    <UserContext.Provider value={user}>
      <setUserContext.Provider value={setUser}>
        <ThemeContext.Provider value={theme}>
          <ThemeDispatchContext.Provider value={setTheme}>
            {children}
          </ThemeDispatchContext.Provider>
        </ThemeContext.Provider>
      </setUserContext.Provider>
    </UserContext.Provider>
  );
}

export {
  DataProvider,
  UserContext,
  setUserContext,
  ThemeContext,
  ThemeDispatchContext,
};
