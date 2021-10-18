import React from "react";
import Typography from "@material-ui/core/Typography";
import { services } from "../utilities";
import { makeStyles } from "@material-ui/core/styles";
import GuySvg from "./GuySvg";
import ReactPlayer from "react-player";

const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100vh",
  },
  services: {
    height: "40vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#222",
  },
  service: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "15%",
    height: "70%",
  },
  svg: {
    width: "20%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  howTo: {
    display: "flex",
    height: "60vh",
    alignItems: "center",
    justifyContent: "space-around",
  },
  line: {
    height: "0.05rem",
    width: "50px",
    backgroundColor: "#999",
    marginLeft: "1rem",
  },
  leftHowto: {
    display: "flex",
    alignItems: "center",
    "& h4": {
      letterSpacing: "4px",
    },
  },
  "@media (max-width: 1020px)": {
    svg: {
      width: "15%",
    },
    service: {
      width: "10%",
    },
  },
  subtitle: {
    textAlign: "center",
    color: "white",
  },
  "@media (max-width: 530px)": {
    svg: {
      display: "none",
    },
    service: {
      width: "25%",
      height: "80%",
      justifyContent: "space-between",
      "& h6": {
        fontSize: "0.8rem",
      },
      subtitle: {
        fontSize: "0.2rem",
      },
    },
  },
});

function Usage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.services}>
        {services.map((cur, i) => (
          <div className={classes.service} key={i}>
            <Typography variant="h6" style={{ color: "white" }}>
              {cur.title}
            </Typography>
            <Typography
              className={classes.subtitle}
              variant="subtitle2"
              color="textSecondary"
            >
              {cur.description}
            </Typography>
          </div>
        ))}

        <div className={classes.svg}>
          <GuySvg />
        </div>
      </div>

      <div className={classes.howTo}>
        <div className={classes.leftHowto}>
          <Typography variant="h4">How To Use</Typography>
          <div className={classes.line} />
        </div>
        <div className={classes.rightHowto}>
          <ReactPlayer url="https://www.youtube.com/watch?v=dyXerBBomNc&ab_channel=shovanmazumder" />
        </div>
      </div>
    </div>
  );
}

export default Usage;
