import * as types from './index';

export const employeeProfileAction = id => {
  return {
    type: types.FETCH_EMPLOYEE_PROFILE_BEGIN,
    id,
  }
};

export const updateProfileAction = (profile) => {
  return {
    type: types.UPDATE_EMPLOYEE_PROFILE_BEGIN,
    profile
  }
};