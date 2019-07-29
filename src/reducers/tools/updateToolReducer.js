import * as types from '../../actions';

const initialState = {
  payload: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  const payload = action.response;

  switch(action.type) {
    case types.UPDATE_TOOL_BEGIN:
      return { ...state, loading: true, error: null }
    case types.UPDATE_TOOL_SUCCESS:
      return { ...state, loading: false, payload: payload };
    case types.UPDATE_TOOL_FAILURE:
      return { ...state, loading: false, error: payload, payload: [] };
    default:
      return state;
  }
};