import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useGlobalContext } from "../Context";
import { useParams } from "react-router-dom";
import { Footer } from "../Components";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import chroma from "chroma-js";

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
    display: "grid",
    gridTemplateColumns: "25rem auto 20rem",
    backgroundColor: "white",
  },
});

function ColorShadePage() {
  const classes = useStyles();
  const { paletteBox } = useGlobalContext();
  const { id } = useParams();
  const [shadeArr, setshadeArr] = useState(null);

  useEffect(() => {
    createShades();
  }, []);

  const createShades = () => {
    let col = JSON.parse(window.localStorage.getItem("color"));

    const one = chroma(col).brighten(1.8).hex();
    const two = chroma(col).brighten(1.6).hex();
    const three = chroma(col).brighten(1.4).hex();
    const four = chroma(col).brighten(1.2).hex();
    const five = chroma(col).brighten(1).hex();
    const six = chroma(col).darken(1).hex();
    const seven = chroma(col).darken(1.2).hex();
    const eight = chroma(col).darken(1.4).hex();
    const nine = chroma(col).darken(1.6).hex();
    const ten = chroma(col).darken(1.8).hex();
    const arr = [one, two, three, four, five, six, seven, eight, nine, ten];

    setshadeArr(arr);
  };

  if (!shadeArr) {
    return <span>...Loading</span>;
  } else {
    return (
      <div className={classes.root}>
        <h1>{shadeArr}</h1>
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default ColorShadePage;
