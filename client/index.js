import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route,Switch ,Link } from "react-router-dom";
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore , applyMiddleware} from 'redux';

import routes from "./routes";
import App from "./components/App";

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <BrowserRouter>
      {routes}    
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
