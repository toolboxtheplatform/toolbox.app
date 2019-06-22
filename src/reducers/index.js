import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import tools from './tools/toolsReducer';

const rootReducer = combineReducers({
  register, login, tools
});

export default rootReducer;