import { combineReducers } from 'redux';
import register from './registerReducer';
import login from './loginReducer';
import tools from './tools/toolsReducer';
import list from './list/listReducer';
import add from './employees/addReducer';
import remove from './employees/deleteReducer';
import fetch from './employees/fetchReducer';
import employees from './employees/employeesReducer';
import deleteTool from './tools/deleteToolReducer';
import profile from './employees/profileReducer';
import update from './employees/updateReducer';

const rootReducer = combineReducers({
  register,
  login,
  tools,
  list,
  add,
  remove,
  fetch,
  employees,
  deleteTool,
  profile,
  update,
});

export default rootReducer;