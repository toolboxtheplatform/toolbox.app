import { put, call } from 'redux-saga/effects';
import {
  registerUserService,
  loginUserService,
  renewPasswordService,
} from '../services/authenticationService';

import * as types from '../actions'

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield [
      put({ type: types.REGISTER_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield [
      put({ type: types.LOGIN_USER_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.LOGIN_USER_ERROR, error })
  }
}

export function* renewPasswordSaga(payload) {
  try {
    const response = yield call(renewPasswordService, payload);
    yield [
      put({ type: types.RENEW_PASSWORD_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.RENEW_PASSWORD_FAILURE, error })
  }
}