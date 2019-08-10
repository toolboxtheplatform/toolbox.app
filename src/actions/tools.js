import * as types from './index';

export const newToolAction = (tool) => {
  return {
    type: types.ON_NEW_TOOL,
    tool
  }
};

export const updateToolAction = payload => {
  return {
    type: types.UPDATE_TOOL_BEGIN,
    payload,
  }
};

export const fetchToolsListAction = payload => {
  return {
    type: types.FETCH_TOOLS_LIST_BEGIN,
    payload,
  }
};

export const fetchToolsAction = () => {
  return {
    type: types.FETCH_EMPLOYEES_TOOLS_BEGIN
  }
};

export const deleteToolAction = (id) => {
  return {
    type: types.ON_DELETE_TOOL,
    id
  }
};