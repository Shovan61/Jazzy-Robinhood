import React, { useContext, useState, useEffect } from "react";
import defaultColor from "./seedColors";
import { generatePalette } from "./colorHelper";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [state, setstate] = useState({
    paletteBox: [],
    isFilledBox: false,
  });

  useEffect(() => {
    if (state.paletteBox.length === 0) {
      setstate((prev) => {
        return {
          ...prev,
          paletteBox: [...prev.paletteBox, generatePalette(defaultColor[0])],
          isFilledBox: true,
        };
      });
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{ paletteBox: state.paletteBox, isFilledBox: state.isFilledBox }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
