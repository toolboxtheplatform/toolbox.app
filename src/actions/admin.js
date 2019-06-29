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