import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <div>
      <h1>React form validation with formik and styled components</h1>
      <Formik
        initialValues={{
          radio: "",
          email: ""
        }}
        validationSchema={Yup.object().shape({
          radio: Yup.string()
            .min(2, "Your name is too short")
            .required("Please enter your full name"),
          email: Yup.string()
            .email("The email is incorrect")
            .required("Please enter your email")
        })}
        onSubmit={(values, { setSubmitting }) => {
          const timeOut = setTimeout(() => {
            console.log(values);
            setSubmitting(false);

            clearTimeout(timeOut);
          }, 1000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          validating,
          valid
        }) => {
          return (
            <Form name="contact" method="post" onSubmit={handleSubmit}>
              <label htmlFor="radio">
                option1
                <Field
                  type="radio"
                  name="radio1"
                  id="exampleRadios1"
                  value="option1"
                />
              </label>
              {errors.radio && touched.radio && <p>{errors.radio}</p>}
              <label htmlFor="email">
                Email
                <Field
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="your email"
                />
              </label>
              <ErrorMessage name="email">{msg => <p>{msg}</p>}</ErrorMessage>
              <button type="submit" disabled={!valid || isSubmitting}>
                {isSubmitting ? `Submiting...` : `Submit`}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
