// @vendors
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// @components
//import Dashboard from "../Dashboard";
import Login from "./pag/login";
// @utilities
import ProtectedRoute from "./configuracion/ProtectedRouter";

//export const AuthContext = React.createContext();

export default function App() {
  return (
    <Switch>
      <ProtectedRoute path="/home"></ProtectedRoute>
      <Route path="/login" component={Login} />
    </Switch>
  );
}
