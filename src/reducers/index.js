import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import tools from './tools/toolsReducer';
import list from './list/listReducer';
import add from './employees/addReducer';
import fetch from './employees/fetchReducer';
import employees from './employees/employeesReducer';

const rootReducer = combineReducers({
  register,
  login,
  tools,
  list,
  add,
  fetch,
  employees
});

export default rootReducer;