import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';
import {
  newToolSaga,
  deleteToolSaga,
  getToolsSaga
} from './admin/tool/toolSaga';
import {
  employeesSaga,
  getEmployeesSaga,
  deleteEmployeesSaga
} from './admin/employees/employeesSaga';
import { profileSaga } from './employees/profile/profileSaga';
import { employeesToolSaga } from './employees/employeesTools/employeesToolSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.ON_NEW_TOOL, newToolSaga);
  yield takeLatest(types.ON_DELETE_TOOL, deleteToolSaga);
  yield takeLatest(types.ON_FETCH_TOOLS_LIST, getToolsSaga);
  yield takeLatest(types.ADD_EMPLOYEE_BEGIN, employeesSaga);
  yield takeLatest(types.FETCH_EMPLOYEES_BEGIN, getEmployeesSaga);
  yield takeLatest(types.ON_DELETE_EMPLOYEE, deleteEmployeesSaga);
  yield takeLatest(types.FETCH_EMPLOYEES_TOOLS_BEGIN, employeesToolSaga);
  yield takeLatest(types.FETCH_EMPLOYEE_PROFILE_BEGIN, profileSaga);
}