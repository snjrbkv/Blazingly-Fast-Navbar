import { createContext, useState } from "react";

export const LanguContext = createContext();

export const LanguProvider = ({ children }) => {
  const [language, setLanguage] = useState("uz");
  return (
    <LanguContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguContext.Provider>
  );
};
