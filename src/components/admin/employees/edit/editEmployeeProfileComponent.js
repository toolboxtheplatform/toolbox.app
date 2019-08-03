import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfileAction } from '../../../../actions/profile';
import Select from '../../../common/select/select';
import Button from '../../../common/button/button';
import PropTypes from 'prop-types';

class EditEmployeeProfile extends Component {
  state = {
    employee: {},
    options: [
      {
        value: 'Admin',
        text: 'Admin'
      },
      {
        value: 'Employee',
        text: 'Employee'
      }
    ],
    id: '',
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    document.body.classList.add('overflow');
    let employees = [];
    const id = this.props.match.path.split('/')[this.props.match.path.split('/').length - 1];
    const {
      fetch,
    } = this.props;
    this.setState({
      id: id,
    });
    if (fetch.hasOwnProperty('payload') && fetch.payload.length > 0 && fetch.payload[0].users.length > 0) {
      employees = this.props.fetch.payload[0].users;
    }
    if (this.props.update.hasOwnProperty('payload') && this.props.update.payload.length > 0) {
      employees = this.props.update.payload;
    }
    if (this.props.add.hasOwnProperty('payload') && this.props.add.payload.length > 0) {
      employees = this.props.add.payload;
    }
    if (this.props.deleteEmployee.hasOwnProperty('payload') && this.props.deleteEmployee.payload.length > 0) {
      employees = this.props.deleteEmployee.payload;
    }

    employees.forEach(employee => {
      if (employee._id === id) {
        this.setState({
          employee: employee,
        });
      }
    })
  }

  componentWillUnmount() {
    document.body.classList.remove('overflow');
  }

  close() {
    this.context.router.history.push(`/admin/employees`);
  }

  updateProfile(event) {
    event.preventDefault();

    let profile = {
      name: event.target.name.value,
      email: event.target.email.value,
      profession: event.target.profession.value,
      username: event.target.username.value,
      role: event.target.role.value,
      id: this.state.id,
    };

    if (event.target.password.value !== '') {
      profile['password'] = event.target.password.value;
    }

    this.props.dispatch(updateProfileAction(profile));

    this.props.add.payload = [];
    this.props.deleteEmployee.payload = [];
    if (this.props.fetch.payload.length > 0 && this.props.fetch.payload[0].users.length > 0) {
      this.props.fetch.payload[0].users = [];
    }

    this.close();
  }

  render() {
    const {
      name,
      email,
      profession,
      username,
      role,
    } = this.state.employee;
    return (
      <div>
        <div className='backdrop' onClick={this.close.bind(this)}></div>
        <div className='edit-profile-form-container'>
          <form className='edit-profile-form' onSubmit={this.updateProfile.bind(this)}>
            <div className=''>
              <label htmlFor='name'><span>Name</span>
                <input className='input' type='text' name='name' id='name' defaultValue={name} autoFocus />
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
              <Select name='role' options={this.state.options} isUpdating={true} id='employee-role' defaultValue={role} /><br />
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

const mapStateFromProps = state => (state);

export default connect(mapStateFromProps)(EditEmployeeProfile);