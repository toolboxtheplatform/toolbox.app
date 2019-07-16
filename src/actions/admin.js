import * as types from './index';

export const newToolAction = (tool) => {
  return {
    type: types.ON_NEW_TOOL,
    tool
  }
};

export const fetchToolsListAction = () => {
  return {
    type: types.ON_FETCH_TOOLS_LIST
  }
};

export const newEmployeeAction = employee => {
  return {
    type: types.ON_NEW_EMPLOYEE,
    employee
  }
};

export const fetchEmployeesAction = employee => {
  return {
    type: types.ON_FETCH_EMPLOYEES,
    employee
  }
};

export const fetchToolsAction = () => {
  return {
    type: types.ON_FETCH_EMPLOYEE_TOOLS_LIST
  }
};

export const deleteToolAction = (id) => {
  return {
    type: types.ON_DELETE_TOOL,
    id
  }
};

export const deleteEmployeesAction = (employee) => {
  return {
    type: types.ON_DELETE_EMPLOYEE,
    employee
  }
};