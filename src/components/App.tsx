import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

import Main from "./Main";
import Login from "./Login";

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
