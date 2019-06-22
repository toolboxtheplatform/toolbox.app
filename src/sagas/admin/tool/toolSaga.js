import { put, call } from 'redux-saga/effects';
import { toolService } from '../../../services/admin/tool/toolService';

import * as types from '../../../actions'

export function* toolSaga(payload) {
  try {
    const response = yield call(toolService, payload);
    yield [
      put({ type: types.ON_NEW_TOOL_SUCCESS, response })
    ];
  } catch(error) {
    yield put({ type: types.ON_NEW_TOOL_SUCCESS, error });
  }
}
