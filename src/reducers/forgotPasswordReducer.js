import * as types from '../actions';

const initialState = {
  payload: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  const payload = action.response;

  switch(action.type) {
    case types.RENEW_PASSWORD_BEGIN:
      return { ...state, loading: true, error: null }
    case types.RENEW_PASSWORD_SUCCESS:
      return { ...state, loading: false, payload: payload };
    case types.RENEW_PASSWORD_FAILURE:
      return { ...state, loading: false, error: payload, payload: [] };
    default:
      return state;
  }
};