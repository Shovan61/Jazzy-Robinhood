import React, { useContext, useState, useEffect } from "react";
import defaultColor from "./seedColors";
import { generatePalette } from "./colorHelper";

const GlobalContext = React.createContext();

const getItemsLocalStorage = () => {
  let palettes = JSON.parse(window.localStorage.getItem("palettes"));

  if (palettes) {
    return palettes;
  } else {
    return [];
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, setstate] = useState({
    paletteBox: getItemsLocalStorage(),
    defaultColor: [],
    isFilledBox: true,
    currentClickedColor: null,
  });
  console.log(getItemsLocalStorage());
  console.log(state.paletteBox);
  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(state.paletteBox));
  }, [state.paletteBox]);

  useEffect(() => {
    if (state.paletteBox.length === 0) {
      setstate((prev) => {
        return {
          ...prev,
          paletteBox: [...prev.paletteBox, generatePalette(defaultColor[0])],
          defaultColor: [
            ...prev.defaultColor,
            generatePalette(defaultColor[0]),
          ],
        };
      });
    }
  }, []);

  console.log(state.isFilledBox);

  const setCurrentColor = (color, name, paletteId) => {
    let info = {
      name: name,
      color: color,
      paletteId,
    };

    window.localStorage.setItem("color", JSON.stringify(info));
  };

  const addPalette = (newPalette) => {
    setstate((prev) => {
      return {
        ...prev,
        paletteBox: [...prev.paletteBox, generatePalette(newPalette)],
      };
    });
  };

  const deletePalette = (id) => {
    setstate((prev) => {
      return {
        ...prev,
        paletteBox: prev.paletteBox.filter(
          (curPalette) => curPalette.id !== id
        ),
      };
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        paletteBox: state.paletteBox,
        isFilledBox: state.isFilledBox,
        setCurrentColor,
        currentClickedColor: state.currentClickedColor,
        addPalette,
        deletePalette,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
