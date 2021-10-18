import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useGlobalContext } from "../Context";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
    height: "200px",
    // border: "1px solid #e2e2e2",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0.1rem 0.1rem 0.2rem #ddd, -0.1rem -0.1rem 0.2rem #eee",
    "&:active": {
      boxShadow: "none",
    },
    position: "relative",
    "&:hover svg": {
      display: "block",
    },
  },
  colorPalette: {
    height: "80%",
    width: "100%",
    // display: "grid",
    // gridTemplateColumns: "repeat(5, 1fr)",
  },
  content: {
    height: "20%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  colorBox: {
    height: "25%",
    width: "20%",
    marginBottom: "-3px",
    display: "inline-block",
    boxShadow: "0.1rem 0.1rem 0.2rem #ddd, -0.1rem -0.1rem 0.2rem #eee",
  },
  iconEdit: {
    borderRadius: "20%",
    position: "absolute",
    top: "0",
    right: "40px",
    zIndex: "10",
    cursor: "pointer",
    backgroundColor: "red",
    padding: "4px",
    display: "none",
    fontSize: "25px",
    color: "white",
  },
  iconRemove: {
    borderRadius: "20%",
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: "10",
    cursor: "pointer",
    backgroundColor: "red",
    padding: "4px",
    display: "none",
    fontSize: "25px",
    color: "white",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function MiniColorPalette(props) {
  const classes = useStyles();
  const { deletePalette } = useGlobalContext();
  const { paletteName, id, emoji, colors } = props;
  let history = useHistory();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const gotoPalettePage = () => {
    history.push(`/palette/${id}`);
  };

  const handleDelete = (e) => {
    e.stopPropagation();

    deletePalette(id);
  };

  return (
    <Card className={classes.root} onClick={gotoPalettePage}>
      <div className={classes.colorPalette}>
        {colors[500].map((cur, i) => (
          <div
            className={classes.colorBox}
            key={i}
            style={{ backgroundColor: cur.hex }}
          ></div>
        ))}
      </div>
      {id !== "material-ui-colors" && (
        <>
          <EditIcon className={classes.iconEdit} />

          <DeleteIcon
            className={classes.iconRemove}
            onClick={(e) => handleDelete(e)}
          />
        </>
      )}

      <div className={classes.content}>
        <span style={{ fontSize: "14px" }}>{paletteName}</span>
        <span>{emoji}</span>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </Card>
  );
}

export default MiniColorPalette;
