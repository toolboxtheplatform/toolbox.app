import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  newEmployeeAction,
  fetchEmployeesAction,
  deleteEmployeesAction
} from '../../../actions/admin';
import { getCookie } from '../../../utils/cookies';
import './employees.scss';
import EmployeeForm from '../../common/forms/employeeForm/employeeForm';
import EmployeeTable from '../../common/tables/employeeTable/employeeTable';

class Employees extends Component {
  state = {
    tools: [],
    users: []
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
    if ((nextProps.fetch.hasOwnProperty('response') && nextProps.fetch.response !== undefined) 
        || (nextProps.add.hasOwnProperty('response') && nextProps.add.response !== undefined)) {
      if (nextProps.add.response !== undefined && (nextProps.add.response.length > nextProps.fetch.response[0].users.length)) {
        return {
          users: nextProps.add.response
        }
      }

      return {
        tools: nextProps.fetch.response[0].tools,
        users: nextProps.fetch.response[0].users
      }
    }
    return {
      tools: [],
      users: []
    }
  }

  insertNewEmployee(event) {
    event.preventDefault();
    this.props.dispatch(newEmployeeAction({
      data: {
        name: event.target.name.value,
        email: event.target.email.value,
        username: event.target.username.value,
        password: event.target.password.value,
        profession: event.target.profession.value,
        role: event.target.role.value.toLowerCase()
      },
      admin: {
        userID: getCookie('userID'),
        role: getCookie('role')
      }
    }));
  }

  deleteEmployee(employeeID) {
    this.props.dispatch(deleteEmployeesAction({
        employeeID: employeeID,
        admin: {
          userID: getCookie('userID'),
          role: getCookie('role')
        }
      }));

    this.props.dispatch(fetchEmployeesAction({
      admin: {
        userID: getCookie('userID'),
        role: getCookie('role')
      }
    }));
  }

  editEmployee(employeeID) {
    console.log(employeeID);
  }

  render() {
    if (this.state.users.length === 0 || this.state.tools.length === 0) {
      return <div className='loading'>Loading...</div>
    }

    return (
      <div className='container new-container'>
        <EmployeeForm 
          insertNewEmployee={this.insertNewEmployee.bind(this)}
        />
        <EmployeeTable users={this.state.users} deleteEmployee={this.deleteEmployee.bind(this)} editEmployee={this.editEmployee.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Employees);
