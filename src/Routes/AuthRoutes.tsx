import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "src/Pages/Login";

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path="/login" component={Login} />

    <Redirect to="/login" />
  </Switch>
);

export default AuthRoutes;
