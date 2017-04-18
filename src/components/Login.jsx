import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const Login = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="center">
    <h1 className="welcome">Welcome</h1>
    <h2>Please login</h2>
    <Field id="email" name="email" type="text" component="input" placeholder="Email" required /><br />
    <Field id="password" name="password" type="password" component="input" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
);

Login.propTypes = {
  handleSubmit: PropTypes.func,
};

Login.defaultProps = {
  handleSubmit: null,
};

export default reduxForm({
  form: 'login', // a unique name for this form
})(Login);
