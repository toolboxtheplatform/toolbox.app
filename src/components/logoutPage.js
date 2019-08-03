import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCookie, setCookie } from '../utils/cookies';
import { connect } from 'react-redux';

import { logoutAction } from '../actions/authenticationActions';

class LogoutPage extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(logoutAction({
      userID: getCookie('userID'),
      access: getCookie('role'),
    }));
  }

  render() {
    setCookie('token', getCookie('token'), 0);
    setCookie('role', getCookie('role'), 0);
    setCookie('userID', getCookie('userID'), 0);
    if (getCookie('token') === null || getCookie('token') === '') {
      return <Redirect to='/' />;
    }
    return <Redirect to='/admin/empoyees' />
  }
}

export default connect()(LogoutPage);
