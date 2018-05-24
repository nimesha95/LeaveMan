import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route,Switch ,Link } from "react-router-dom";

import routes from "./routes";
import App from "./components/App";

render(
  <BrowserRouter>
    {routes}    
  </BrowserRouter>,
  document.getElementById("app")
);
