import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "../Components";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
