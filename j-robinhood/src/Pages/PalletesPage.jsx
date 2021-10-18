import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../Images/clipart3126853.png";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { Footer } from "../Components";
import Card from "@material-ui/core/Card";
import { useGlobalContext } from "../Context";
import { MiniColorPalette } from "../Components";

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
    justifyContent: "flex-between",
    maxWidth: "1290px",
    alignSelf: "center",
    width: "100%",
  },
  search: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: "4rem",
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
    width: "13rem",
    border: "1px solid #e3e1e1",
    borderRadius: "10px",
    padding: "0.3rem",
    "&:focus": {
      outline: "none",
      border: "1px solid var(--green)",
      color: "green",
    },
  },
  btn: {
    marginRight: "4rem",
    border: "1px solid var(--green)",
  },
  btnCreate: {
    width: "13rem",
    marginRight: "4rem",
    border: "1px solid var(--green)",
  },
  lets: {
    width: "100%",
    maxWidth: "1290px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",

    "& h5": {
      fontWeight: "300",
      paddingRight: "2rem",
      letterSpacing: "2px",
    },
  },
  container: {
    alignSelf: "center",
    width: "100%",
    maxWidth: "1290px",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: "4.5rem",
    marginTop: "3rem",
  },
  boxContainer: {
    width: "70%",
    // border: "1px solid black",
    display: "grid",
    gridTemplateColumns: "repeat(3, 33%)",
    gap: "10px",
  },
  favorite: {
    width: "25%",
    height: "70vh",
    boxShadow: "0.1rem 0.1rem 0.5rem #ddd, -0.1rem -0.1rem 0.5rem #eee",
    borderRadius: "10px",
    marginRight: "4rem",
  },
});

function PalletesPage() {
  const classes = useStyles();
  const { paletteBox } = useGlobalContext();
  const [isShow, setisShow] = useState(true);
  let history = useHistory();
  // console.log(paletteBox);

  const gotoHome = () => {
    history.push("/");
  };

  const gotoCreatePalettePage = () => {
    history.push("/createpalette");
  };

  return (
    <div className={classes.root}>
      <div className={classes.nav}>
        <div className={classes.search}>
          <img src={logo} alt="logo" onClick={gotoHome} />
          <Typography variant="h7">Jazzy Robinhood</Typography>
        </div>
        <Button
          className={classes.btnCreate}
          variant="outlined"
          onClick={gotoCreatePalettePage}
        >
          Create palette
        </Button>
        <Button className={classes.btn} variant="outlined" onClick={gotoHome}>
          Home
        </Button>
      </div>
      {isShow && (
        <div className={classes.lets}>
          <Typography variant="h5" color="secondary">
            Lets Build Some Palettes!
          </Typography>
          <CloseIcon
            color="secondary"
            style={{ cursor: "pointer" }}
            onClick={() => setisShow(false)}
          />
        </div>
      )}

      <div className={classes.container}>
        <div className={classes.boxContainer}>
          {paletteBox.map((cur) => (
            <MiniColorPalette key={cur.id} {...cur} />
          ))}
        </div>
        <Card className={classes.favorite}></Card>
      </div>

      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default PalletesPage;
