import React, { useContext, useState, useEffect } from "react";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
