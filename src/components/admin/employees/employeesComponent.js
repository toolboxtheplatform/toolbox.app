import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  newEmployeeAction,
  fetchEmployeesAction
} from '../../../actions/admin';

class Employees extends PureComponent {
  state = {
    fetch: undefined
  }

  onSubmitHandle(event) {
    event.preventDefault();
    this.props.dispatch(newEmployeeAction({
      name: event.target.name.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value
    }));
  }

  componentDidMount() {
    this.props.dispatch(fetchEmployeesAction());
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.fetch.hasOwnProperty('response')) {
      return {
        fetch: nextProps.fetch.response
      }
    }

    return {
      fetch: undefined
    }
  }

  render() {
    if (this.state.fetch === undefined) {
      return <div className='loading'>Loading...</div>
    }

    return (
      <div className='container new-container'>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <div>
            <label>Name</label>
            <input type='text' name='name' />
          </div>
          <div>
            <label>Email</label>
            <input type='email' name='email' />
          </div>
          <div>
            <label>username</label>
            <input type='text' name='username' />
          </div>
          <div>
            <label>Password</label>
            <input type='password' name='password' />
          </div>
          <div>
            <label>Role</label>
            <select name='role'>
              <option>Select Role</option>
              <option value='admin'>Admin</option>
              <option value='employee'>Employee</option>
            </select>
          </div>
          <div>
            <button>Add Employee</button>
          </div>
        </form>
        <table className='list'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {this.state.fetch.map(employee => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.username}</td>
                <td>{employee.role}</td>
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
