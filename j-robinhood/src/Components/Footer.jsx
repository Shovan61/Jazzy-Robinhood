import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    height: "8vh",
    border: "0.5px solid #f5f3eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: "7rem",
    height: "0.2rem",
    backgroundColor: "#999",
  },
  icon: {
    marginLeft: "1rem",
    cursor: "pointer",
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div>
        <Typography variant="h6">Shovan Mazumder</Typography>
        <div className={classes.line} />
      </div>
      <GitHubIcon className={classes.icon} />
      <LinkedInIcon className={classes.icon} color="primary" />
    </Card>
  );
}

export default Footer;
