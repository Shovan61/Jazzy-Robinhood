import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DeveloperSvg from "./DeveloperSvg";

const useStyles = makeStyles({
  root: {
    height: "55vh",
    backgroundColor: "#dafddf",
    marginBottom: "20vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  left: {
    width: "30%",
  },
  right: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    height: "100%",
  },
});

function Skills() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <DeveloperSvg />
      </div>
      <div className={classes.right}>
        <Typography variant="h6">
          Hone Your Front-End Development Skill
        </Typography>
        <Typography variant="subtitle1">
          Our goal is to reduce the extra effort while picking colors for
          developing front-end applications. This application will help you to
          cut the unnecessary busy works which is to be done during front-end
          application development.
        </Typography>
      </div>
    </div>
  );
}

export default Skills;
