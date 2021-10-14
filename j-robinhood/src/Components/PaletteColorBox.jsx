import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./PaletteColorBox.css";

const useStyles = makeStyles({
  root: {
    height: "25.9%",
    width: "20%",
    position: "relative",
  },
});

function PaletteColorBox(props) {
  const classes = useStyles();
  const { name, id, hex } = props;

  return <div className={classes.root} style={{ backgroundColor: hex }}></div>;
}

export default PaletteColorBox;
