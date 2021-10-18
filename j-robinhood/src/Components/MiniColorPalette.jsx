import React from "react";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useGlobalContext } from "../Context";

const useStyles = makeStyles({
  root: {
    width: "250px",
    height: "200px",
    // border: "1px solid #e2e2e2",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0.1rem 0.1rem 0.2rem #ddd, -0.1rem -0.1rem 0.2rem #eee",
    "&:active": {
      boxShadow: "none",
    },
    position: "relative",
    "&:hover svg": {
      display: "block",
    },
  },
  colorPalette: {
    height: "80%",
    width: "100%",
    // display: "grid",
    // gridTemplateColumns: "repeat(5, 1fr)",
  },
  content: {
    height: "20%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  colorBox: {
    height: "25%",
    width: "20%",
    marginBottom: "-3px",
    display: "inline-block",
    boxShadow: "0.1rem 0.1rem 0.2rem #ddd, -0.1rem -0.1rem 0.2rem #eee",
  },

  iconRemove: {
    borderRadius: "20%",
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: "10",
    cursor: "pointer",
    backgroundColor: "red",
    padding: "4px",
    display: "none",
    fontSize: "25px",
    color: "white",
  },
});

function MiniColorPalette(props) {
  const classes = useStyles();
  const { deletePalette } = useGlobalContext();
  const { paletteName, id, emoji, colors } = props;
  let history = useHistory();

  const gotoPalettePage = () => {
    history.push(`/palette/${id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    deletePalette(id);
  };

  return (
    <Card className={classes.root} onClick={gotoPalettePage}>
      <div className={classes.colorPalette}>
        {colors[500].map((cur, i) => (
          <div
            className={classes.colorBox}
            key={i}
            style={{ backgroundColor: cur.hex }}
          ></div>
        ))}
      </div>
      {id !== "material-ui-colors" && (
        <>
          <DeleteIcon
            className={classes.iconRemove}
            onClick={(e) => handleDelete(e)}
          />
        </>
      )}

      <div className={classes.content}>
        <span style={{ fontSize: "14px" }}>{paletteName}</span>
        <span>{emoji}</span>
      </div>
    </Card>
  );
}

export default MiniColorPalette;
