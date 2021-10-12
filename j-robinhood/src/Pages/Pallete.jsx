import React from "react";
import { useGlobalContext } from "../Context";
import { makeStyles } from "@material-ui/core/styles";
import "./Palette.css";

function Pallete() {
  const { paletteBox, isFilledBox } = useGlobalContext();
  console.log(paletteBox);

  if (isFilledBox) {
    return (
      <div>
        <h1>{paletteBox[0].paletteName}</h1>
      </div>
    );
  } else {
    return <h1>...Loading</h1>;
  }
}

export default Pallete;
