import React from "react";
import { Home, LogIn, PalletesPage } from "./Pages";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home />}></Route>
        <Route exact path="/login" render={() => <LogIn />}></Route>
        <Route exact path="/palettes" render={() => <PalletesPage />}></Route>
      </Switch>
    </div>
  );
}

export default App;
