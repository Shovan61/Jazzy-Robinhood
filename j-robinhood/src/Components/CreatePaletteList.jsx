import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CreatePaletteColorBox from "./CreatePaletteColorBox";
import { SortableContainer } from "react-sortable-hoc";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(4, 1fr)",
  },
});

function CreatePaletteList({ colorArray, removeColor }) {
  const classes = useStyles();
  //   console.log(colorArray);

  return (
    <div className={classes.root}>
      {colorArray.map((colorBox, i) => (
        <CreatePaletteColorBox
          index={i}
          key={colorBox.id}
          id={colorBox.id}
          removeColor={removeColor}
          {...colorBox}
        />
      ))}
    </div>
  );
}

export default SortableContainer(CreatePaletteList);
