import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { renewPasswordAction } from '../actions/sessions';
import Button from './common/button/button';

class ForgotPasswordPage extends Component {
  state = {
    isPasswordMarch: true,
    error: null,
    loading: false,
    payload: {
      password: '',
      repassword: '',
      username: '',
    },
  }

  getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.forgotPassword.hasOwnProperty('payload')) {
      return {
        isPasswordMarch: nextProps.forgotPassword.payload.success,
        message: nextProps.forgotPassword.payload.message,
        loading: nextProps.forgotPassword.payload.loading,
        error: null,
      }
    }
    return {
      isPasswordMarch: true,
      message: '',
      loading: false,
      error: nextProps.forgotPassword.payload.error,
    }
  }

  sendRenewPasswordLink(event) {
    event.preventDefault();
    const password = event.target.password.value;
    const repassword = event.target.repassword.value;
    const username = event.target.username.value;
    
    if (!password || !repassword) {
      this.setState({
        isPasswordMarch: false,
        message: 'Please enter and re-enter new password for verification.',
        payload: {
          password: '',
          repassword: '',
        },
      });
    } else if (password !== repassword) {
      this.setState({
        isPasswordMarch: false,
        message: 'Passwords do not match.',
        payload: {
          password: '',
          repassword: '',
        },
      })
    } else {
      this.setState({
        isPasswordMarch: true,
        payload: {
          password: password,
          repassword: repassword,
          username: username,
        },
      }, () => {
        this.props.dispatch(renewPasswordAction(this.state.payload));
      });
    }
  }

  render() {
    return (
      <div className='container form-container'>
        <Link to='/' className='logo'></Link>
        {
          (!this.state.isPasswordMarch)
          ?
          <div className="error">{this.state.message}</div>
          :
          <div>{this.state.message}</div>
        }
        
        <form onSubmit={this.sendRenewPasswordLink.bind(this)}>
          <div>
            <label htmlFor="username"><span>Username</span>
              <input className='input' type="text" name="username" id="username" autoFocus />
            </label>
          </div>
          <div>
            <label htmlFor="password"><span>Enter new password</span>
              <input className='input' type="password" name="password" id="password" />
            </label>
          </div>
          <div>
            <label htmlFor="repassword"><span>Re-enter new password</span>
              <input className='input' type="password" name="repassword" id="repassword" />
            </label>
          </div>
          <div>
            <Button classList='btn normal' label='Update Password' />
            <Link to='/login' className='link margin-left'>Login</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(ForgotPasswordPage);