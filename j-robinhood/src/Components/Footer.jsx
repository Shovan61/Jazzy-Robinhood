import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    height: "10vh",
    position: "relative",
  },
  creator: {
    height: "3vh",
    // backgroundColor: "white",
    // width: "10vw",
  },
  card: {
    width: "100%",
    height: "7vh",
    border: "0.5px solid #f5f3eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: "0",
    left: "0 ",
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
  cardItem: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
});

function Footer() {
  const classes = useStyles();
  const [isHover, setisHover] = useState(false);

  return (
    <div className={classes.root}>
      {isHover && (
        <div className={classes.creator}>
          <Typography variant="h6">Creator</Typography>
        </div>
      )}

      <Card className={classes.card}>
        <div
          className={classes.cardItem}
          style={{ backgroundColor: isHover ? "#f5f6f7" : "" }}
          onMouseOver={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
        >
          <div>
            <Typography variant="h6">Shovan Mazumder</Typography>
            <div className={classes.line} />
          </div>

          <a
            href="https://github.com/Shovan61"
            target="_blank"
            style={{ color: "inherit" }}
          >
            <GitHubIcon className={classes.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/shovan-mazumder/"
            target="_blank"
          >
            <LinkedInIcon className={classes.icon} color="primary" />
          </a>
        </div>
      </Card>
    </div>
  );
}

export default Footer;
