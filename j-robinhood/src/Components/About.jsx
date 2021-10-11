import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "32vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  content: {
    width: "60vw",
    textAlign: "center",
  },
  header: {
    textAlign: "center",
  },
  "@media (max-width: 600px)": {
    header: {
      fontSize: "1.3rem",
    },
  },
});

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header}>
        Make your own color palette and develop your application
      </Typography>
      <Typography
        variant="subtitle1"
        color="textSecondary"
        className={classes.content}
      >
        Pick your colors save them and make your own color palette, use it to
        design and develop your application, re-use the palette for your future
        applications, edit the palette whenever you want.
      </Typography>
    </div>
  );
}

export default About;
