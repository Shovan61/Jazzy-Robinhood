import React from "react";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

function ErrorPage() {
  let history = useHistory();

  const gotoHome = () => {
    history.push("/");
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "red", marginBottom: "4rem" }}>Page Not Found</h1>
      <Button
        variant="outlined"
        style={{ color: "var(-green" }}
        onClick={gotoHome}
      >
        Home
      </Button>
    </motion.div>
  );
}

export default ErrorPage;
