import React, { Component, Fragment } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { USER_TOKEN } from '@/config/constants';
import cookies from 'js-cookie';
import PropTypes from 'prop-types';
import Home from '@/components/pages/Home';
import SignIn from '@/components/pages/SignIn';
import SignUp from '@/components/pages/SignUp';
import AddNewArticle from '@/components/pages/AddNewArticle';
import ViewArticle from '@/components/pages/ViewArticle';
import EditArticle from '@/components/pages/EditArticle';
import Header from '../components/Header';

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
          <Route path='/home' component={Home}/>
          <Route path='/sign-in' component={SignIn}/>
          <Route path='/sign-up' component={SignUp}/>
          <Route path='/new-article' component={AddNewArticle}/>
          <Route path='/view-article/:slug' component={ViewArticle}/>
          <Route path='/edit-article/:slug' component={EditArticle}/>
        </Switch>
      </Fragment>
    );
  }
}
export default withRouter(CoreLayout);
