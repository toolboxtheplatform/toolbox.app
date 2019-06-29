import { put, call } from 'redux-saga/effects';
import { employeesService } from '../../../services/admin/employees/employeesService';

import * as types from '../../../actions'

export function* employeesSaga(payload) {
  try {
    const response = yield call(employeesService, payload);
    yield [
      put({ type: types.ON_NEW_EMPLOYEE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_NEW_EMPLOYEE_SUCCESS, error });
  }
}
