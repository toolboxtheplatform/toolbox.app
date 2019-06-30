import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  newEmployeeAction,
  fetchEmployeesAction
} from '../../../actions/admin';
import { getCookie } from '../../../utils/cookies';
import './employees.scss';

class Employees extends PureComponent {
  state = {
    tools: undefined,
    users: undefined
  }

  onSubmitHandle(event) {
    event.preventDefault();
    let tools = [];
    event.target.tools.forEach(item => {
      if (item.checked) {
        tools.push({
          toolID: item.value.split(' ')[1],
          toolName: item.value.split(' ')[0]
        });
      }
    });

    this.props.dispatch(newEmployeeAction({
      data: {
        name: event.target.name.value,
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
        tools: tools,
      },
      admin: {
        userID: getCookie('userID'),
        role: getCookie('role')
      }
    }));
  }

  componentDidMount() {
    this.props.dispatch(fetchEmployeesAction());
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (nextProps.fetch.hasOwnProperty('response')) {
      return {
        tools: nextProps.fetch.response[0].tools,
        users: nextProps.fetch.response[0].users
      }
    } else if (nextProps.add.hasOwnProperty('response')) {
      return {
        users: nextProps.add.response,
        tools: undefined
      }
    }

    return {
      tools: undefined,
      users: undefined
    }
  }

  render() {
    if (this.state.users === undefined || this.state.tools === undefined) {
      return <div className='loading'>Loading...</div>
    }

    return (
      <div className='container new-container'>
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <div className='items-container'>
            <label htmlFor='name'>Name
              <input type='text' name='name' id='name' />
            </label>
            <label htmlFor='email'>Email
              <input type='email' name='email' id='email' />
            </label>
            <label htmlFor='username'>Username
              <input type='text' name='username' id='username' />
            </label>
          </div>
          <div className='items-container'>
            <label htmlFor='password'>Password
              <input type='password' name='password' id='password' />
            </label>
            <label htmlFor='role'>Role
              <select name='role' id='role'>
                <option>Select Role Administrator or Employee</option>
                <option value='admin'>Admin</option>
                <option value='employee'>Employee</option>
              </select>
            </label>
          </div>
          <div className='items-container checkbox-container'>
            {this.state.tools.map(item => (
              <div key={item._id}>
                <input type='checkbox' name='tools' value={`${item.className.replace(' ', '-')} ${item._id}`} id={item.name} /><label htmlFor={item.name}>{item.name}</label>
              </div>
            ))}
          </div>
          <div><button>Add Employee</button></div>
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
            {this.state.users.map(employee => (
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
