import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../Images/clipart3126853.png";
import TextField from "@material-ui/core/TextField";
import { Footer } from "../Components";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  nav: {
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: "6rem",
    maxWidth: "1290px",
    alignSelf: "center",
    width: "100%",
    "& img": {
      height: "25%",
      cursor: "pointer",
    },
  },
  footer: {
    marginTop: "auto",
  },
  input: {
    marginLeft: "1rem",
    height: "2rem",
    width: "20%",
    border: "1px solid #e3e1e1",
    borderRadius: "10px",
    padding: "0.3rem",
  },
});

function PalletesPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <img src={logo} alt="logo" />
        <input type="text" className={classes.input} placeholder="Search" />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default PalletesPage;
