import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cookies from 'js-cookie';
import { USER_TOKEN } from '@/config/constants';
import Home from '@/components/pages/Home/index';


class App extends Component {
  static propTypes = {
    getUserDetails: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const { getUserDetails } = this.props;
    const token = cookies.get(USER_TOKEN);
    if (!!token && token !== 'undefined') getUserDetails(token);
  }
  render() {
    return (
      <Home/>
    );
  }
}


export default App;
