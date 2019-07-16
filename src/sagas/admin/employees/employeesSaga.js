import { put, call } from 'redux-saga/effects';
import {
  newEmployeeService,
  getEmployeesService,
  deleteEmployeeService
} from '../../../services/admin/employees/employeesService';

import * as types from '../../../actions';

export function* employeesSaga(payload) {
  try {
    const response = yield call(newEmployeeService, payload);
    yield [
      put({ type: types.ON_NEW_EMPLOYEE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_NEW_EMPLOYEE_SUCCESS, error });
  }
}

export function* getEmployeesSaga(payload) {
  try {
    const response = yield call(getEmployeesService, payload);
    yield [
      put({ type: types.ON_FETCH_EMPLOYEES_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_FETCH_EMPLOYEES_SUCCESS, error });
  }
}

export function* deleteEmployeesSaga(payload) {
  try {
    const response = yield call(deleteEmployeeService, payload);
    yield [
      put({ type: types.ON_DELETE_EMPLOYEE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_DELETE_EMPLOYEE_SUCCESS, error });
  }
}
