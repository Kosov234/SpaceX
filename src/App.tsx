import React from "react";
import Picasso from "@toptal/picasso-provider";
import Router from "./router";

function App() {
  return (
    <Picasso>
      <Router />
    </Picasso>
  );
}

export default App;
