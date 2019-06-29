import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import tools from './tools/toolsReducer';
import list from './list/listReducer';
import add from './employees/addReducer';

const rootReducer = combineReducers({
  register,
  login,
  tools,
  list,
  add
});

export default rootReducer;