import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import { RecoilRoot } from "recoil";

const history = createBrowserHistory();
ReactDOM.render(
  <RecoilRoot>
    <Router history={history}>
      <App />
    </Router>
  </RecoilRoot>,
  document.getElementById("root")
);
serviceWorker.unregister();
