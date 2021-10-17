import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ChromePicker } from "react-color";
import TextField from "@material-ui/core/TextField";
import { v4 as uuid } from "uuid";
import { CreatePaletteList } from "../Components";
import { arrayMoveImmutable } from "array-move";

const drawerWidth = 300;
const focusedColor = "var(--green)";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "7vh",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  navContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    border: "1px solid var(--green)",
  },
  colorpicker: {
    alignSelf: "center",
    marginTop: "1.5rem",
  },
  colName: {
    marginTop: "3rem",
    width: "75%",
    alignSelf: "center",
  },
  textField: {},
  button: {
    width: "75%",
    alignSelf: "center",
    marginTop: "2rem",
  },
  paletteContainer: {
    height: "93vh",
    width: "100%",
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  let history = useHistory();
  const [currentColor, setcurrentColor] = useState("#FF0000");
  const [colorArray, setcolorArray] = useState([]);
  const [colorName, setcolorName] = useState("");
  const [isDisabled, setisDisabled] = useState(false);
  const [isError, setisError] = useState(false);
  const [isSameColor, setisSameColor] = useState(false);

  useEffect(() => {
    if (!colorArray.length) {
      setisSameColor(false);
      setisDisabled(false);
      setisError(false);
      setcurrentColor("#FF0000");
    }
  }, [colorArray]);

  useEffect(() => {
    colorValidator();
  }, [currentColor, colorArray]);

  useEffect(() => {
    checkColorName();
    colorNameValidator();
  }, [colorName]);

  const checkColorName = () => {
    if (colorName === "") {
      setisDisabled(true);
    } else {
      setisDisabled(false);
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const gotoPalettes = () => {
    history.push("/palettes");
  };

  const handleColorChange = (newColor) => {
    setcurrentColor(newColor.hex);
  };

  const handleAddColor = () => {
    let colorObject = {
      color: currentColor,
      name: colorName,
      id: uuid(),
    };

    if (colorArray.length <= 19) {
      setcolorArray((prev) => {
        return [...prev, colorObject];
      });
      setcolorName("");
    } else {
      setisDisabled(true);
    }
  };

  const colorNameValidator = () => {
    let allColorNames = colorArray.map((cur) => cur.name);

    allColorNames.forEach((cur) => {
      if (cur.toLowerCase().trim() === colorName.toLowerCase().trim()) {
        setisError(true);
      } else {
        setisError(false);
      }
    });
  };

  const colorValidator = () => {
    let allColors = colorArray.map((cur) => cur.color);

    allColors.forEach((cur) => {
      if (cur === currentColor) {
        setisSameColor(true);
      } else {
        setisSameColor(false);
      }
    });
  };

  const removeColor = (id) => {
    let newColorArray = colorArray.filter((cur) => cur.id !== id);

    setcolorArray(newColorArray);
  };

  const clearAll = () => {
    setcolorArray([]);
    setisDisabled(false);
    setisError(false);
    setisSameColor(false);
    setcurrentColor("#FF0000");
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setcolorArray((prev) => {
      return arrayMoveImmutable(prev, oldIndex, newIndex);
    });
  };

  // console.log(currentColor);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="inherit"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.navContent}>
            <Typography variant="h6" noWrap>
              Create Palette
            </Typography>
            <Button
              className={classes.btn}
              variant="outlined"
              onClick={gotoPalettes}
            >
              Back
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/* Clear palette button */}
        <div className={classes.button}>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginBottom: "3rem" }}
            fullWidth
            onClick={clearAll}
          >
            Clear All
          </Button>
        </div>

        {/* header */}
        <Typography
          variant="h6"
          style={{ textAlign: "center", marginTop: "1rem" }}
        >
          Pick A Color
        </Typography>

        {/* color picker */}
        <div className={classes.colorpicker}>
          <ChromePicker color={currentColor} onChange={handleColorChange} />
        </div>

        {isSameColor && (
          <span
            style={{
              fontSize: "11px",
              color: "red",
              alignSelf: "center",
              marginTop: "2rem",
            }}
          >
            This Color exists in the palette
          </span>
        )}

        {/* Name of color */}
        <div className={classes.colName}>
          <TextField
            error={isError}
            id="name"
            label={isError ? "Name already taken" : "Color Name"}
            fullWidth
            className={classes.textField}
            value={colorName}
            onChange={(e) => setcolorName(e.target.value)}
          />
        </div>

        {/* add color button  */}
        <div className={classes.button}>
          <Button
            className={classes.btn}
            variant="outlined"
            fullWidth
            onClick={handleAddColor}
            disabled={isDisabled || isError || isSameColor}
          >
            Add Color
          </Button>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        {/* body */}

        <div className={classes.paletteContainer}>
          <CreatePaletteList
            onSortEnd={onSortEnd}
            colorArray={colorArray}
            removeColor={removeColor}
            axis="xy"
          />
        </div>
      </main>
    </div>
  );
}
