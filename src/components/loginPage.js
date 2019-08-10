import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/sessions';
import { setCookie, getCookie } from '../utils/cookies';
import Button from './common/button/button';
import './session.scss';

class LoginPage extends Component {
  componentDidMount(){
    document.title = 'Toolbox';
  }

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
        setCookie('userID', this.props.response.login.response.userID, 1);
      }
    }

    return (
      <div className='container form-container'>
        <Link to='/' className='logo'></Link>
        {
          (isSuccess && getCookie('role') === 'Admin')
          ?
          <Redirect to='admin/home' />
          :
          ((isSuccess && getCookie('role') === 'Employee')
            ? <Redirect to='/employee/dashboard' />
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
            <label htmlFor="username"><span>Username</span>
              <input className='input' type="text" name="username" id="username" autoFocus />
            </label>
          </div>
          <div>
            <label htmlFor="password"><span>Password</span>
              <input className='input' type="password" name="password" id="password" />
            </label>
          </div>
          <div>
            <Button classList='btn normal' label='Login' />
            <Link to='/forgot' className='link margin-left'>Forgot Password</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({response});

export default connect(mapStateToProps)(LoginPage);