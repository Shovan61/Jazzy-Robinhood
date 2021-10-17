import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import chroma from "chroma-js";
import { SortableElement } from "react-sortable-hoc";

const useStyles = makeStyles({
  root: {
    position: "relative",
    cursor: "grab",
    "&:active": {
      cursor: "grabbing",
    },
    // height: "200px",
    // width: "200px",
  },
  name: {
    position: "absolute",
    bottom: "5px",
    left: "5px",
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

function CreatePaletteColorBox({ name, id, color, removeColor }) {
  const classes = useStyles();
  let backgroundColor = chroma(color).luminance() < 0.3 ? "white" : "black";

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <span style={{ color: backgroundColor }} className={classes.name}>
        {name}
      </span>
      <span className={classes.color} style={{ color: backgroundColor }}>
        {color}
      </span>
      <span className={classes.btn}>
        <DeleteIcon
          style={{ color: backgroundColor }}
          onClick={() => removeColor(id)}
        />
      </span>
    </div>
  );
}

export default SortableElement(CreatePaletteColorBox);
