import * as types from '../../actions';

export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.ON_DELETE_EMPLOYEE_SUCCESS:
      return { ...state, response };
    case types.ON_DELETE_EMPLOYEE_SUCCESS:
      return { ...state, response };
    default:
      return state;
  }
};