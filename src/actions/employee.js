import * as types from './index';

export const searchEmployeeAction = payload => {
  return {
    type: types.SEARCH_EMPLOYEE_BEGIN,
    payload,
  }
};