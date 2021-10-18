import React from "react";
import {
  Home,
  LogIn,
  PalletesPage,
  Pallete,
  ColorShadePage,
  CreatePalettePage,
  ErrorPage,
} from "./Pages";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <div>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" render={() => <Home />}></Route>
          <Route exact path="/login" render={() => <LogIn />}></Route>
          <Route exact path="/palettes" render={() => <PalletesPage />}></Route>
          <Route exact path="/palette/:id" render={() => <Pallete />}></Route>
          <Route
            exact
            path="/colorshade/:id"
            render={() => <ColorShadePage />}
          ></Route>
          <Route
            exact
            path="/createpalette"
            render={() => <CreatePalettePage />}
          ></Route>
          <Route path="*" render={() => <ErrorPage />}></Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
