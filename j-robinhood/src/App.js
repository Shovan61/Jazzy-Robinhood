import React from "react";
import { Home, LogIn, PalletesPage, Pallete } from "./Pages";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
        <Route exact path="/login" render={() => <LogIn />}></Route>
        <Route exact path="/palettes" render={() => <PalletesPage />}></Route>
        <Route exact path="/palette/:id" render={() => <Pallete />}></Route>
      </Switch>
    </div>
  );
}

export default App;
