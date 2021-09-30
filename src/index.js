import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Settings from "./components/Settings";
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
        <Settings />
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
