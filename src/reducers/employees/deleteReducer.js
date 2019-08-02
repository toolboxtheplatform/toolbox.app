import * as types from '../../actions';

const initialState = {
  payload: [],
  loading: false,
  error: null,
};

export default function(state = initialState, action) {
  const response = action.response;

  switch(action.type) {
    case types.DELETE_EMPLOYEE_BEGIN:
      return { ...state, loading: true, error: null, };
    case types.DELETE_EMPLOYEE_SUCCESS:
      return { ...state, loading: false, payload: response, error: null, };
    case types.DELETE_EMPLOYEE_FAILURE:
      return { ...state, loading: false, payload: [], error: response, };
    default:
      return state;
  }
};