import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./login.jsx";
import Landing from "./landing.jsx";
import Vote from "./Vote.jsx";
import Session from "./Session.jsx";

const Url = "";

export default function App() {
  // switch tag to determine which page to load
  return (
    <main>
      <Switch>
        <Route path="/" component={Session} exact />
        <Route path="/login" render={(props) => <Login {...props}/>} exact />
        <Route path="/landing" render={(props) => <Landing {...props} />} exact />
        <Route path="/vote" render={(props) => <Vote {...props} />} exact />
        <Route
          path="/poll/:pollId"
          render={(props) => <Login {...props} />}
          exact
        />
      </Switch>
    </main>
  );
}
