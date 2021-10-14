import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import { makeStyles } from "@material-ui/core/styles";
import "./PaletteColorBox.css";

const useStyles = makeStyles({
  root: {
    height: "25.9%",
    width: "20%",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    "&:hover div": {
      display: "block",
    },
  },
  name: {
    alignSelf: "end",
    fontSize: "12px",
  },
  view: {
    alignSelf: "flex-end",
    fontSize: "11px",
    padding: "0.3rem",
    borderRadius: "10px",
    marginBottom: "0.2rem",
    marginRight: "0.2rem",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    cursor: "pointer",
  },
  color: {
    position: "absolute",
    fontSize: "12px",
  },
  btn: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "15px",
    fontSize: "14px",
    display: "none",
    cursor: "pointer",
    color: "black",
    padding: "6px 15px",
    textDecoration: "none",
    textShadow: "0px 1px 0px #2f6627",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all 2s ease-in-out",
    "&:active": {
      top: "51%",
    },
  },
  content: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "50",
    "& h1": {
      fontSize: "4rem",
      fontWeight: "400",
      marginBottom: "1rem",
    },
    "& span": {
      fontSize: "1.2rem",
    },
  },
});

function PaletteColorBox(props) {
  const classes = useStyles();
  const { setCurrentColor } = useGlobalContext();
  const { name, id, hex, rgb, rgba, selectVal } = props;
  console.log(props);
  const [isCopied, setisCopied] = useState(false);
  const [currentColor, setcurrentColor] = useState("");

  let color = chroma(hex).luminance() < 0.3 ? "white" : "black";

  useEffect(() => {
    let timer;

    if (isCopied === true) {
      timer = setTimeout(() => {
        setisCopied(false);
      }, 2000);
    }

    return () => clearTimeout(timer);
  }, [isCopied]);

  const handleClick = () => {
    setisCopied(true);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: hex }}>
      <span className={classes.name} style={{ color: color }}>
        {name}
      </span>
      <span className={classes.view} style={{ color: color }}>
        View More
      </span>
      <span className={classes.color} style={{ color: color }}>
        {selectVal === "rgb" ? rgb : selectVal === "hex" ? hex : rgba}
      </span>
      <div
        className={`grow ${isCopied ? "active" : ""}`}
        style={{ backgroundColor: hex }}
      />

      {isCopied && (
        <div className={classes.content}>
          <h1 style={{ color: color }}>Copied!</h1>
          <span style={{ color: color }}>
            {selectVal === "rgb" ? rgb : selectVal === "hex" ? hex : rgba}
          </span>
        </div>
      )}

      <CopyToClipboard
        text={selectVal === "rgb" ? rgb : selectVal === "hex" ? hex : rgba}
        onCopy={handleClick}
      >
        <div className={classes.btn} style={{ color: color }}>
          Copy
        </div>
      </CopyToClipboard>
    </div>
  );
}

export default PaletteColorBox;
