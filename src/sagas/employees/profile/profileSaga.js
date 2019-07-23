import { put, call } from 'redux-saga/effects';
import {
  employeeProfileService,
  updateProfileService
} from '../../../services/employees/profile/employeeProfileService';

import * as types from '../../../actions'

export function* profileSaga(payload) {
  try {
    const response = yield call(employeeProfileService, payload);
    yield [
      put({ type: types.FETCH_EMPLOYEE_PROFILE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_EMPLOYEE_PROFILE_FAILURE, error });
  }
}

export function* updateProfileSaga(payload) {
  try {
    const response = yield call(updateProfileService, payload);
    yield [
      put({ type: types.UPDATE_EMPLOYEE_PROFILE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.UPDATE_EMPLOYEE_PROFILE_FAILURE, error });
  }
}
