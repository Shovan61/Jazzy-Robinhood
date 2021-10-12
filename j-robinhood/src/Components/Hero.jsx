import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import robinhood from "../Images/hero img.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "60vh",
    width: "100%",
    backgroundColor: "var(--green)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  leftContent: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    "& h1": {
      letterSpacing: "2px",
      fontSize: "3rem",
      fontWeight: "400",
      marginBottom: "4rem",
    },
    "& p": {
      letterSpacing: "1px",
      marginBottom: "4rem",
    },
  },
  rightContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    "& img": {
      height: "90%",
    },
  },
  btn: {
    marginTop: "2rem",
    width: "40%",
    height: "3rem",
    transition: "all 0.2s ease-in-out",
  },
  "@media (max-width: 700px)": {
    leftContent: {
      "& h1": {
        letterSpacing: "0px",
        fontSize: "2rem",
        marginBottom: "2rem",
      },
      "& p": {
        letterSpacing: "0px",
        marginBottom: "2rem",
        fontSize: "0.8rem",
      },
    },
  },
  "@media (max-width: 550px)": {
    rightContent: {
      display: "none",
    },
  },
});

function Hero() {
  const classes = useStyles();
  let history = useHistory();
  const [isHover, setisHover] = useState(false);

  const getoLoginPage = () => {
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <div className={classes.leftContent}>
        <h1>Jazzy Robinhood</h1>
        <p>
          Tired of picking colors for application development from various sites
          and unable to make your own palette? Then you are on the right place.
          Jazzy Robinhood allows all Front-End developers and designers to make
          their own color palettes and reuse them.{" "}
        </p>
        <Button
          variant="contained"
          style={{
            backgroundColor: isHover ? "black" : "#e6ffed",
            color: isHover ? "white" : "black",
          }}
          className={classes.btn}
          onMouseOver={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
          onClick={getoLoginPage}
        >
          DEMO
        </Button>
      </div>
      <div className={classes.rightContent}>
        <img src={robinhood} alt="robinhood" />
      </div>
    </div>
  );
}

export default Hero;
