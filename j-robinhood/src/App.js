import React from "react";
import {
  Home,
  LogIn,
  PalletesPage,
  Pallete,
  ColorShadePage,
  CreatePalettePage,
} from "./Pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
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
      </Switch>
    </div>
  );
}

export default App;
