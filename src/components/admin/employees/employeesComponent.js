import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  addEmployeeAction,
  fetchEmployeesAction,
  deleteEmployeesAction
} from '../../../actions/admin';
import { getCookie } from '../../../utils/cookies';
import './employees.scss';
import EmployeeForm from '../../common/forms/employeeForm/employeeForm';
import EmployeeTable from '../../common/tables/employeeTable/employeeTable';
import EditEmployeeProfile from './edit/editEmployeeProfileComponent';

class Employees extends Component {
  state = {
    tools: [],
    users: [],
    loading: false,
    error: null,
    id: '',
  }

  static contextTypes = {
    router: PropTypes.object
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
    const {
      deleteEmployee,
      fetch,
      add,
      update,
    } = nextProps;
    if (deleteEmployee.hasOwnProperty('payload') && deleteEmployee.payload.length > 0) {
      if (fetch.employees.length > 0) {
        fetch.employees[0].users = [];
      }
      add.response = [];
      update.employee = [];
      return {
        users: deleteEmployee.payload,
        loading: deleteEmployee.loading,
        error: null,
      }
    }

    if (update.employee.length > 0) {
      if (fetch.employees.length > 0) {
        fetch.employees[0].users = [];
      }
      add.response = [];
      deleteEmployee.payload = [];
      return {
        users: update.employee,
      }
    }
    if (add.hasOwnProperty('response') && add.response.length > 0) {
      if (fetch.employees.length > 0) {
        fetch.employees[0].users = [];
      }
      update.response = [];
      deleteEmployee.payload = [];
      return {
        loading: false,
        error: null,
        users: add.response,
      }
    }
    if (fetch.hasOwnProperty('employees') && fetch.employees.length > 0) {
      add.response = [];
      update.response = [];
      deleteEmployee.payload = [];
      return {
        loading: false,
        error: null,
        users: fetch.employees[0].users,
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

    event.target.name.value = '';
    event.target.email.value = '';
    event.target.username.value = '';
    event.target.password.value = '';
    event.target.profession.value = '';
    event.target.role.value = 'Select a role administrator or employee';
  }

  deleteEmployee(employeeID) {
    this.props.dispatch(deleteEmployeesAction({
        employeeID: employeeID,
        admin: {
          userID: getCookie('userID'),
          role: getCookie('role')
        }
      }));

    // this.props.dispatch(fetchEmployeesAction({
    //   admin: {
    //     userID: getCookie('userID'),
    //     role: getCookie('role')
    //   }
    // }));
  }

  editEmployee(employeeID) {
    this.setState({
      id: employeeID
    });
    this.props.fetch.employees[0].users = this.props.fetch.employees[0].users || this.props.add.response || this.props.deleteEmployee.payload || this.props.update.response;
    this.context.router.history.push(`/admin/employees/profile/edit/${employeeID}`);
  }

  render() {
    // console.log(this.props);
    if (this.state.loading) {
      return <div className='loading'>Loading...</div>
    }

    return (
      <div className='container new-container'>
        <EmployeeForm 
          insertNewEmployee={this.insertNewEmployee.bind(this)}
        />
        <EmployeeTable users={this.state.users} deleteEmployee={this.deleteEmployee.bind(this)} editEmployee={this.editEmployee.bind(this)} />
        <Route path={`${this.props.match.path}/profile/edit/${this.state.id}`} component={EditEmployeeProfile} />
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Employees);
