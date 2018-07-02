import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import cookies from 'js-cookie';
import classNames from 'classnames';
import { USER_TOKEN } from '@/config/constants';
import LogInForm from '../components/SignInForm/index';
import SignUpForm from '../components/SignUpForm/index';
import '../_User.scss';

export default class User extends Component {
  constructor() {
    super();

    this.state = {
      currentTab: 'sign-in',
    };
  }

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

  changeCurrentTab = name => this.setState({
    currentTab: name,
  })

  render() {
    const { isLogged, account } = this.props;
    const { currentTab } = this.state;
    return (
      <Fragment>
        <div className="tabs">
          {!isLogged && (
            <Fragment>
              <div className={classNames('tabs__item', 'tab', { 'is-active': currentTab === 'sign-in' })}>
                <a href="javascript: void null" onClick={() => this.changeCurrentTab('sign-in')}>Log In</a>
              </div>
              <div className={classNames('tabs__item', 'tab', { 'is-active': currentTab === 'sign-up' })}>
                <a href="javascript: void null" onClick={() => this.changeCurrentTab('sign-up')}>Sign Up</a>
              </div>
            </Fragment>
          )}
          {isLogged && (
            <div className="tabs__item tab">
              <p>Hello, {account.name}, <a href="javascript: void null" onClick={this.logOut}>Log Out</a></p>
            </div>
          )}
        </div>
        {!isLogged && currentTab === 'sign-in' && <LogInForm/>}
        {!isLogged && currentTab === 'sign-up' && <SignUpForm/>}
      </Fragment>
    );
  }
}
