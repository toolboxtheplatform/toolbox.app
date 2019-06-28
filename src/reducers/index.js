import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import tools from './tools/toolsReducer';
import list from './list/listReducer';

const rootReducer = combineReducers({
  register,
  login,
  tools,
  list
});

export default rootReducer;