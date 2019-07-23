import * as types from './index';

export const employeeProfileAction = () => {
  return {
    type: types.FETCH_EMPLOYEE_PROFILE_BEGIN
  }
};

export const updateProfileAction = (profile) => {
  return {
    type: types.UPDATE_EMPLOYEE_PROFILE_BEGIN,
    profile
  }
};