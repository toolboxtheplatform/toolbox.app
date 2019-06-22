import * as types from './index';

export const newToolAction = (tool) => {
  return {
    type: types.ON_NEW_TOOL,
    tool
  }
};