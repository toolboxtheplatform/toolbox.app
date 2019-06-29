import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { newEmployeeAction } from '../../../actions/admin';

class Employees extends PureComponent {
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
    // this.props.dispatch(fetchEmployeesAction());
  }

  render() {
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
        <div className='list'></div>
      </div>
    );
  }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Employees);