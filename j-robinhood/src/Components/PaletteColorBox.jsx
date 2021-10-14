import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../Context";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { makeStyles } from "@material-ui/core/styles";
import "./PaletteColorBox.css";

const useStyles = makeStyles({
  root: {
    height: "25.9%",
    width: "20%",
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
  },
  name: {
    alignSelf: "end",
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
  btn: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "15px",
    fontSize: "14px",
    display: "inline-block",
    cursor: "pointer",
    color: "black",
    padding: "6px 15px",
    textDecoration: "none",
    textShadow: "0px 1px 0px #2f6627",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    transition: "all 0.1s ease-in-out",
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
  const { name, id, hex } = props;
  const [isCopied, setisCopied] = useState(false);
  const [currentColor, setcurrentColor] = useState("");

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
      <span className={classes.name}>{name}</span>
      <span className={classes.view}>View More</span>
      <div
        className={`grow ${isCopied ? "active" : ""}`}
        style={{ backgroundColor: hex }}
      />

      {isCopied && (
        <div className={classes.content}>
          <h1>Copied!</h1>
          <span>{hex}</span>
        </div>
      )}

      <CopyToClipboard text={hex} onCopy={handleClick}>
        <div className={classes.btn}>Copy</div>
      </CopyToClipboard>
    </div>
  );
}

export default PaletteColorBox;
