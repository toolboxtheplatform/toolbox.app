import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  newEmployeeAction,
  fetchEmployeesAction
} from '../../../actions/admin';
import { getCookie } from '../../../utils/cookies';
import './employees.scss';
import Button from '../../common/button/button';

class Employees extends PureComponent {
  state = {
    tools: [],
    users: []
  }

  onSubmitHandle(event) {
    event.preventDefault();
    // let tools = [];
    // event.target.tools.forEach(item => {
    //   if (item.checked) {
    //     tools.push({
    //       toolID: item.value.split(' ')[1],
    //       toolName: item.value.split(' ')[0]
    //     });
    //   }
    // });

    this.props.dispatch(newEmployeeAction({
      data: {
        name: event.target.name.value,
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
        role: event.target.role.value
        // tools: tools,
      },
      admin: {
        userID: getCookie('userID'),
        role: getCookie('role')
      }
    }));
  }

  componentDidMount() {
    this.props.dispatch(fetchEmployeesAction({
      admin: {
        userID: getCookie('userID'),
        role: getCookie('role')
      }
    }));
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.fetch.hasOwnProperty('response') || nextProps.fetch.response !== undefined) {
      return {
        tools: nextProps.fetch.response[0].tools,
        users: nextProps.fetch.response[0].users
      }
    } else if (nextProps.add.hasOwnProperty('response')) {
      return {
        users: nextProps.add.response,
        tools: []
      }
    }

    return {
      tools: [],
      users: []
    }
  }

  render() {
    if (this.state.users.length === 0 || this.state.tools.length === 0) {
      return <div className='loading'>Loading...</div>
    }

    return (
      <div className='container new-container'>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <div className='items-container'>
            <label htmlFor='name'><span>Name</span>
              <input className='input' type='text' name='name' id='name' autoFocus />
            </label>
            <label htmlFor='email'><span>Email</span>
              <input className='input' type='email' name='email' id='email' />
            </label>
          </div>
          <div className='items-container'>
            <label htmlFor='username'><span>Username</span>
              <input className='input' type='text' name='username' id='username' />
            </label>
            <label htmlFor='password'><span>Password</span>
              <input className='input' type='password' name='password' id='password' />
            </label>
          </div>
          <div className='items-container'>
            <label htmlFor='role'><span>Role</span>
              <select name='role' id='role' className='select'>
                <option>Select Role Administrator or Employee</option>
                <option value='admin'>Admin</option>
                <option value='employee'>Employee</option>
              </select>
            </label>
            <div className='btn-container'>
              <Button classList='btn normal btn-add-employee' label='Add Employee' />
            </div>
          </div>
        </form>
        <table className='list'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(employee => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.username}</td>
                <td>{employee.role}</td>
                <td className='actions'>
                  <Button classList='btn success' label='Edit' />
                  <Button classList='btn danger' label='Delete' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Employees);
