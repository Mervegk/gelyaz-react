import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Contact() {
  return (
    <div>
      <h1>İletişim</h1>
      <Formik
        initialValues={{ email: '', firstName: '', lastName: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
            <Field type="text" name="lastName" />
            <ErrorMessage name="lastName" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
