import * as types from '../../actions';

const initialState = {
  payload: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  const response = action.response;

  switch(action.type) {
    case types.ADD_EMPLOYEE_BEGIN:
      return { ...state, loading: true, error: null };
    case types.ADD_EMPLOYEE_SUCCESS:
      return { ...state, loading: false, payload: response };
    case types.ADD_EMPLOYEE_FAILURE:
      return { ...state, loading: false, error: response, payload: [] };
    default:
      return state;
  }
};