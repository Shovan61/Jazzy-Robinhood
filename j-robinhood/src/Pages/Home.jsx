import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar, Hero, About, Usage } from "../Components";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
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
    </div>
  );
}

export default Home;
