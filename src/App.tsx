import React, { Fragment } from "react";
import Picasso from "@toptal/picasso-provider";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import ShipsPage from "./pages/Ships/ships";
import ShipDetailsPage from "./pages/ShipDetails/shipDetails";

function App() {
  return (
    <Picasso>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ShipsPage />
          </Route>
          <Route exact path="/:id">
            <ShipDetailsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </Picasso>
  );
}

export default App;
