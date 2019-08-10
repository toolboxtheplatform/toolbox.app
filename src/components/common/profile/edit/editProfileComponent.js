import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfileAction } from '../../../../actions/profile';
import PropTypes from 'prop-types';
import Select from '../../select/select';
import Button from '../../button/button';
import { getCookie } from '../../../../utils/cookies';

import './editProfile.scss';

class EditProfile extends Component {
  state = {
    employee: [],
    options: [
      {
        value: 'Admin',
        text: 'Admin',
      },
      {
        value: 'Employee',
        text: 'Employee',
      }
    ],
  }

  static contextTypes = {
    router: PropTypes.object,
  }

  componentDidMount() {
    this.setState({
      employee: this.props.profile.payload,
    });
  }

  updateProfile(event) {
    event.preventDefault();

    let profile = {
      name: event.target.name.value,
      email: event.target.email.value,
      profession: event.target.profession.value,
      username: event.target.username.value,
      role: event.target.role.value,
      id: this.state.employee._id,
    };

    if (event.target.password.value !== '') {
      profile['password'] = event.target.password.value;
    }

    this.props.dispatch(updateProfileAction(profile));

    this.close();
  }

  close() {
    if (getCookie('role') === 'Admin') {
      this.context.router.history.push(`/admin/profile/`);
    } else {
      this.context.router.history.push(`/employee/profile/`);
    }
    
  }

  render() {
    const {
      name,
      email,
      profession,
      role,
      username,
    } = this.state.employee;

    return (
      <div>
        <div className='backdrop' onClick={this.close.bind(this)}></div>
        <div className='edit-profile-form-container'>
          <form className='edit-profile-form' onSubmit={this.updateProfile.bind(this)}>
            <div className=''>
              <label htmlFor='name'><span>Name</span>
                <input className='input' type='text' name='name' id='name' autoFocus defaultValue={name} />
              </label><br />
              <label htmlFor='email'><span>Email</span>
                <input className='input' type='email' name='email' id='email' defaultValue={email} />
              </label><br />
              <label htmlFor='profession'><span>Profession</span>
                <input className='input' type='text' name='profession' id='profession' defaultValue={profession} />
              </label><br />
              <label htmlFor='username'><span>Username</span>
                <input className='input' type='text' name='username' id='username' defaultValue={username} />
              </label><br />
              <label htmlFor='password'><span>Password</span>
                <input className='input' type='password' name='password' id='password' />
              </label><br />
              <label htmlFor='employee-role'><span>Role</span></label>
              <Select name='role' options={this.state.options} isUpdating={true} defaultValue={role} id='employee-role' /><br />
              <div className='btn-container'>
                <Button classList='btn normal btn-add-employee' label='Update' />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(EditProfile);