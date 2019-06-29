import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/authenticationActions';
import { setCookie, getCookie } from '../utils/cookies';

class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let username = event.target.username.value;
    let password = event.target.password.value;

    const data = {
      username, password
    };

    this.props.dispatch(loginUserAction(data));
  }

  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;
      
      if (isSuccess) {
        setCookie('token', this.props.response.login.response.token, 1);
        setCookie('role', this.props.response.login.response.role, 1);
      }
    }

    return (
      <div>
        <h3>Login Page</h3>
        {
          (isSuccess && getCookie('role') === 'Admin')
          ?
          <Redirect to='admin/home' />
          :
          ((isSuccess && getCookie('role') === 'Employee')
            ? <Redirect to='/employee/home' />
            :
            ((isSuccess && getCookie('role') === 'Manager')
            ?
            <Redirect to='/manager' />
            :
            <div className="error">{message}</div>
            ))
        }
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        Don't have account? <Link to='register'>Register here</Link>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);