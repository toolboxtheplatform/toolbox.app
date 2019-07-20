import * as types from '../../actions';

const initialState = {
  tools: [],
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  const response = action.response;

  switch(action.type) {
    case types.FETCH_EMPLOYEES_TOOLS_BEGIN:
      return { ...state, loading: true, error: null };
    case types.FETCH_EMPLOYEES_TOOLS_SUCCESS:
      return { ...state, loading: false, tools: response };
    case types.FETCH_EMPLOYEES_TOOLS_FAILURE:
      return { ...state, loading: false, error: response, tools: [] };
    default:
      return state;
  }
};