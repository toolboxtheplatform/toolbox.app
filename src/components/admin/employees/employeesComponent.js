import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  addEmployeeAction,
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
    users: [],
    loading: false,
    error: null
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
    if ((nextProps.fetch.hasOwnProperty('employees') && nextProps.fetch.employees.length > 0) && (nextProps.add.hasOwnProperty('response') && nextProps.add.response !== undefined)) {
      if ((nextProps.fetch.employees.length > 0) && (nextProps.add.response.length > nextProps.fetch.employees[0].users.length)) {
        return {
          loading: nextProps.add.loading,
          error: nextProps.add.error,
          users: nextProps.add.response
        }
      }
      return {
        loading: nextProps.fetch.loading,
        error: nextProps.fetch.error,
        users: nextProps.fetch.employees[0].users
      }
    }
    return {
      loading: false,
      error: null,
      users: []
    }
  }

  insertNewEmployee(event) {
    event.preventDefault();
    this.props.dispatch(addEmployeeAction({
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
    if (this.state.loading) {
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
