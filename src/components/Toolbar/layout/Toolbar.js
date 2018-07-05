import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cookies from 'js-cookie';
import { NavLink, withRouter } from 'react-router-dom';
import { USER_TOKEN } from '@/config/constants/index';
import '../_Toolbar.scss';

class Toolbar extends Component {
  static propTypes = {
    logOut: PropTypes.func.isRequired,
    isLogged: PropTypes.bool.isRequired,
    account: PropTypes.object.isRequired,
  }

  logOut = () => {
    const { logOut } = this.props;
    cookies.remove(USER_TOKEN);
    logOut();
  }

  render() {
    const { isLogged, account } = this.props;
    return (
      <div className="toolbar">
        <nav className="toolbar__links links">
          <NavLink className="links__item" to='/home'>Home</NavLink>
          {!isLogged && (
            <Fragment>
              <NavLink className="links__item" to={{ pathname: '/sign-in', state: { title: 'Sign In' } }}>Sign In</NavLink>
              <NavLink className="links__item" to={{ pathname: '/sign-up', state: { title: 'Sign Up' } }}>Sign Up</NavLink>
            </Fragment>
          )}
          {isLogged && (
            <p className="toolbar__message">Hello, {account.name}, <a href="javascript: void null" onClick={this.logOut}>Log Out</a></p>
          )}
        </nav>
      </div>
    );
  }
}

export default withRouter(Toolbar);
