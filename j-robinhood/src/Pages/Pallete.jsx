import React from "react";
import { useGlobalContext } from "../Context";
import { makeStyles } from "@material-ui/core/styles";
import "./Palette.css";

function Pallete() {
  const { paletteBox, isFilledBox } = useGlobalContext();

  if (isFilledBox) {
    return (
      <div>
        <h1></h1>
      </div>
    );
  } else {
    return <h1>...Loading</h1>;
  }
}

export default Pallete;
