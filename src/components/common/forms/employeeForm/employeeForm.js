import React, { Fragment, useState } from 'react';
import Button from '../../button/button';
import Select from '../../select/select';
import './employeeForm.scss';

const EmployeeForm = ({ onSubmitHandle }) => {
  const [state, setState] = useState({
    selectOptions: [
      {
        value: 'Admin',
        text: 'Admin'
      },
      {
        value: 'Employee',
        text: 'Employee'
      }
    ]
  });

  return (
    <Fragment>
      <form className='employee-form' onSubmit={onSubmitHandle}>
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
          <label htmlFor='employee-role'><span>Role</span>
            <Select name='role' options={state.selectOptions} id='employee-role' />
          </label>
          <label htmlFor='profession'><span>Profession</span>
            <input className='input' type='text' name='profession' id='profession' />
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