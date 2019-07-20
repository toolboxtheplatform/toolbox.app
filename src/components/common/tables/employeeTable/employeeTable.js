import React from 'react';
import Button from '../../button/button';
import Label from '../../label/label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import './employeeTable.scss';

library.add(faTrashAlt, faEdit);

const EmployeeTable = ({ users, editEmployee, deleteEmployee }) => {
  const handleEditEmployee = (employeeID) => {
    editEmployee(employeeID);
  }

  const handleDeleteEmployee = employeeID => {
    deleteEmployee(employeeID);
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
              <Button classList='btn outline success btn-edit' label={<FontAwesomeIcon icon='edit'/>} employee={employee} onHandleEvent={handleEditEmployee.bind(this, employee._id)} />
              <Button classList='btn outline danger btn-delete' label=<FontAwesomeIcon icon='trash-alt'/> employee={employee} onHandleEvent={handleDeleteEmployee.bind(this, employee._id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
};

export default EmployeeTable;