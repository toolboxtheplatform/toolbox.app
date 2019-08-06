import { put, call } from 'redux-saga/effects';
import {
  newEmployeeService,
  getEmployeesService,
  deleteEmployeeService,
  searchEmployeeService,
} from '../../../services/admin/employees/employeesService';

import * as types from '../../../actions';

export function* employeesSaga(payload) {
  try {
    const response = yield call(newEmployeeService, payload);
    yield [
      put({ type: types.ADD_EMPLOYEE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ADD_EMPLOYEE_FAILURE, error });
  }
}

export function* getEmployeesSaga(payload) {
  try {
    const response = yield call(getEmployeesService, payload);
    yield [
      put({ type: types.FETCH_EMPLOYEES_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_EMPLOYEES_FAILURE, error });
  }
}

export function* deleteEmployeesSaga(payload) {
  try {
    const response = yield call(deleteEmployeeService, payload);
    yield [
      put({ type: types.DELETE_EMPLOYEE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.DELETE_EMPLOYEE_FAILURE, error });
  }
}

export function* searchEmployeesSaga(payload) {
  try {
    const response = yield call(searchEmployeeService, payload);
    yield [
      put({ type: types.SEARCH_EMPLOYEE_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.SEARCH_EMPLOYEE_FAILURE, error });
  }
}
