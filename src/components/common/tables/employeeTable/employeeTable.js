import React from 'react';
import Button from '../../button/button';
import Label from '../../label/label';
import './employeeTable.scss';

const EmployeeTable = ({ users, onEditEmployee, onDeleteEmployee }) => {
  const onHandleEditEmployee = (employeeID) => {
    onEditEmployee(employeeID);
  }

  const onHandleDeleteEmployee = employeeID => {
    onDeleteEmployee(employeeID);
  }

  return (
    <table className='list'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Profession</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map(employee => (
          <tr key={employee._id}>
            <td>{employee.name} <Label role={employee.role} label={employee.role.toLowerCase()} /></td>
            <td>{employee.email}</td>
            <td>{employee.username}</td>
            <td>{employee.profession}</td>
            <td className='actions'>
              <Button classList='btn success' label='Edit' employee={employee} onHandleEvent={onHandleEditEmployee.bind(this, employee._id)} />
              <Button classList='btn danger' label='Delete' employee={employee} onHandleEvent={onHandleDeleteEmployee.bind(this, employee._id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default EmployeeTable;