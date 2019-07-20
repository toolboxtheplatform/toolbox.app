import { put, call } from 'redux-saga/effects';
import {
  newToolService,
  deleteToolService,
  getToolsService
} from '../../../services/admin/tool/toolService';

import * as types from '../../../actions'

export function* newToolSaga(payload) {
  try {
    const response = yield call(newToolService, payload);
    yield [
      put({ type: types.ON_NEW_TOOL_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_NEW_TOOL_SUCCESS, error });
  }
}

export function* deleteToolSaga(payload) {
  try {
    const response = yield call(deleteToolService, payload);
    yield [
      put({ type: types.ON_DELETE_TOOL_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_DELETE_TOOL_SUCCESS, error });
  }
}

export function* getToolsSaga(payload) {
  try {
    const response = yield call(getToolsService, payload);
    yield [
      put({ type: types.ON_FETCH_TOOLS_LIST_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_FETCH_TOOLS_LIST_SUCCESS, error });
  }
}

