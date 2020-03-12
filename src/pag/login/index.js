import React from "react";
//import { Formik } from "formik";
//import { useHistory, Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
// @utilities
//import { useAuth } from "../../utilities/useAuth";
import { Wrapper } from "./styles";
// @schema
//import validationSchema from "./validationSchema";

export default () => {
  return (
    <Wrapper>
      <h1>Login</h1>
      <Form>
        <FormGroup>
          <Label htmlFor="username">Usuario</Label>
          <Input id="username" type="text" name="username" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Contreseña</Label>
          <Input id="password" type="password" name="password" />
        </FormGroup>
        <Button color="primary">Iniciar sesión</Button>
      </Form>
    </Wrapper>
  );
};
