import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const Login = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="center form">
    <h1 className="header-title">Welcome</h1>
    <h2>Please login</h2>
    <Field className="form__input" id="email" name="email" type="text" component="input" placeholder="Email" required /><br />
    <Field className="form__input" id="password" name="password" type="password" component="input" placeholder="Password" required />
    <button className="button" type="submit">Login</button>
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
