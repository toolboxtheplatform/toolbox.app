import * as types from '../../actions';

export default function(state = [], action) {
  const payload = action.response;
  switch(action.type) {
    case types.ON_FETCH_TOOLS_LIST_SUCCESS:
      return { ...state, payload };
    case types.ON_FETCH_TOOLS_LIST_SUCCESS:
      return { ...state, payload };
    default:
      return state;
  }
};