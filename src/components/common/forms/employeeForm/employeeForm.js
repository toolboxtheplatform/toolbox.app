import React, { Fragment, useState } from 'react';
import Button from '../../button/button';
import Select from '../../select/select';
import './employeeForm.scss';

const EmployeeForm = ({ insertNewEmployee }) => {
  const [state] = useState({
    selectOptions: [
      {
        value: 'Admin',
        text: 'Admin',
      },
      {
        value: 'Employee',
        text: 'Employee',
      }
    ],
  });

  return (
    <Fragment>
      <form className='employee-form' onSubmit={insertNewEmployee}>
        <div className='items-container'>
          <label htmlFor='name'><span>Name</span>
            <input className='input' type='text' name='name' id='name' placeholder='Enter name of new employee' />
          </label>
          <label htmlFor='email'><span>Email</span>
            <input className='input' type='email' name='email' id='email' placeholder='Enter email of new employee' />
          </label>
        </div>
        <div className='items-container'>
          <label htmlFor='username'><span>Username</span>
            <input className='input' type='text' name='username' id='username' placeholder='Enter username of new employee' />
          </label>
          <label htmlFor='password'><span>Password</span>
            <input className='input' type='password' name='password' id='password' placeholder='Enter password of new employee' />
          </label>
        </div>
        <div className='items-container'>
          <label htmlFor='employee-role'><span>Role</span></label>
          <Select name='role' options={state.selectOptions} id='employee-role' />
          <label htmlFor='profession'><span>Profession</span>
            <input className='input' type='text' name='profession' id='profession' placeholder='Enter profession such as Developer etc of new employee' />
          </label>
        </div>
        <div className='items-container'>
          <div className='btn-container'>
            <Button classList='btn normal btn-add-employee' label='Add Employee' />
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default EmployeeForm;