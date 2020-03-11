// @vendors
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// @components
//import Layout from "../Layout";
//import Dashboard from "../Dashboard";
import Login from "./pag/login";
// @utilities
//import ProtectedRoute from "../../utilities/ProtectedRouter";

//export const AuthContext = React.createContext();

export default function App() {
  return (
    <Switch>
      <Route path="/home"></Route>
      <Route path="/login" component={Login} />
    </Switch>
  );
}
