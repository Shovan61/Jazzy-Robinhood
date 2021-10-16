import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import chroma from "chroma-js";

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "grab",
    "&:active": {
      cursor: "grabbing",
    },
  },
  color: {
    position: "absolute",
    top: "5px",
    left: "5px",
  },
  btn: {
    position: "absolute",
    top: "5px",
    right: "5px",
    cursor: "pointer",
    transition: "all 0.2s ease-in",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

function CreatePaletteColorBox({ name, id, color }) {
  const classes = useStyles();
  let backgroundColor = chroma(color).luminance() < 0.3 ? "white" : "black";

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <span style={{ color: backgroundColor }}>{name}</span>
      <span className={classes.color} style={{ color: backgroundColor }}>
        {color}
      </span>
      <span className={classes.btn}>
        <DeleteIcon style={{ color: backgroundColor }} />
      </span>
    </div>
  );
}

export default CreatePaletteColorBox;
