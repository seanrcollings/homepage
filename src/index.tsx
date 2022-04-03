import React from "react";
import { createRoot } from "react-dom/client";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import Profile from "./components/profile";
import "./stylesheets/main.scss";
import CanvasTest from "./components/canvasTest";

createRoot(document.getElementById("root")!).render(
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Profile} />
      <Route path="/canvas" exact component={CanvasTest} />
    </Switch>
  </Router>
);
