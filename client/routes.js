import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { render } from "react-dom";

import App from "./components/App";
import Greetings from "./components/Greetings";
import SignupPage from "./components/signup/SignupPage";

export default (
  <switch>
    <Route path="/" component={App}  />
    <Route path="/signup" component={SignupPage} />
  </switch>
);
