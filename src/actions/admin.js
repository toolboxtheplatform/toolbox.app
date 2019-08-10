import * as types from './index';

export const addEmployeeAction = employee => {
  return {
    type: types.ADD_EMPLOYEE_BEGIN,
    employee
  }
};

export const fetchEmployeesAction = employee => {
  return {
    type: types.FETCH_EMPLOYEES_BEGIN,
    employee
  }
};

export const deleteEmployeesAction = (employee) => {
  return {
    type: types.DELETE_EMPLOYEE_BEGIN,
    employee
  }
};