import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getCookie, setCookie } from '../utils/cookies';
import { connect } from 'react-redux';

import { logoutAction } from '../actions/sessions';

class LogoutPage extends Component {
  constructor(props) {
    super(props);
    this.props.dispatch(logoutAction({
      userID: getCookie('userID'),
      access: getCookie('role'),
    }));
  }

  componentWillMount() {
    setCookie('token', getCookie('token'), 0);
    setCookie('role', getCookie('role'), 0);
    setCookie('userID', getCookie('userID'), 0);
  }

  render() {
    if (getCookie('token') == null || getCookie('token') == '' || !getCookie('token')) {
      return <Redirect to='/login' />;
    }
    if (getCookie('role') === 'Employee') {
      return <Redirect to='/employee/dashboard' />
    }
    return <Redirect to='/admin/home' />
  }
}

export default connect()(LogoutPage);
