import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Settings from "./components/Settings";
import Report from "./components/Report";
import EmailLogin from "./components/EmailLogin";
import store from "./redux/store";

function Main() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById("root")
);
