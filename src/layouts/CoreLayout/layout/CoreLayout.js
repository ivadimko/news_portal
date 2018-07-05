import React, { Component, Fragment } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { USER_TOKEN } from '@/config/constants';
import cookies from 'js-cookie';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';
import Header from '../components/Header';

const LoadableHome = Loadable({
  loader: () => import('@/components/pages/Home'),
  loading() { return <div>Loading...</div>; },
});

const LoadableSignIn = Loadable({
  loader: () => import('@/components/pages/SignIn'),
  loading() { return <div>Loading...</div>; },
});

const LoadableSignUp = Loadable({
  loader: () => import('@/components/pages/SignUp'),
  loading() { return <div>Loading...</div>; },
});

const LoadableAddNewArticle = Loadable({
  loader: () => import('@/components/pages/AddNewArticle'),
  loading() { return <div>Loading...</div>; },
});

const LoadableViewArticle = Loadable({
  loader: () => import('@/components/pages/ViewArticle'),
  loading() { return <div>Loading...</div>; },
});

const LoadableEditArticle = Loadable({
  loader: () => import('@/components/pages/EditArticle'),
  loading() { return <div>Loading...</div>; },
});

class CoreLayout extends Component {
  static propTypes = {
    getUserDetails: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    isLogged: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    const { getUserDetails, history } = this.props;
    const token = cookies.get(USER_TOKEN);
    if (!!token && token !== 'undefined') {
      getUserDetails(token)
        .then(() => history.push('/home'));
    }
  }
  render() {
    const { isLogged } = this.props;
    return (
      <Fragment>
        <Route component={Header}/>
        <Switch>

          <Route exact path="/" render={() => (
            isLogged ? (
              <Redirect to="/home"/>
            ) : (
              <Redirect to="/sign-in"/>
            )
          )}/>
          <Route path='/home' component={LoadableHome}/>
          <Route path='/sign-in' component={LoadableSignIn}/>
          <Route path='/sign-up' component={LoadableSignUp}/>
          <Route path='/new-article' component={LoadableAddNewArticle}/>
          <Route path='/view-article/:slug' component={LoadableViewArticle}/>
          <Route path='/edit-article/:slug' component={LoadableEditArticle}/>
        </Switch>
      </Fragment>
    );
  }
}
export default withRouter(CoreLayout);
