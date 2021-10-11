import React from "react";
import Button from "@material-ui/core/Button";
import logo from "../Images/hatlogo.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "8vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    backgroundColor: "white",
  },
  logo: {
    height: "100%",
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    "& img": {
      height: "50%",
    },
  },
  logoHeader: {
    marginLeft: "0.5rem",
    fontWeight: "400",
    letterSpacing: "2px",
    color: "#444",
  },
  "@media (max-width: 530px)": {
    logoHeader: {
      fontSize: "1.7rem",
    },
    logo: {
      "& img": {
        height: "30%",
      },
    },
  },
  "@media (max-width: 440px)": {
    logoHeader: {
      fontSize: "1rem",
    },
    logo: {
      "& img": {
        height: "25%",
      },
    },
  },
  "@media (max-width: 340px)": {
    logo: {
      width: "65%",
    },
  },
});

function NavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src={logo} alt="logo" />
        <h1 className={classes.logoHeader}>
          Jazzy <span style={{ color: "rgb(35, 153, 3)" }}>R</span>obinhood
        </h1>
      </div>

      <Button variant="contained" style={{ backgroundColor: "var(--green)" }}>
        Sign Up
      </Button>
    </div>
  );
}

export default NavBar;
