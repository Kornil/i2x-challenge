import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ user, logout }) => (
  <div className="center">
    <h1 className="header-title">Hello {user}</h1>
    <button className="button" onClick={logout}>Logout</button>
  </div>
);

Profile.propTypes = {
  user: PropTypes.string,
  logout: PropTypes.func,
};

Profile.defaultProps = {
  user: '',
  logout: null,
};

export default Profile;
