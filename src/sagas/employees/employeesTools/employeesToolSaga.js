import { put, call } from 'redux-saga/effects';
import { employeesToolService } from '../../../services/employees/employeesTools/employeesToolService';

import * as types from '../../../actions'

export function* employeesToolSaga(payload) {
  try {
    const response = yield call(employeesToolService, payload);
    yield [
      put({ type: types.FETCH_EMPLOYEES_TOOLS_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.FETCH_EMPLOYEES_TOOLS_FAILURE, error });
  }
}
