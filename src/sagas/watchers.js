import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga, renewPasswordSaga } from './authenticationSaga';
import {
  newToolSaga,
  deleteToolSaga,
  getToolsSaga,
  updateToolsSaga,
} from './admin/tool/toolSaga';
import {
  employeesSaga,
  getEmployeesSaga,
  deleteEmployeesSaga,
  searchEmployeesSaga,
} from './admin/employees/employeesSaga';
import { profileSaga, updateProfileSaga } from './employees/profile/profileSaga';
import { employeesToolSaga } from './employees/employeesTools/employeesToolSaga';

import * as types from '../actions';


export default function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.RENEW_PASSWORD_BEGIN, renewPasswordSaga);
  yield takeLatest(types.ON_NEW_TOOL, newToolSaga);
  yield takeLatest(types.ON_DELETE_TOOL, deleteToolSaga);
  yield takeLatest(types.FETCH_TOOLS_LIST_BEGIN, getToolsSaga);
  yield takeLatest(types.UPDATE_TOOL_BEGIN, updateToolsSaga);
  yield takeLatest(types.ADD_EMPLOYEE_BEGIN, employeesSaga);
  yield takeLatest(types.FETCH_EMPLOYEES_BEGIN, getEmployeesSaga);
  yield takeLatest(types.DELETE_EMPLOYEE_BEGIN, deleteEmployeesSaga);
  yield takeLatest(types.SEARCH_EMPLOYEE_BEGIN, searchEmployeesSaga);
  yield takeLatest(types.FETCH_EMPLOYEES_TOOLS_BEGIN, employeesToolSaga);
  yield takeLatest(types.FETCH_EMPLOYEE_PROFILE_BEGIN, profileSaga);
  yield takeLatest(types.UPDATE_EMPLOYEE_PROFILE_BEGIN, updateProfileSaga);
}