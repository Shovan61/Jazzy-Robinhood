import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import { NavBar, Hero, About, Usage, Skills, Footer } from "../Components";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  imp: {
    height: "8vh",
    marginBottom: "7vh",
    width: "80vw",
    alignSelf: "center",
    textAlign: "center",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Hero />
      <About />
      <Usage />
      <Skills />
      <div className={classes.imp}>
        {/* <InfoIcon style={{ color: "#ffc508" }} /> */}
        <Typography variant="caption" color="textSecondary">
          This application helps developers to build their application which is
          mainly being done on wide screen computers or tablets. For this reason
          the user experience may break on mobile devices.
        </Typography>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
