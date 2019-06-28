import { put, call } from 'redux-saga/effects';
import { listService } from '../../../services/admin/list/listService';

import * as types from '../../../actions'

export function* listSaga(payload) {
  try {
    const response = yield call(listService, payload);
    yield [
      put({ type: types.ON_FETCH_TOOLS_LIST_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_FETCH_TOOLS_LIST_SUCCESS, error });
  }
}
