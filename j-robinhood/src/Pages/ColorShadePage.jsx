import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalContext } from "../Context";
import { useHistory } from "react-router-dom";
import { Footer, PaletteColorBox } from "../Components";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import chroma from "chroma-js";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    marginTop: "auto",
  },
  nav: {
    height: "8vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    backgroundColor: "white",
  },
  btn: {
    border: "1px solid var(--green)",
  },
  container: {
    width: "100%",
    height: "82vh",
    display: "flex",
    flexWrap: "wrap",
  },
});

function ColorShadePage() {
  const classes = useStyles();
  const { paletteBox } = useGlobalContext();
  let history = useHistory();
  const [shadeArr, setshadeArr] = useState(null);
  const [colorName, setcolorName] = useState(null);
  const [pId, setpId] = useState(null);
  const [culur, setculur] = useState(null);

  useEffect(() => {
    createShades();
  }, []);

  const gotoPalettePage = () => {
    history.push(`/palette/${pId}`);
  };

  const createShades = () => {
    let info = JSON.parse(window.localStorage.getItem("color"));
    const { color, name, paletteId } = info;
    const one = chroma(color).brighten(1).hex();
    const two = chroma(color).brighten(0.5).hex();
    const three = chroma(color).brighten(0.2).hex();
    const four = chroma(color).darken(0.2).hex();
    const five = chroma(color).darken(0.5).hex();
    const six = chroma(color).darken(0.8).hex();
    const seven = chroma(color).darken(1.1).hex();
    const eight = chroma(color).darken(1.3).hex();
    const nine = chroma(color).darken(1.6).hex();
    const ten = chroma(color).darken(1.8).hex();
    const arr = [one, two, three, four, five, six, seven, eight, nine, ten];

    setshadeArr(arr);
    setcolorName(name.toUpperCase());
    setpId(paletteId);
    setculur(color);
  };

  if (!shadeArr) {
    return <span>...Loading</span>;
  } else {
    return (
      <div className={classes.root}>
        <nav className={classes.nav}>
          <Typography variant="h6">{colorName}</Typography>

          <Button
            className={classes.btn}
            variant="outlined"
            onClick={gotoPalettePage}
          >
            back
          </Button>
        </nav>

        {/* color container */}
        <div className={classes.container}>
          {shadeArr.map((cur, i) => (
            <PaletteColorBox
              key={i}
              name={cur}
              id={i}
              hex={cur}
              rgb={cur}
              rgba={cur}
              isSingleShade
            />
          ))}
        </div>

        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ColorShadePage;
