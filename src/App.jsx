import React from "react";
import "./global.css";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "./components/Drawer";
import MiniDrawer from "./components/MiniDrawer";

const useStyles = makeStyles({
  container: {
    display: "flex"
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <MiniDrawer />
    </div>
  );
}
