import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Settings from "./components/Settings";
import Report from "./components/Report";
import EmailLogin from "./components/EmailLogin";

function Main() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
      <Route path="/login">
        <EmailLogin />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/report">
        <Report />
      </Route>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
