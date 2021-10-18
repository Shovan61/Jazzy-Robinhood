import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Footer, PaletteColorBox } from "../Components";
import { useHistory } from "react-router-dom";
import Slider from "@material-ui/core/Slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    height: "8vh",
    display: "grid",
    gridTemplateColumns: "25rem auto 20rem",
    backgroundColor: "white",
  },
  icon: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  footer: {
    marginTop: "auto",
  },
  container: {
    width: "100%",
    height: "82vh",
    // display: "flex",
    // flexWrap: "wrap",
    // flexFlow: "row wrap",
  },
  btn: {
    border: "1px solid var(--green)",
  },
  buttonContainer: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  slider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
  },
});

function Pallete() {
  const classes = useStyles();
  const { paletteBox, isFilledBox } = useGlobalContext();
  const { id } = useParams();
  let history = useHistory();
  const [palette, setpalette] = useState({});
  const [level, setlevel] = useState(500);
  const [selectVal, setselectVal] = useState("hex");
  const [singleShade, setsingleShade] = useState([]);

  useEffect(() => {
    getShade();
  }, [palette, level]);

  useEffect(() => {
    getPalette();
    getShade();
  }, [isFilledBox]);

  const getShade = () => {
    if (palette) {
      for (let key in palette.colors) {
        if (parseInt(key) === level) {
          setsingleShade(palette.colors[key]);
        }
      }
    }
  };

  const getPalette = () => {
    if (isFilledBox) {
      const foundPalette = paletteBox.filter((curItem) => curItem.id === id);
      setpalette(foundPalette[0]);
    }
  };

  const gotoPalettesPage = () => {
    history.push("/palettes");
  };

  const handleSliderChange = (event, newValue) => {
    setlevel(newValue);
  };

  const handleSelectChange = (e) => {
    setselectVal(e.target.value);
  };

  if (!isFilledBox) {
    return <div>...Loading</div>;
  } else {
    return (
      <div className={classes.root}>
        <nav className={classes.nav}>
          <div className={classes.icon}>
            <IconButton>{palette.emoji}</IconButton>
            <Typography variant="h6">{palette.paletteName}</Typography>
          </div>
          <div className={classes.slider}>
            <span>Level:</span>
            <Slider
              defaultValue={level}
              // key={`slider-${level}`}
              aria-labelledby="continuous-slider"
              step={100}
              min={100}
              max={900}
              marks
              onChange={handleSliderChange}
              style={{ width: "15rem", marginLeft: "2rem" }}
            />
          </div>
          <div className={classes.buttonContainer}>
            <Select value={selectVal} onChange={handleSelectChange}>
              <MenuItem value="hex">HEX</MenuItem>
              <MenuItem value="rgb">RGB</MenuItem>
              <MenuItem value="rgba">RGBA</MenuItem>
            </Select>
            <Button
              className={classes.btn}
              variant="outlined"
              onClick={gotoPalettesPage}
            >
              back
            </Button>
          </div>
        </nav>
        <div className={classes.container}>
          {singleShade.map((cur, i) => (
            <PaletteColorBox
              key={i}
              name={cur.name}
              id={cur.id}
              hex={cur.hex}
              rgb={cur.rgb}
              rgba={cur.rgba}
              selectVal={selectVal}
              paletteId={id}
            />
          ))}
        </div>
        {/* Footer */}
        <div className={classes.footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Pallete;
