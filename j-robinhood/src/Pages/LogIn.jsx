import React from "react";
import Button from "@material-ui/core/Button";
import logo from "../Images/hatlogo.png";
import security from "../Images/security.12dff459.png";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Footer } from "../Components";

const focusedColor = "var(--green)";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  logoHeader: {
    marginLeft: "0.5rem",
    fontWeight: "400",
    letterSpacing: "2px",
    color: "#444",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "15vh",
  },

  navContent: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    height: "9vh",
    "& img": {
      height: "40%",
    },
  },
  navBorder: {
    height: "0.1rem",
    backgroundColor: "#edebeb",
    width: "30%",
  },
  container: {
    alignSelf: "center",
    marginTop: "3rem",
    maxWidth: "1287px",
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "40%",
    // border: "1px solid black",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    width: "100%",
    marginTop: "1.5rem",
    // input label when focused
    "& label.Mui-focused": {
      color: focusedColor,
    },
    // focused color for input with variant='standard'
    "& .MuiInput-underline:after": {
      borderBottomColor: focusedColor,
    },
    // focused color for input with variant='filled'
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: focusedColor,
    },
    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: focusedColor,
      },
    },
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "40%",
    "& img": {
      height: "40%",
      marginBottom: "3rem",
    },
  },
  footer: {
    marginTop: "auto",
  },
  "@media (max-width: 420px)": {
    right: {
      display: "none",
    },
    left: {
      width: "80%",
    },
  },
});

function LogIn() {
  const classes = useStyles();
  let history = useHistory();

  //   console.log(generatePalette(mtColorArr[0]));

  const gotoHome = () => {
    history.push("/");
  };

  const gotoPalettePage = () => {
    history.push("/palettes");
  };

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <div className={classes.navContent} onClick={gotoHome}>
          <img src={logo} alt="logo" />
          <h2 className={classes.logoHeader}>
            Jazzy <span style={{ color: "rgb(35, 153, 3)" }}>R</span>obinhood
          </h2>
        </div>
        <div className={classes.navBorder} />
      </div>

      <div className={classes.container}>
        <div className={classes.left}>
          <Typography variant="h5" style={{ marginBottom: "2rem" }}>
            Make Your Imaginary Colors And Put Them In Your Palette
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Jazzy Robinhood lets you develop the applications you love, with the
            colors you don't have!
          </Typography>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              className={classes.input}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              className={classes.input}
            />
            <TextField
              className={classes.input}
              id="confirm-password"
              label="Confirm Password"
              variant="outlined"
            />

            <Button
              variant="contained"
              style={{
                backgroundColor: "var(--green)",
                marginTop: "1.5rem",
                width: "100%",
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="outlined"
              style={{
                marginTop: "1.5rem",
                width: "100%",
                border: "1px solid var(--green)",
              }}
              onClick={gotoPalettePage}
            >
              Demo Log In
            </Button>
          </form>
        </div>
        <div className={classes.right}>
          <img src={security} alt="security" />
          <Typography variant="h6" style={{ marginBottom: "1rem" }}>
            Free color and palette making Simulation. Start creating your own
            palette.
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            This application does not charge ant service fee. It is full free
            for anyone who wants to use it.
          </Typography>
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default LogIn;
