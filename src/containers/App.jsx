import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';
import Login from '../components/Login';
import Profile from '../components/Profile';
import Audio from '../components/Audio';

/**
 * this container is defined as class so we can call and modify state
 */
class App extends React.Component {
  /**
   * @param {*} props comprehends all the props and actions defined in prop validation below
   */
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    // if the browser has cookies, login user with it
    if (document.cookie && props.authenticated === false) {
      props.loginFromCookie();
    }
  }
  /**
   * wait auauthentication and then fetch stuff
   * @param {*} nextProps check if user is authenticated to know if we have cookies
   * @return {object} state with our audio data
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.authenticated === false && nextProps.authenticated === true) {
      this.props.getData();
    }
  }
  /**
   * submit the login form
   * @param {object} values email and password
   * @return {object} the user and token
   */
  handleSubmit(values) {
    this.props.loginUser(values.email, values.password);
  }
  /**
   * logs out the user and deletes cookies
   * @return {*} deletes cookies and user from state as well as deleting audio array
   */
  handleLogout() {
    this.props.logout();
    this.props.removeData();
  }
  /**
   * this is our statefull render
   * @return {objects} our stateless components
   */
  render() {
    return (
      <div className="app">
        {/* check if cookies exist and render profile if they do */}
        {(!document.cookie.match(/^(.*;)?\s*token\s*=\s*[^;]+(.*)?$/) && this.props.authenticated === false) ?
          <Login onSubmit={this.handleSubmit} />
          :
          <div>
            <Profile
              logout={this.handleLogout}
              user={this.props.user}
              audioFiles={this.props.audioFiles}
            />
            {this.props.audioFiles.map((data, i) =>
              <Audio
                key={data.url}
                data={data}
                index={i}
              />)}
          </div>
        }
      </div>
    );
  }
}

App.propTypes = {
  loginUser: PropTypes.func,
  loginFromCookie: PropTypes.func,
  logout: PropTypes.func,
  user: PropTypes.string,
  authenticated: PropTypes.bool,
  getData: PropTypes.func,
  removeData: PropTypes.func,
  audioFiles: PropTypes.arrayOf(PropTypes.shape),
};

App.defaultProps = {
  loginUser: actions.loginUser,
  loginFromCookie: actions.loginFromCookie,
  logout: actions.logout,
  user: '',
  authenticated: false,
  getData: actions.getData,
  removeData: actions.removeData,
  audioFiles: [],
};

App.contextTypes = {
  store: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
  authenticated: state.userReducer.authenticated,
  audioFiles: state.recordingsReducer.audioFiles,
});

export default connect(mapStateToProps, actions)(App);
