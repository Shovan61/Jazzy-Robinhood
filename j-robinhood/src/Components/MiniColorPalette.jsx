import React from "react";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
  },
  colorPalette: {
    height: "80%",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
  },
  content: {
    height: "20%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  colorBox: {
    boxShadow: "0.1rem 0.1rem 0.2rem #ddd, -0.1rem -0.1rem 0.2rem #eee",
  },
});

function MiniColorPalette(props) {
  const classes = useStyles();
  const { paletteName, id, emoji, colors } = props;
  let history = useHistory();
  console.log(props);

  const gotoPalettePage = () => {
    history.push(`/palette/${id}`);
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
      <div className={classes.content}>
        <span>{paletteName}</span>
        <span>{emoji}</span>
      </div>
    </Card>
  );
}

export default MiniColorPalette;
