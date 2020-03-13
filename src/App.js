// @vendors
import React from "react";
import { Switch, Route } from "react-router-dom";
// @components
//import Dashboard from "../Dashboard";
import Login from "./pag/login";
// @utilities
import ProtectedRoute from "./configuracion/ProtectedRouter";
import Preg1 from "./pag/encuesta/pregunta1";
import Preg2 from "./pag/encuesta/pregunta2";
import Preg3 from "./pag/encuesta/pregunta3";
import Preg4 from "./pag/encuesta/pregunta1";
import Preg5 from "./pag/encuesta/pregunta5";

//export const AuthContext = React.createContext();

export default function App() {
  return (
    <Switch>
      <ProtectedRoute path="/home"></ProtectedRoute>
      <Route path="/login" component={Login} />
      <Route path="/encuesta/1" component={Preg1} />
      <Route path="/encuesta/2" component={Preg2} />
      <Route path="/encuesta/3" component={Preg3} />
      <Route path="/encuesta/4" component={Preg4} />
      <Route path="/encuesta/5" component={Preg5} />
    </Switch>
  );
}
