import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  newEmployeeAction,
  fetchEmployeesAction
} from '../../../actions/admin';
import { getCookie } from '../../../utils/cookies';
import './employees.scss';
import EmployeeForm from '../../common/forms/employeeForm/employeeForm';
import EmployeeTable from '../../common/tables/employeeTable/employeeTable';

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
        profession: event.target.profession.value,
        role: event.target.role.value.toLowerCase()
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
        <EmployeeForm 
          onSubmitHandle={this.onSubmitHandle.bind(this)}
        />
        <EmployeeTable users={this.state.users} onDeleteEmployee={this.onDeleteEmployee.bind(this)} onEditEmployee={this.onEditEmployee.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Employees);
