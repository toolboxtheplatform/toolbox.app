import * as types from '../../actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.ON_NEW_TOOL_SUCCESS:
      return { ...state, response };
    case types.ON_NEW_TOOL_SUCCESS:
      return { ...state, response };
    default:
      return state;
  }
};