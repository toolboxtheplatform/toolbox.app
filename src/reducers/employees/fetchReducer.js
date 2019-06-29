import * as types from '../../actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.ON_FETCH_EMPLOYEES_SUCCESS:
      return { ...state, response };
    case types.ON_FETCH_EMPLOYEES_SUCCESS:
      return { ...state, response };
    default:
      return state;
  }
};