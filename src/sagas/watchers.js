import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import { toolSaga } from './admin/tool/toolSaga';
import { listSaga } from './admin/list/listSaga';
import { employeesSaga, fetchEmployeesSaga } from './admin/employees/employeesSaga';
import { employeesToolSaga } from './employees/employeesTools/employeesToolSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.ON_NEW_TOOL, toolSaga);
  yield takeLatest(types.ON_FETCH_TOOLS_LIST, listSaga);
  yield takeLatest(types.ON_NEW_EMPLOYEE, employeesSaga);
  yield takeLatest(types.ON_FETCH_EMPLOYEES, fetchEmployeesSaga);
  yield takeLatest(types.ON_FETCH_EMPLOYEE_TOOLS_LIST, employeesToolSaga);
}